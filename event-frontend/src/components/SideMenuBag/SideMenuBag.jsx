import React, { useState } from 'react';
import {

    IconButton,

    Drawer,
    Box,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider,
    Button,
    Chip
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DeleteIcon from '@mui/icons-material/Delete';

import moment from 'moment';
import useStoreBag from "@/app/store/useStoreBag";
import { calculateTotal } from '@/services/functions';

const SideMenuBag = ({ bag, isCartOpen, toggleCart, handleCheckout }) => {

    const clearBag = useStoreBag((state) => state.clearBag)
    return (
        <Drawer
            anchor="right"
            open={isCartOpen}
            onClose={toggleCart}
            PaperProps={{
                sx: { width: 350, padding: 2 }
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">Seu Carrinho</Typography>
                <IconButton onClick={toggleCart}>
                    <CloseIcon />
                </IconButton>
            </Box>

            <Divider />


            <List sx={{ flexGrow: 1, overflow: 'auto' }}>
                {bag.length > 0 ? (
                    bag.map((item, index) => {
                        console.log(item)
                        return (
                            <React.Fragment key={`${item.uuid}-${index}`}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt={item.name} src={item.image} variant="rounded" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={
                                            <>
                                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                                                    <EventIcon fontSize="small" sx={{ mr: 0.5 }} />
                                                    <Typography variant="body2" component="span">
                                                        {moment(item.date).format("DD/MM/YYYY HH:mm")}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <LocationOnIcon fontSize="small" sx={{ mr: 0.5 }} />
                                                    <Typography variant="body2" component="span">
                                                        {item.local}
                                                    </Typography>
                                                </Box>
                                            </>
                                        }
                                    />
                                </ListItem>


                                {item.qantitySolded > 0 && (
                                    <ListItem sx={{ pt: 0, pb: 0 }}>
                                        <ListItemText
                                            primary={
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <Typography variant="body2">
                                                        Entrada Inteira
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Chip
                                                            label={`${item.qantitySolded}x`}
                                                            size="small"
                                                            sx={{ mr: 1 }}
                                                        />
                                                        <Typography variant="body2">
                                                            R$ {(item.price * item.qantitySolded).toFixed(2)}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            }
                                        />
                                    </ListItem>
                                )}

                                { item.qantityHalfSolded > 0 && (
                                    <ListItem sx={{ pt: 0, pb: 0 }}>
                                        <ListItemText
                                            primary={
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <Typography variant="body2">
                                                        Meia Entrada
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Chip
                                                            label={`${item.qantityHalfSolded}x`}
                                                            size="small"
                                                            sx={{ mr: 1 }}
                                                        />
                                                        <Typography variant="body2">
                                                            R$ {(item.price / 2 * item.qantityHalfSolded).toFixed(2)}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            }
                                        />
                                    </ListItem>
                                )}

                                <Divider sx={{ my: 1 }} />
                            </React.Fragment>
                        )
                    })
                ) : (
                    <Typography sx={{ p: 2 }}>Seu carrinho está vazio</Typography>
                )}
            </List>

            <Divider />

            <Box sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="subtitle1">Total:</Typography>
                    <Typography variant="subtitle1">R$ {calculateTotal(bag).toFixed(2)}</Typography>
                </Box>

                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleCheckout}
                    disabled={bag.length === 0}
                    sx={{ py: 1.5, mb: 1 }}
                >
                    Finalizar Compra
                </Button>

                <Button
                    fullWidth
                    variant="outlined"
                    color="error"
                    disabled={bag.length === 0}
                    startIcon={<DeleteIcon />}
                    onClick={clearBag}
                    sx={{ py: 1.5 }}
                >
                    Limpar Carrinho
                </Button>
            </Box>

        </Drawer>
    )
}

export default SideMenuBag