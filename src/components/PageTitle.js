import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({ title, description }) => {
    return (
        <Helmet>
            <title>Ibrahim - {title}</title>
            {/* <meta name="description" content="Helmet application" /> */}
        </Helmet>
    );
};

export default PageTitle;