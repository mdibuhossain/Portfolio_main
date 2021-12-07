import { Box } from '@mui/system';
import React from 'react';
import Title from '../components/Title';

const Blogs = () => {
    return (
        <Box id="blogs" className="container" sx={{ pt: { lg: 5, xs: 7 }, px: { lg: 7, xs: 4 } }}>
            <Title
                title="LATEST BLOGS"
                subtitle="BLOGS"
            />
            Comming soon
        </Box>
    );
};

export default Blogs;