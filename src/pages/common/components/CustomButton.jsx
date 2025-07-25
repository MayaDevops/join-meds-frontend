 
import React from 'react';
import { Button } from '@chakra-ui/react';
// import { ArrowRightIcon, SaveIcon } from 'assets';

const CustomButton = ({
  buttonColor = '#00A4E1',
  hoverColor = '#008FCC',
  colorScheme = 'teal',
  variant = 'solid',
  isLoading = false,
  size = 'md',
  children,
  ...props
}) => {
  const text = typeof children === 'string' ? children.toLowerCase() : '';

  const effectiveVariant = text === 'save' || text === 'clear' ? 'outline' : variant;

  const borderColor = text === 'save'
    ? '#FFC537'
    : text === 'clear'
      ? '#A9A9A9'
      : buttonColor;

  const styles = {
    solid: {
      padding: '5px 30px',
      backgroundColor: buttonColor,
      color: 'black',
      _hover: { backgroundColor: hoverColor },
      cursor: 'pointer'
    },
    outline: {
      padding: '5px 30px',
      border: '1px solid',
      borderColor,
      color: 'black',
      _hover: { backgroundColor: hoverColor },
      cursor: 'pointer'
    }
  };

  const renderIcon = () => {
    if (text === 'submit') return <span className="ml-2"></span>;
    if (text === 'save') return <span className="ml-2"></span>;
    return null;
  };

  return (
    <Button
      colorScheme={colorScheme}
      variant={effectiveVariant}
      isLoading={isLoading}
      size={size}
      {...styles[effectiveVariant]}
      {...props}
    >
      {children}
      {renderIcon()}
    </Button>
  );
};

export default CustomButton;
