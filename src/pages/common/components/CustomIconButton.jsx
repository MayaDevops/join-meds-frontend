import React from 'react';
import { IconButton } from '@chakra-ui/react';

// Define the CustomIconButton component
const CustomIconButton = ({
  buttonColor = '#FFC537',
  colorScheme = 'blue',
  variant = 'solid',
  isLoading = false,
  size = 'md',
  icon,
  hover = '#FF6F61',
  ariaLabel = 'Search database',
  ...props
}) => {
  // Default styles based on the variant prop
  const styles = {
    solid: {
      padding: '5px',
      backgroundColor: buttonColor,
      color: '#FFFFFF',
      _hover: { backgroundColor: hover }
    },
    outline: {
      padding: '5px',
      borderColor: buttonColor,
      color: 'black',
      _hover: { backgroundColor: hover }
    },
    ghost: {
      padding: '5px',
      borderColor: buttonColor,
      color: 'red',
      _hover: { backgroundColor: hover }
    }
  };

  return (
    <IconButton
      colorScheme={colorScheme}
      variant={variant}
      isLoading={isLoading}
      size={size}
      aria-label={ariaLabel}
      icon={icon}
      {...styles[variant]} // Apply default styles
      {...props} // Spread additional props here
    />
  );
};

export default CustomIconButton;
