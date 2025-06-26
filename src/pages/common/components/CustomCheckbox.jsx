import React from 'react';
import {
  Checkbox,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/react';

const CustomCheckbox = ({
  // value = false,
  checked,
  onChange,
  name,
  label,
  isInvalid,
  errorMessage,
  colorScheme = 'blue',
  ...props
}) => {
  return (
    <FormControl isInvalid={isInvalid} {...props}>
      <Checkbox
        id={name}
        isChecked={checked}
        onChange={onChange}
        colorScheme={colorScheme}
      >
        {label}
      </Checkbox>
      {isInvalid && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default CustomCheckbox;
