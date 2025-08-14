import React, { useState } from 'react';
import { 
  AppBar,
  Toolbar,
  IconButton,
  Badge,
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
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CloseIcon from '@mui/icons-material/Close';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import useStoreBag from "@/app/store/useStoreBag";
import moment from 'moment';

const Header = () => {

    const bag = useStoreBag((state) => state.bag)

    const cartItemCount = bag.length
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const calculateTotal = () => {
        return bag.reduce((total, item) => {
            const fullPriceItems = item.qantitySolded * item.price;
            const halfPriceItems = item.qantityHalfSolded * (item.price / 2);
            return total + fullPriceItems + halfPriceItems;
        }, 0);
    };


    return (
        <>
            <AppBar position="static" sx={{
                backgroundColor: 'background.paper',
                color: 'text.primary',
                boxShadow: 'none',
                borderBottom: '1px solid',
                borderColor: 'divider'
            }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Eventos Mtrix
                    </Typography>


                    <IconButton color="inherit" onClick={toggleCart}>
                        <Badge badgeContent={cartItemCount} color="error">
                            <ShoppingBagIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>

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
                        bag.map((item) => (
                            <React.Fragment key={`${item.uuid}`}>
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

                                {item.halfPrice && item.qantityHalfSolded > 0 && (
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
                        ))
                    ) : (
                        <Typography sx={{ p: 2 }}>Seu carrinho está vazio</Typography>
                    )}
                </List>

                <Divider />

                <Box sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Typography variant="subtitle1">Total:</Typography>
                        <Typography variant="subtitle1">R$ {calculateTotal().toFixed(2)}</Typography>
                    </Box>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={bag.length === 0}
                    >
                        Finalizar Compra
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;