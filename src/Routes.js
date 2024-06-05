import * as React from 'react';
import { Router, Routes, Route } from "react-router-dom";
import Home from './Home.js'
//import Button from '@mui/material/Button';

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact Component={Home} />
            </Routes>
        </Router>
        
    );
}