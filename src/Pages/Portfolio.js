import { Paper, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Title from '../components/Title';

const Portfolio = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(event.target.name);
        setValue(newValue);
    };
    return (
        <Box id="portfolio" className="container" sx={{ pt: { lg: 5, xs: 7 }, px: { lg: 7, xs: 4 } }}>
            <Title
                title="FEATURED WORKS"
                subtitle="PORTFOLIO"
            />
            <Box>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab name="all" label="All" sx={{ color: 'white' }} />
                    <Tab name="nodejs" label="NodeJS" sx={{ color: 'white' }} />
                    <Tab name="reactjs" label="ReactJS" sx={{ color: 'white' }} />
                </Tabs>
            </Box>
            
        </Box>
    );
};

export default Portfolio;