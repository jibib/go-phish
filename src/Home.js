import * as React from 'react';
import { Container, Typography,Box,Button, TextField,Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import fimg from './themes/gt-footer.png';

import './Home.css';

export default function Home() {
    const navigate = useNavigate()

    const goToPage=()=>{
        navigate("/home");
    }
    return (
        <div>
            <div>
                <Container className='page-content'>
                    <Box>
                        <Typography align="left" variant='h4' component="h4">Staff Council</Typography>
                        <Typography className="title-color" align="left" fontWeight='bold' variant='h4' component="h4">Employee Engagement</Typography>
                    </Box>
                    
                    <Box>
                        <br></br>
                        <Typography align='left'>Please login to the Employee Engagement Portal</Typography>
                        <br></br>
                    </Box>

                    <Box 
                    height={200}
                    width={300}
                    display="flex">
                        <Card variant="outlined" size="lg" className='usercard'>
                            <CardContent>
                                <TextField style={{marginBottom:"10px"}} id="username" label="GT Account"></TextField>
                                <br></br>
                                <TextField style={{marginBottom:"10px"}} id="password" label="Password" type="password"></TextField>
                                <Button onClick={() => goToPage()}>Submit</Button>
                            </CardContent>
                        </Card>
                    </Box>
                    
                </Container>
                <br></br>
                
            </div>
            
            <div class="sticky-image-wrapper">
                <footer>
                    <img src={fimg} alt="Georgia Institute of Technology" className='fix'/>
                </footer>
            </div>
        </div>
    );
}