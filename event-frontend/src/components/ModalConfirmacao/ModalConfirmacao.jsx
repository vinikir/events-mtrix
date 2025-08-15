import { useRouter } from 'next/navigation';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Typography,
    Button,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Chip,
    Divider
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import useStoreBag from '@/app/store/useStoreBag';

const ModalConfirmacao = ({
    confirmationOpen,
    onClose,
    resultData,
    userName = 'Cliente'
}) => {
    const router = useRouter();
    const clearBag = useStoreBag(state => state.clearBag);

    const handleClose = () => {
        onClose();
        clearBag();
        router.push('/');
    };

    return (
        <Dialog
            open={confirmationOpen}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
        >
            <DialogTitle sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    {resultData?.failedItems?.length > 0 ? (
                        <ErrorIcon color="warning" sx={{ fontSize: 60, mb: 2 }} />
                    ) : (
                        <CheckCircleIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
                    )}
                </Box>
                <Typography variant="h5" component="div">
                    {resultData?.failedItems?.length > 0
                        ? 'Processamento Parcial'
                        : 'Compra Finalizada!'}
                </Typography>
            </DialogTitle>

            <DialogContent>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography variant="body1" paragraph>
                        {userName}, obrigado por comprar conosco!
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {resultData.message || 'Seu pedido foi processado.'}
                    </Typography>
                </Box>

                {resultData?.failedItems?.length > 0 && (
                    <>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="subtitle1" color="error" gutterBottom>
                            Atenção: {resultData.failedItems.length} item(ns) não foi(ram) processado(s):
                        </Typography>

                        <List dense sx={{ maxHeight: 300, overflow: 'auto' }}>
                            {resultData.failedItems.map((failedItem, index) => (
                                <ListItem key={index} alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={failedItem.item.name}
                                            src={failedItem.item.image}
                                            variant="rounded"
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={failedItem.item.name}
                                        secondary={
                                            <>
                                                <Typography variant="body2">
                                                    {new Date(failedItem.item.date).toLocaleDateString('pt-BR', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        year: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </Typography>
                                                <Typography variant="body2">
                                                    {failedItem.item.local}
                                                </Typography>
                                                <Chip
                                                    label="Falta de saldo"
                                                    color="error"
                                                    size="small"
                                                    sx={{ mt: 1 }}
                                                    icon={<ErrorIcon fontSize="small" />}
                                                />
                                            </>
                                        }
                                    />
                                    <Typography variant="body2" color="text.secondary">
                                        R$ {failedItem.item.totalPrice.toFixed(2)}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>

                        <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
                            Por favor, verifique seu saldo e tente novamente com estes itens.
                        </Typography>
                    </>
                )}
            </DialogContent>

            <DialogActions sx={{ justifyContent: 'center', pb: 3, px: 3 }}>
                <Button
                    variant="contained"
                    color={resultData?.failedItems?.length > 0 ? "warning" : "primary"}
                    onClick={handleClose}
                    size="large"
                    fullWidth
                >
                    {resultData?.failedItems?.length > 0
                        ? 'Entendi, voltar à página inicial'
                        : 'Voltar à Página Inicial'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalConfirmacao;