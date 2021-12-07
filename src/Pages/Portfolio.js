import { Grid, Paper, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Title from '../components/Title';

const Portfolio = () => {
    const [products, setProducts] = useState([]);
    const [finalProducts, setFinalProducts] = useState([]);

    useEffect(() => {
        fetch('./projectData.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFinalProducts(data);
            })
    }, [])


    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        const query = (event.target.name);
        setValue(newValue);
        const filterProduct = products.filter(product => product?.categories?.includes(query));
        setFinalProducts(filterProduct);
    };
    console.log(finalProducts);
    return (
        <Box id="portfolio" className="container" sx={{ pt: { lg: 5, xs: 7 }, px: { lg: 7, xs: 4 } }}>
            <Title
                title="FEATURED WORKS"
                subtitle="PORTFOLIO"
            />
            <Box>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab name="javascript" label="All" sx={{ color: 'white' }} />
                    <Tab name="nodejs" label="NodeJS" sx={{ color: 'white' }} />
                    <Tab name="reactjs" label="ReactJS" sx={{ color: 'white' }} />
                </Tabs>
            </Box>
            <Box>
                <Grid container spacing={3}>
                    {
                        finalProducts.map(product => {
                            return (
                                <Product
                                    key={product.name}
                                    product={product}
                                />
                            )
                        })
                    }
                </Grid>
            </Box>
        </Box >
    );
};

export default Portfolio;