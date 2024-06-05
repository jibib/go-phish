import * as React from 'react';
import './Body.css';
import { Container,Box,Typography, TextField,Grid,Button,Card, CardContent } from '@mui/material';

export default function Body() {
    return (
       <Container className='page-content'>
        <Box>
            <Typography style={{marginTop: "10px", marginBottom: "10px",}} align="left" variant='h4' component="h4">Staff Council</Typography>
            <Typography className="title-color" align="left" fontWeight='bold' variant='h4' component="h4">Employee Engagement</Typography>
        </Box>
        <Box>
            <br></br>
            <Typography className="pgraph" variant="h5" align='left' fontWeight='bold'>Recognition Gifts</Typography>
            <Typography align='left'>Working to enhance the staff recognition gifts to include 1 year recipients.</Typography>
            <Typography className="pgraph" variant="h5" align='left' fontWeight='bold'>Employee Appreciation</Typography>
            <Typography align='left'>Continue to recognize staff and their valiant efforts.</Typography>
            <br></br>
            <Typography className="pgraph" variant="h5" align='left' fontWeight='bold'>Employee Appreciation Gift Selection Form</Typography>
            <Typography align='left'>Please update your address</Typography>
        </Box>
        <Box className="form" component="form" noValidate>
            <Card>
                <CardContent>
                    <Grid container spacing={2} columns={1}>
                        <Grid item xs={5}>
                            <TextField style={{width:"50%"}} id="filled-name" label="Full Name" defaultValue="Eldon Luk" 
                            InputProps={{readOnly:true,}}>
                            </TextField>
                        </Grid>
                        <Grid item xs={5}>
                            <TextField style={{width:"50%"}} id="address" label="Address" autofocus>
                            </TextField>
                        </Grid>
                        <Grid item xs={5}>
                            <TextField style={{width:"50%"}} id="address2" label="Apt, Suite" autofocus>
                            </TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField style={{width:"50%"}} id="city" label="City" autofocus>
                            </TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField style={{width:"50%"}} id="state" label="State" autofocus>
                            </TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField style={{width:"50%"}} id="zip" label="Postal Code" autofocus>
                            </TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField style={{width:"50%"}} id="country" label="Country" autofocus>
                            </TextField>
                        </Grid>
                    </Grid>
                    <br></br>
                    <Button variant="contained">Submit</Button>
                </CardContent>
            </Card>
        </Box>
       </Container>
        
    );
}