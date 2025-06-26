/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import {
  FormControl, FormLabel, FormErrorMessage, Input, Tooltip, InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import CustomIconButton from './CustomIconButton';
import { ViewIcon, ViewOffIcon } from '../../../assets/svgs/viewIcon';

const CustomInput = ({
  name, label, placeholder, control,
  type, errors, rules, required, icon,
  isQuantity = false, quantityValue = '',
  onChange, tooltip, maxLength, ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor={name}>
        <div className="flex items-center">
          {icon}
          <span>
            {label}
            {(rules?.required || required) && (
              <span className="text-[#FF6F61] whitespace-nowrap ml-1">*</span>
            )}
          </span>
        </div>
      </FormLabel>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <div className="flex customInput">
            <InputGroup>
              <Tooltip
                label={tooltip}
                hasArrow
                placement="top"
                isDisabled={!tooltip}
              >
                <Input
                  variant="flushed"
                  type={
                    type === 'password'
                      ? showPassword
                        ? 'text'
                        : 'password'
                      : type
                  }
                  placeholder={placeholder}
                  id={name}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    if (onChange) onChange(e);
                  }}
                  onBlur={(e) => {
                    field.onBlur();
                    if (rest.onBlur) rest.onBlur(e);
                  }}
                  maxLength={maxLength}
                  {...rest}
                />
              </Tooltip>
              {type === 'password' && (
                <InputRightElement>
                  <CustomIconButton
                    colorScheme=""
                    variant="solid"
                    size="sm"
                    buttonColor="#FFC537"
                    hover="#e6b800"
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={() => setShowPassword(!showPassword)}
                    className="alert-close"
                    aria-label="Toggle password visibility"
                  />
                </InputRightElement>
              )}
            </InputGroup>
            {isQuantity && quantityValue === 'grams' && (
              <span className="customInput-span">in grams</span>
            )}
            {isQuantity && quantityValue === 'kg' && (
              <span className="customInput-span">in Kilogram</span>
            )}
            {isQuantity && quantityValue === 'ml' && (
              <span className="customInput-span">in ml</span>
            )}
            {isQuantity && quantityValue === 'no' && (
              <span className="customInput-span">count</span>
            )}
            {isQuantity && quantityValue === 'days' && (
              <span className="customInput-span">no of days</span>
            )}
            {isQuantity && quantityValue === 'rs' && (
              <span className="customInput-span">in Rs.</span>
            )}
            {isQuantity && quantityValue === 'laks' && (
              <span className="customInput-span">in Lakhs.</span>
            )}
            {isQuantity && quantityValue === 'perc' && (
              <span className="customInput-span">in %</span>
            )}
            {isQuantity && quantityValue === 'sqm' && (
              <span className="customInput-span">in square meter</span>
            )}
          </div>
        )}
      />
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default CustomInput;
