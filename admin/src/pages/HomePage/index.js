import React, { memo, useEffect, useState } from "react";
import { Box } from '@strapi/design-system/Box';
import { Layout,BaseHeaderLayout, Button, SingleSelect, SingleSelectOption } from '@strapi/design-system';
import Plus from '@strapi/icons/Plus';
import api from "../../../../qbwa/fe/css";

const HomePage = () => {
    const [fileOptions, setFileOptions] = useState([]);

    useEffect(() => {
        api.getAllFiles().then((data) => {
            console.log("Get All Files: ", data);
            setFileOptions(data.data);
        });
    }, []);

    const selectOptions = fileOptions.map((file) => {
        return <SingleSelectOption value={file}>{file}</SingleSelectOption>
    });

    return <Box>
        <Layout>
            <Box background="neutral100">
                <BaseHeaderLayout title="QBWA" subtitle={`Quickly Build Web Apps`} as="h2" />
            </Box>
            <Box padding={8} background="neutral100">
                <SingleSelect label="Fruits" required placeholder="Select file..." hint="The StyleSheet you want to edit.">
                    {selectOptions}
                </SingleSelect>
                <Button variant="success">Add</Button>
                <Button startIcon={Plus} variant="danger">Remove</Button>
            </Box>
        </Layout>
    </Box>
};

export default memo(HomePage);
