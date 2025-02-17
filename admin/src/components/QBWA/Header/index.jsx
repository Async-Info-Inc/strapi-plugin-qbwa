import React, {memo} from 'react';
import { Box, BaseHeaderLayout } from '@strapi/design-system';

const Header = () => {
    <Box background="neutral100">
        <BaseHeaderLayout title="QBWA" subtitle={`Quickly Build Web Apps`} as="h2" />
    </Box>
};
export default memo(Header);