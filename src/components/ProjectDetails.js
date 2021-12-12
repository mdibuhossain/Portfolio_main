import { Box } from '@mui/system';
import React from 'react';
import Title from './Title';

const ProjectDetails = () => {
    return (
        <Box className="container" sx={{ pt: { lg: 5, xs: 7 }, px: { lg: 7, xs: 4 } }}>
            <Title
                title='graphiXshop'
                subtitle="PROJECT"
            />
        </Box>
    );
};

export default ProjectDetails;