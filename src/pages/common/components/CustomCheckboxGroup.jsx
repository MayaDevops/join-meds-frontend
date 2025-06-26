import React from 'react';
import {
  Checkbox, CheckboxGroup, Stack, FormControl, FormLabel, FormErrorMessage
} from '@chakra-ui/react';

const CustomCheckboxGroup = ({
  value = [],
  onChange,
  options = [],
  name,
  label,
  isInvalid,
  errorMessage,
  colorScheme = 'blue',
  ...props
}) => {
  return (
    <FormControl isInvalid={isInvalid} {...props}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <CheckboxGroup
        value={value}
        onChange={onChange}
      >
        <Stack direction="row" spacing={6}>
          {options?.map((option) => (
            <Checkbox
              key={option.value}
              value={option.value}
              colorScheme={colorScheme}
            >
              {option.label}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
      {isInvalid && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default CustomCheckboxGroup;
