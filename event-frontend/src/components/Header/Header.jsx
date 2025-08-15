import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,

    Typography,

} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import useStoreBag from "@/app/store/useStoreBag";
import SideMenuBag from '../SideMenuBag/SideMenuBag';
import { useRouter } from 'next/navigation';

const Header = () => {

    const bag = useStoreBag((state) => state.bag)

    const cartItemCount = bag.length
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const router = useRouter();

    const handleCheckout = () => {
        router.push('/checkout');
    }


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

            <SideMenuBag
                bag={bag}
                isCartOpen={isCartOpen}
                toggleCart={toggleCart}
                handleCheckout={handleCheckout}
            />

        </>
    );
};

export default Header;