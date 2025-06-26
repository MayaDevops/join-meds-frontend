import React from 'react';
import {
  Radio, RadioGroup, Stack, FormControl, FormLabel, FormErrorMessage
} from '@chakra-ui/react';

const CustomRadioGroup = ({
  value,
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
      <RadioGroup onChange={onChange} value={value}>
        <Stack direction="row" spacing={6}>
          {options?.map((option) => (
            <Radio
              key={option?.name || option?.label}
              value={option?.value || option?.name || option?.label}
              colorScheme={colorScheme}
            >
              {option?.name || option?.label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      {isInvalid && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default CustomRadioGroup;
