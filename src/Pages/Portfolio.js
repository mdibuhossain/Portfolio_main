import { Box } from '@mui/system';
import React from 'react';
import Title from '../components/Title';

const Portfolio = () => {
    return (
        <Box id="portfolio" className="container" sx={{ pt: { lg: 5, xs: 7 }, pl: { lg: 7, xs: 4 } }}>
            <Title
                title="FEATURED WORKS"
                subtitle="PORTFOLIO"
            />
        </Box>
    );
};

export default Portfolio;