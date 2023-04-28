import React, { memo, useEffect, useState } from "react";
import { Box } from '@strapi/design-system/Box';
import { Layout } from '@strapi/design-system';
import Header from "../../components/QBWA/Header";
import Body from "../../components/QBWA/Body";
import Footer from "../../components/QBWA/Footer";

const HomePage = () => {
    return <Box>
        <Layout>
            <Header />
            <Body />
            <Footer />
        </Layout>
    </Box>
};

export default memo(HomePage);
