import React from 'react';
import {
  FormControl, FormLabel, FormErrorMessage, Input, InputGroup, InputLeftElement
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import { SearchIconSvg } from '../../../assets';

const CustomSearchInput = ({
  name, label, placeholder, control, errors, rules, required, icon = <SearchIconSvg />, ...rest
}) => {
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor={name}>
        <div className="flex items-center">
          <span>{label}</span>
          {rules?.required || required ? <span className="text-[#FF6F61] ml-1">*</span> : null}
        </div>
      </FormLabel>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <span>{icon}</span> {/* This is where you can use any emoji or text */}
            </InputLeftElement>
            <Input
              variant="outline"
              placeholder={placeholder}
              id={name}
              {...field}
              {...rest}
            />
          </InputGroup>
        )}
      />
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default CustomSearchInput;
