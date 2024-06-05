import * as React from 'react';
import { Container, AppBar, Toolbar } from '@mui/material';

import './Bar.css';
import logo from './themes/logo.svg';

export default function ButtonAppBar() {
    return (
        <React.Fragment>
            <AppBar positionMode='static' className="navbar">
                <Container>
                    <Toolbar>
                        <img src={logo} alt="Georgia Institute of Technology" className='gt-logo'/>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    );
}