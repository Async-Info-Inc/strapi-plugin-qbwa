import React, { memo } from "react";
import { Box } from '@strapi/design-system/Box';
import { Layout, BaseHeaderLayout, Button } from '@strapi/design-system';
import Header from "../../components/QBWA/Header";
import Body from "../../components/QBWA/Body";
import Footer from "../../components/QBWA/Footer";

const HomePage = () => {
    return <Box>
        <Layout>
            {/* <Header /> */}
            <Body />
            {/* <Footer /> */}
        </Layout>
    </Box>
};

export default memo(HomePage);
