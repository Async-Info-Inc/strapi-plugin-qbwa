import React, { memo, useEffect, useState } from "react";
import { Box } from '@strapi/design-system/Box';
import { Layout, BaseHeaderLayout, Button, SingleSelect, SingleSelectOption } from '@strapi/design-system';
import Plus from '@strapi/icons/Plus';
import api from "../../../../qbwa/fe/css";

const HomePage = () => {
    const [fileOptions, setFileOptions] = useState([]);

    const [value, setValue] = useState();
    const [error, toggleError] = useState();
    const [disabled, toggleDisabled] = useState();

    useEffect(() => {
        api.getAllFiles().then((data) => {
            console.log("Get All Files: ", data);
            setFileOptions(data.data);
        });
    }, []);
/*
    const selectOptions = fileOptions.map((file) => {
        console.log("Creating file option: ", file);
        return <SingleSelectOption value={file}>{file}</SingleSelectOption>
    });
*/
    return <Box>
        <Layout>
            <Box background="neutral100">
                <BaseHeaderLayout title="QBWA" subtitle={`Quickly Build Web Apps`} as="h2" />
            </Box>
            <Box padding={8} background="neutral100">
                <SingleSelect label="Fruits" required placeholder="My favourite fruit is..." hint="Fruits are not vegetables" onClear={() => {
                    setValue(undefined);
                    }} error={error} value={value} onChange={setValue} disabled={disabled}>
                            <SingleSelectOption value="apple">Apple</SingleSelectOption>
                            <SingleSelectOption value="avocado">Avocado</SingleSelectOption>
                            <SingleSelectOption value="banana">Banana</SingleSelectOption>
                            <SingleSelectOption value="kiwi">Kiwi</SingleSelectOption>
                            <SingleSelectOption value="mango">Mango</SingleSelectOption>
                            <SingleSelectOption value="orange">Orange</SingleSelectOption>
                            <SingleSelectOption value="strawberry">Strawberry</SingleSelectOption>
                </SingleSelect>
                <Button variant="success">Add</Button>
                <Button startIcon={Plus} variant="danger">Remove</Button>
            </Box>
        </Layout>
    </Box>
};

export default memo(HomePage);
