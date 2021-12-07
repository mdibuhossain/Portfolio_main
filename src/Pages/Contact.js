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
        </Box>
    );
};

export default Contact;