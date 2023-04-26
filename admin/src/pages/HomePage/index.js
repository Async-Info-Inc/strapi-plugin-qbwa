import React, { memo } from "react";
import Header from "../../components/QBWA/header";
import Body from "../../components/QBWA/body";
import Footer from "../../components/QBWA/footer";

const HomePage = () => {
    return <div>
        <Header />
        <Body />
        <Footer />
    </div>
};

export default memo(HomePage);
