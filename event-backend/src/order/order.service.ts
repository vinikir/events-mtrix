import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Decimal } from '@prisma/client/runtime/library';

interface OrderItem {
    uuid: string;
    eventId: number;
    price: Decimal;
    qantitySolded: number;
    qantityHalfSolded: number;
    totalPrice: Decimal;
    createdAt: Date;
    updatedAt: Date;
    id: number;
    userId: number;
}
interface FailedItem {
    item: any;
    error: string;
}

@Injectable()
export class OrderService {

    constructor(private prisma: PrismaService) { }



    async createOrderAndUpdateSold(infos) {
        try {

            const { bag, user } = infos
            const successfulOrders: OrderItem[] = [];
            const failedItems: FailedItem[] = [];

            for (const item of bag) {
                try {

                    const result = await this.prisma.$transaction(async (prisma) => {


                        const event = await prisma.event.findUnique({
                            where: { id: item.id },
                        });

                        if (!event) {
                            throw `Evento com ID ${item.id} não encontrado.`;
                        }

                        const amountToSell = item.qantitySolded + item.qantityHalfSolded;
                        const remainingStock = event.maximumAmount - event.sold;

                        if (remainingStock < amountToSell) {

                            throw `Estoque insuficiente para o evento ${event.name}.`;
                        }


                        const createdOrder = await prisma.order.create({
                            data: {
                                userId: user.id,
                                eventId: item.id,
                                price: item.price,
                                qantitySolded: item.qantitySolded,
                                qantityHalfSolded: item.qantityHalfSolded,
                                totalPrice: item.totalPrice,
                            },
                        });

                        const updatedEvent = await prisma.event.update({
                            where: { id: item.id },
                            data: {
                                sold: {
                                    increment: amountToSell,
                                },
                            },
                        });

                        return { createdOrder, updatedEvent };
                    });


                    successfulOrders.push(result.createdOrder);
                } catch (error) {

                    failedItems.push({ item, error: error.message });
                }
            }





            
            return {
                message: 'Processamento do carrinho finalizado.',
                successfulOrders,
                failedItems,
            };

        } catch (error) {

            throw error.message;

        }
    }
}
