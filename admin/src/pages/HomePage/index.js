import React, { memo } from "react";
import Header from "../../components/QBWA/header";
import Body from "../../components/QBWA/body";
import Footer from "../../components/QBWA/footer";
import { Box } from '@strapi/design-system/Box';
import { Layout,BaseHeaderLayout } from '@strapi/design-system/Layout';
import { Button } from '@strapi/design-system/Button';
import Plus from '@strapi/icons/Plus';

const HomePage = () => {
    return <Box>
        <Layout>
            <Box background="neutral100">
                <BaseHeaderLayout primaryAction={<Button startIcon={<Plus />}>Add a StyleSheet</Button>}
                    title="Add StyleSheet" subtitle={``} as="h2" />
            </Box>
        <Header />
        <Body />
        <Footer />
        </Layout>
    </Box>
};

export default memo(HomePage);
