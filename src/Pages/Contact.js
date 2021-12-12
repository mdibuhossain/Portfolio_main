import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Title from '../components/Title';

const Contact = () => {
    return (
        <Box id="contact" className="container" sx={{ pt: { lg: 5, xs: 7 }, px: { lg: 7, xs: 4 } }}>
            <Title
                title="GET IN TOUCH"
                subtitle="CONTACT"
            />
            <form className="contactUniversalContainer">
                <Container sx={{ width: 'calc(100vw - 20vw)' }}>
                    <Grid sx={{ width: '100%' }} container spacing={{ md: 3 }}>
                        <Grid className="contactContainer" item xs={12} md={6}>
                            <Typography>
                                Your Name
                            </Typography>
                            <input type="text" />
                            <Typography>
                                Your Email
                            </Typography>
                            <input type="text" />
                            <Typography>
                                Phone Number
                            </Typography>
                            <input type="text" />
                        </Grid>
                        <Grid className="contactContainer" item xs={12} md={6}>
                            <Typography>
                                Message
                            </Typography>
                            <textarea id="w3review" name="w3review" rows="11" />
                        </Grid>
                    </Grid>
                    <Button type="submit" sx={{ display: 'block', margin: '20px auto 5px', width: '200px' }} variant='contained'>Submit</Button>
                </Container>
            </form>
        </Box>
    );
};

export default Contact;