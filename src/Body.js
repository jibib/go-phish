import * as React from 'react';
import './Body.css';
import { Container,Box,Typography, TextField,Grid,BottomNavigation, BottomNavigationAction,Button } from '@mui/material';
import { blue } from '@mui/material/colors';

export default function Body() {
    return (
       <Container className='page-content'>
        <Box>
            <Typography className="title-color" align="left" fontWeight='bold' variant='h4' component="h4">Employee Engagement</Typography>
        </Box>
        <Box>
            <br></br>
            <Typography className="pgraph" variant="h5" align='left' fontWeight='bold'>Recognition Gifts</Typography>
            <Typography align='left'>Work to enhance the staff recognition gifts to include 15 year recipients.</Typography>
            <Typography className="pgraph" variant="h5" align='left' fontWeight='bold'>Employee Appreciation</Typography>
            <Typography align='left'>Continue to recognize staff by hosting the annual Employee Appreciation Event, in conjunction with the USG State Staff Council Conference.</Typography>

            <br></br>
            <br></br>
            <Typography className="pgraph" variant="h5" align='left' fontWeight='bold'>Employee Appreciation Gift Selection Form</Typography>
            <Typography align='left'>Please confirm your address</Typography>
        </Box>
        <Box className="form" component="form" noValidate>
            <Grid container spacing={2} columns={1}>
                <Grid item xs={5}>
                    <TextField id="filled-name" label="First Last" defaultValue="TA NAME" 
                    InputProps={{readOnly:true,}} fullWidth>
                    </TextField>
                </Grid>
                <Grid item xs={5}>
                    <TextField id="address" label="Address" autofocus fullWidth>
                    </TextField>
                </Grid>
                <Grid item xs={5}>
                    <TextField id="address2" label="Apt, Suite" autofocus fullWidth>
                    </TextField>
                </Grid>
                <Grid item xs={4}>
                    <TextField id="city" label="City" autofocus fullWidth>
                    </TextField>
                </Grid>
                <Grid item xs={4}>
                    <TextField id="state" label="State" autofocus fullWidth>
                    </TextField>
                </Grid>
                <Grid item xs={4}>
                    <TextField id="zip" label="Postal Code" autofocus fullWidth>
                    </TextField>
                </Grid>
                <Grid item xs={4}>
                    <TextField id="country" label="Country" autofocus fullWidth>
                    </TextField>
                </Grid>
            </Grid>
            <br></br>
            <Button variant="contained">Submit</Button>
        </Box>
       </Container>
        
    );
}