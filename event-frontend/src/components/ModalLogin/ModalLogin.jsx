
import React, { useState } from 'react';

import {
    Box,
    TextField,
    Alert,
    CircularProgress,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    InputAdornment,
    IconButton,
    Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { login } from '@/services/api';
import useStoreUser from '@/app/store/useStoreUser';
const ModalLogin = ({ loginModalOpen, closeModal, handleNext }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });
    const { user, setUser } = useStoreUser();
    const [loginError, setLoginError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const handleLoginSubmit = () => {

        setIsLoading(true)
        login(loginForm).then((res) => {

            if (res?.response?.erro) {
                setLoginError(res.response.valor)
                return
            }

            if (res?.erro) {
                setLoginError(res.valor)
                return
            }
            
            setUser(res.valor)
            clearInfosAndCloseModal()
            handleNext()

        }).catch((err) => {
            console.log("err", err)
            setLoginError("Erro ao conectar com o servidor. Tente novamente mais tarde.")

        }).finally(() => {

            setIsLoading(false)

        })
    }

    const handleLoginChange = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        });
    };


    const clearInfosAndCloseModal = () => {
        closeModal()
        setLoginError(null);
        setLoginForm({
            email: '',
            password: ''
        });
        setIsLoading(false)
        closeModal()
    }

    return (
        <Dialog
            open={loginModalOpen}
            onClose={clearInfosAndCloseModal}
            maxWidth="xs"
            fullWidth
        >
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    Faça login para continuar
                    <IconButton onClick={clearInfosAndCloseModal}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>


            <DialogContent dividers>
                {loginError && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {loginError}
                    </Alert>
                )}
                <TextField
                    fullWidth
                    label="E-mail"
                    name="email"
                    type="email"
                    value={loginForm.email}
                    onChange={handleLoginChange}
                    margin="normal"
                    required
                />

                <TextField
                    fullWidth
                    label="Senha"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    margin="normal"
                    required
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </DialogContent>

            <DialogActions sx={{ justifyContent: 'space-between', p: 2 }}>


                <Box>
                    <Button
                        onClick={clearInfosAndCloseModal}
                        sx={{ mr: 1 }}
                    >
                        Cancelar
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isLoading || !loginForm.email || !loginForm.password}
                        startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
                        onClick={handleLoginSubmit}
                    >
                        {isLoading ? 'Autenticando...' : 'Entrar'}
                    </Button>
                </Box>
            </DialogActions>

        </Dialog>
    )

}

export default ModalLogin