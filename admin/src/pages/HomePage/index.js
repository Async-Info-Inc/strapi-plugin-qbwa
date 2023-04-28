import React, { memo } from "react";
import { Box } from '@strapi/design-system/Box';
import { Layout, BaseHeaderLayout, Button } from '@strapi/design-system';
import {
  SingleSelect,
  SingleSelectOption,
  /**
   * These imports are still valid, but will be removed in the
   * next major iteration
   */
  Select,
  Option,
  OptGroup,
} from '@strapi/design-system';
import Header from "../../components/QBWA/Header";
import Body from "../../components/QBWA/Body";
import Footer from "../../components/QBWA/Footer";

const HomePage = () => {
    const [value, setValue] = useState();
    const [error, toggleError] = useState();
    const [disabled, toggleDisabled] = useState();



    return <Flex direction="column" alignItems="center" gap={11}>
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
          <Flex gap={2}>
            <Button variant="danger-light" onClick={() => toggleError(s => s ? undefined : 'Oh no, the fruits have gone mouldy!')}>
              {`${error ? 'Hide' : 'Show'} the error state`}
            </Button>
            <Button variant="tertiary" onClick={() => toggleDisabled(s => !s)}>
              {`${disabled ? 'Hide' : 'Show'} the disabled state`}
            </Button>
          </Flex>
        </Flex>;
};

export default memo(HomePage);
