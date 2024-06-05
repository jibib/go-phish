import * as React from 'react';
import { Container, AppBar, Toolbar, Typography,Box } from '@mui/material';
//import Button from '@mui/material/Button';

import './Bar.css';
import logo from './themes/logo.svg';

export default function ButtonAppBar() {
    return (
        <React.Fragment>
            <AppBar positionMode='static' className="navbar">
                <Container>
                    <Toolbar>
                        <img src={logo} alt="Georgia Institute of Technology" className='gt-logo'/>
                        {/*<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>*/}
                        
                    </Toolbar>
                </Container>
            </AppBar>
        
        <Box className='navbar2'>
                <Typography align="left" variant='h4' component="h4">Staff Council</Typography>
        </Box>
        </React.Fragment>
    );
}