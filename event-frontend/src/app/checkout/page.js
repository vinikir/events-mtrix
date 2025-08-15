"use client";
import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import {
	Container,
	Typography,
	Box,
	Stepper,
	Step,
	StepLabel,
	Button,
	Divider,
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar,
	TextField,
	Grid,
	Paper
} from '@mui/material';
import useStoreBag from "@/app/store/useStoreBag";
import useStoreUser from '../store/useStoreUser';
import ModalLogin from '@/components/ModalLogin/ModalLogin';
import ModalConfirmacao from '@/components/ModalConfirmacao/ModalConfirmacao';
import { placeOrder } from '@/services/api';
import { calculateTotal } from '@/services/functions';

const Checkout = () => {
	const router = useRouter();

	const { bag, clearBag } = useStoreBag();
	const { user } = useStoreUser();

	const [activeStep, setActiveStep] = useState(0);
	const [paymentMethod, setPaymentMethod] = useState('credit');

	const [resultData, setResultData] = useState({})

	const [loginModalOpen, setLoginModalOpen] = useState(false);

	const [confirmationOpen, setConfirmationOpen] = useState(false);

	const steps = ['Revisão do Pedido', 'Pagamento', 'Confirmação'];


	useEffect(() => {
		if (bag.length === 0) {
			router.push('/');
		}
	}, [bag]);

	console.log(bag)
	const handleNext = () => {
		if (activeStep === steps.length - 1) {

			sendOrder()

		} else {


			if (activeStep == 0 && typeof user.user === "undefined") {
				setLoginModalOpen(true)
				return
			}
			setActiveStep(prev => prev + 1);
		}
	};

	const handleBack = () => {
		setActiveStep(prev => prev - 1);
	};

	const sendOrder = () => {
		const infos = {
			bag: bag,
			user: user.user
		}

		const token = user.access_token

		placeOrder(infos, token).then((res) => {
			console.log(res)
			setResultData(res.valor)
			setConfirmationOpen(true)
		}).catch((err) => {
			console.log(err)
		})
	}
	return (
		<Container maxWidth="lg" sx={{ my: 4 }}>
			<ModalLogin
				loginModalOpen={loginModalOpen}
				closeModal={() => setLoginModalOpen(false)}
				handleNext={handleNext}
			/>
			<ModalConfirmacao 
				confirmationOpen={confirmationOpen}
				resultData={resultData}
				userName={user.user.name}
				onClose={() => setConfirmationOpen(false)}
			/>
			<Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
				{steps.map(label => (
					<Step key={label}>
						<StepLabel
							sx={{
								// Estilo para o label no estado padrão
								'& .MuiStepLabel-label': {
									color: 'white',
								},
								// Estilo para o label no estado ativo
								'& .MuiStepLabel-label.Mui-active': {
									color: 'white',
									fontWeight: 'bold',
								},
								// Estilo para o label no estado completo
								'& .MuiStepLabel-label.Mui-completed': {
									color: 'white',
									textDecoration: 'underline',
								},
							}}
						>{label}</StepLabel>
					</Step>
				))}
			</Stepper>

			<Grid container spacing={4}>

				<Grid item xs={12} md={7}>
					<Paper elevation={3} sx={{ p: 3 }}>
						{activeStep === 0 && (
							<>
								<Typography variant="h6" gutterBottom>
									Seu Pedido
								</Typography>
								<List>
									{bag.map(item => (
										<React.Fragment key={`${item.uuid}-${item.id}`}>
											<ListItem alignItems="flex-start">
												<ListItemAvatar>
													<Avatar
														alt={item.name}
														src={item.image}
														variant="rounded"
														sx={{ width: 56, height: 56, mr: 2 }}
													/>
												</ListItemAvatar>
												<ListItemText
													primary={item.name}
													secondary={
														<>
															<Typography variant="body2">
																{new Date(item.date).toLocaleDateString('pt-BR', {
																	day: '2-digit',
																	month: '2-digit',
																	year: 'numeric',
																	hour: '2-digit',
																	minute: '2-digit'
																})}
															</Typography>
															<Typography variant="body2">
																{item.local}
															</Typography>
														</>
													}
												/>
											</ListItem>

											{item.qantitySolded > 0 && (
												<ListItem sx={{ pl: 9 }}>
													<ListItemText
														primary={
															<Box display="flex" justifyContent="space-between">
																<Typography variant="body2">
																	Inteira: {item.qantitySolded}x
																</Typography>
																<Typography>
																	R$ {(item.price * item.qantitySolded).toFixed(2)}
																</Typography>
															</Box>
														}
													/>
												</ListItem>
											)}

											{item.halfPrice && item.qantityHalfSolded > 0 && (
												<ListItem sx={{ pl: 9 }}>
													<ListItemText
														primary={
															<Box display="flex" justifyContent="space-between">
																<Typography variant="body2">
																	Meia: {item.qantityHalfSolded}x
																</Typography>
																<Typography>
																	R$ {(item.price / 2 * item.qantityHalfSolded).toFixed(2)}
																</Typography>
															</Box>
														}
													/>
												</ListItem>
											)}
											<Divider sx={{ my: 2 }} />
										</React.Fragment>
									))}
								</List>
							</>
						)}

						{activeStep === 1 && (
							<>
								<Typography variant="h6" gutterBottom>
									Método de Pagamento
								</Typography>
								<Box sx={{ my: 2 }}>
									<Button
										fullWidth
										variant={paymentMethod === 'credit' ? 'contained' : 'outlined'}
										onClick={() => setPaymentMethod('credit')}
										sx={{ mb: 2, py: 1.5 }}
									>
										Cartão de Crédito
									</Button>
									<Button
										fullWidth
										variant={paymentMethod === 'pix' ? 'contained' : 'outlined'}
										onClick={() => setPaymentMethod('pix')}
										sx={{ py: 1.5 }}
									>
										PIX
									</Button>
								</Box>

								{paymentMethod === 'credit' && (
									<Box sx={{ mt: 3 }}>
										<TextField fullWidth label="Número do Cartão" sx={{ mb: 2 }} />
										<Grid container spacing={2}>
											<Grid item xs={6}>
												<TextField fullWidth label="Validade" />
											</Grid>
											<Grid item xs={6}>
												<TextField fullWidth label="CVV" />
											</Grid>
										</Grid>
									</Box>
								)}
							</>
						)}

						{activeStep === 2 && (
							<>
								<Typography variant="h6" gutterBottom>
									Confirmação
								</Typography>
								<Typography paragraph>
									Após a finalização, seu pedido será registrado e processado.
								</Typography>
								<Typography paragraph>
									Enviamos os detalhes para o seu e-mail.
								</Typography>
							</>
						)}
					</Paper>
				</Grid>

				{/* Resumo do Pagamento */}
				<Grid item xs={12} md={5}>
					<Paper elevation={3} sx={{ p: 3, position: 'sticky', top: 16 }}>
						<Typography variant="h6" gutterBottom>
							Resumo do Pedido
						</Typography>

						<List>
							{bag.flatMap(item => [
								...(item.qantitySolded > 0 ? [{
									name: `${item.name} (Inteira)`,
									price: item.price,
									quantity: item.qantitySolded
								}] : []),
								...(item.halfPrice && item.qantityHalfSolded > 0 ? [{
									name: `${item.name} (Meia)`,
									price: item.price / 2,
									quantity: item.qantityHalfSolded
								}] : [])
							]).map((item, index) => {

								return (
									<ListItem key={index} sx={{ py: 0.5 }}>
										<ListItemText
											primary={`${item.quantity}x ${item.name}`}
											secondary={`R$ ${parseFloat(item.price).toFixed(2)}`}
										/>
										<Typography>
											R$ {(item.price * item.quantity).toFixed(2)}
										</Typography>
									</ListItem>
								)
							})}
						</List>

						<Divider sx={{ my: 2 }} />

						<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
							<Typography variant="subtitle1">Total:</Typography>
							<Typography variant="subtitle1">
								R$ {calculateTotal().toFixed(2)}
							</Typography>
						</Box>

						<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
							<Button
								disabled={activeStep === 0}
								onClick={handleBack}
								sx={{ mr: 1 }}
							>
								Voltar
							</Button>
							<Button
								variant="contained"
								color="primary"
								onClick={handleNext}
								fullWidth
							>
								{activeStep === steps.length - 1 ? 'Finalizar Compra' : 'Próximo'}
							</Button>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Checkout;