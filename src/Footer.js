import * as React from 'react';
import { Typography,Box } from '@mui/material';
//import Button from '@mui/material/Button';

import './Footer.css';

export default function ButtonAppBar() {
    return (
        <React.Fragment>
            <Box className="footer">
                <Typography>© 2024 Georgia Institute of Technology</Typography>
            </Box>
        </React.Fragment>
    );
}