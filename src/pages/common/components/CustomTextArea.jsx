import React from 'react';
import {
  FormControl, FormLabel, FormErrorMessage, Textarea
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

const CustomTextArea = ({
  name, label, placeholder, control, errors, rules, icon, isQuantity = false,
  className = '', width = '100%', height = '100px', // Add width and height as props
  style = { lineHeight: '30px' }, required, ...rest
}) => {
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor={name}>
        <div className="flex items-center">
          {icon}
          <span>{label}{(rules?.required || required) && (
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
          <div className={className} style={{ width }}> {/* Set width here */}
            <Textarea
              variant="flushed"
              placeholder={placeholder}
              style={{ ...style, width, height }} // Set both width and height dynamically
              id={name}
              {...field}
              {...rest}
            />
            {isQuantity && <span className="customInput-span">Kilogram</span>}
          </div>
        )}
      />
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>

    </FormControl>
  );
};

export default CustomTextArea;
