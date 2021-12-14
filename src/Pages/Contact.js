import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import emailjs from 'emailjs-com';
import React from 'react';
import PageTitle from '../components/PageTitle';
import Title from '../components/Title';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_cxyg5rq', e.target, 'user_DIPj6sgA5NCMk4G4DKpkz')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Box id="contact" className="container" sx={{ pt: { lg: 5, xs: 7 }, px: { lg: 7, xs: 4 } }}>
            <PageTitle title="Contact"/>
            <Title
                title="GET IN TOUCH"
                subtitle="CONTACT"
            />
            <form onSubmit={sendEmail} className="contactUniversalContainer">
                <Container sx={{ width: 'calc(100vw - 20vw)' }}>
                    <Grid sx={{ width: '100%' }} container spacing={{ md: 3 }}>
                        <Grid className="contactContainer" item xs={12} md={6}>
                            <Typography>
                                Your Name
                            </Typography>
                            <input
                                type="text"
                                name="name"
                            />
                            <Typography>
                                Your Email
                            </Typography>
                            <input
                                type="text"
                                name="email"
                            />
                            <Typography>
                                Subject
                            </Typography>
                            <input
                                type="text"
                                name="subject"
                            />
                        </Grid>
                        <Grid className="contactContainer" item xs={12} md={6}>
                            <Typography>
                                Message
                            </Typography>
                            <textarea
                                name="message"
                                rows="12"
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" sx={{ display: 'block', margin: '20px auto 5px', width: '200px' }} variant='contained'>Submit</Button>
                </Container>
            </form>
        </Box>
    );
};

export default Contact;