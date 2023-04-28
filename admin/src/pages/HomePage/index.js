import React, { memo } from "react";
import { Box } from '@strapi/design-system/Box';
import { Layout, BaseHeaderLayout, Button } from '@strapi/design-system';
import Header from "../../components/QBWA/Header";
import Body from "../../components/QBWA/Body";
import Footer from "../../components/QBWA/Footer";

const HomePage = () => {
    return <Box>
        <Layout>
            <select>
                <option>1</option>
                <option>2</option>
            </select>
            {/* <Header />
            <Body />
            <Footer /> */}
        </Layout>
    </Box>
};

export default memo(HomePage);
