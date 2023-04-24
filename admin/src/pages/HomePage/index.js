import React, { memo } from "react";
import Header from "../../qbwa/components/header";
import Body from "../../qbwa/components/body";
import Footer from "../../qbwa/components/footer";

const HomePage = () => {
    return <div>
        <Header />
        <Body />
        <Footer />
    </div>
};

export default memo(HomePage);
