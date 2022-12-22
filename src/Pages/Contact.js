import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import emailjs from 'emailjs-com';
import React from 'react';
import PageTitle from '../components/PageTitle';
import Title from '../components/Title';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${process.env.EMAILJS_SERVICE_ID}`, `${process.env.EMAILJS_TAMP_ID}`, e.target, `${process.env.EMAILJS_TAMP_ID}`)
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Box id="contact" className="container" sx={{ pt: { lg: 5, xs: 7 }, px: { lg: 7, xs: 4 } }}>
            <PageTitle title="Contact" />
            <Title
                title="GET IN TOUCH"
                subtitle="CONTACT"
            />
            <form onSubmit={sendEmail} className="contactUniversalContainer">
                <Container>
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