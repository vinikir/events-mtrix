import React, { useMemo, useState } from 'react';
import {
    Container,
    ListItem,
    ListItemText,
    Divider,
    Typography,
    IconButton,
    Button
} from '@mui/material';
import moment from 'moment';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useStoreBag from '@/app/store/useStoreBag';

const CardEvent = React.memo(({ event }) => {

    const setBag = useStoreBag((state) => state.setBag)

    const [quantity, setQuantity] = useState(0)
    const [quantityHalf, setQuantityHalf] = useState(0)

    const availableQuantity = event.maximumAmount - event.sold

    const img = useMemo(() => {
        return event.image ? event.image : "/assets/noimage.png";
    }, [event.image]);

    const meiValue = useMemo(() => {
        if (!event.price) return 'N/A';
        const value = parseFloat(event.price) / 2;
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }, [event.price]);

    const formattedSaleValue = useMemo(() => {
        if (!event.price) return 'N/A';
        return parseFloat(event.price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }, [event.price]);


    const addItemToBag = () => {
        event.qantitySolded = quantity
        event.qantityHalfSolded = quantityHalf
        setBag( event )
    }

    const addQuantity = () => {
        setQuantity((val) => val + 1)
    }

    const addQuantityHalf = () => {
        setQuantityHalf((val) => val + 1)
    }

    const removeQuantity = () => {
        setQuantity((val) => val - 1)
    }

    const removeQuantityHalf = () => {
        setQuantityHalf((val) => val - 1)
    }

    const isSoldOut = useMemo(() => { return event.sold >= event.maximumAmount }, [event.sold])

    return (
        <div key={event.uuid}>
            <Container >
                <Container maxWidth="sm" sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <img
                        srcSet={`${img}`}
                        src={`${img}`}
                        alt={event.name}
                        loading="lazy"
                        height={300}
                        width={400}
                    />
                </Container>

                <ListItem>
                    <ListItemText
                        primary={event.name}
                        secondary={
                            <>
                                <Typography component="span" variant="body2" color="text.primary">
                                    Data: {moment(event.date).format("DD/MM/YYYY HH:mm")}
                                </Typography>
                                <br />
                                <Typography component="span" variant="body2" color="text.primary">
                                    Local: {event.local}
                                </Typography>
                                <br />
                                {
                                    isSoldOut ? (
                                        <Container>
                                            Esgotado
                                        </Container>

                                    ) :
                                        (
                                            <div>
                                                <Typography sx={{ flexDirection: "row", display: "flex", alignItems: "center" }} component="div" variant="body2" color="text.primary">
                                                    <Typography sx={{ marginRight: "25px" }} component="div" variant="body2" color="text.primary">

                                                        Valor de venda: {formattedSaleValue}
                                                    </Typography>
                                                    <Typography sx={{ width: "100px", alignItems: "center", justifyContent: "center", display: "flex" }} component="div" variant="body2" color="text.primary">

                                                        {
                                                            quantity > 0 && (
                                                                <IconButton
                                                                    onClick={removeQuantity}
                                                                    aria-label="Remover"
                                                                >
                                                                    <RemoveIcon />
                                                                </IconButton>
                                                            )
                                                        }

                                                        {quantity}
                                                        {
                                                            (availableQuantity >= quantity) && (
                                                                <IconButton
                                                                    onClick={addQuantity}
                                                                    aria-label="Adicionar"
                                                                >
                                                                    <AddIcon />
                                                                </IconButton>
                                                            )
                                                        }
                                                    </Typography>



                                                </Typography>
                                                <br />
                                                <Typography sx={{ flexDirection: "row", display: "flex", alignItems: "center" }} component="div" variant="body2" color="text.primary">
                                                    <Typography sx={{ marginRight: "2px" }} component="div" variant="body2" color="text.primary">

                                                        Valor meia entrada: {meiValue}
                                                    </Typography>
                                                    <Typography sx={{ width: "100px", alignItems: "center", justifyContent: "center", display: "flex" }} component="div" variant="body2" color="text.primary">
                                                        {
                                                            quantityHalf > 0 && (
                                                                <IconButton
                                                                    onClick={removeQuantityHalf}
                                                                    aria-label="Remover"
                                                                >
                                                                    <RemoveIcon />
                                                                </IconButton>
                                                            )
                                                        }
                                                        {quantityHalf}
                                                        {
                                                            availableQuantity >= quantityHalf && (
                                                                <IconButton
                                                                    onClick={addQuantityHalf}
                                                                    aria-label="Adicionar"
                                                                >
                                                                    <AddIcon />
                                                                </IconButton>
                                                            )
                                                        }
                                                    </Typography>

                                                </Typography>
                                            </div>

                                        )
                                }


                            </>
                        }
                    />
                </ListItem>
                <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4 }}>
                    {(quantity > 0 || quantityHalf > 0) && (
                        <Button onClick={addItemToBag} variant="outlined">Adicionar</Button>
                    )}
                </Container>
                <br/>
                <Divider />
                <br/>
            </Container >
        </div>
    )
})

export default CardEvent;