/* eslint-disable no-nested-ternary */
import React from 'react';
import { Button } from '@chakra-ui/react';
import { ArrowRightIcon, SaveIcon } from 'assets';

const CustomButton = ({
  buttonColor = '#FFC537',
  hoverColor = '#e6b800',
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
      _hover: { backgroundColor: hoverColor }
    },
    outline: {
      padding: '5px 30px',
      border: '1px solid',
      borderColor,
      color: 'black',
      _hover: { backgroundColor: hoverColor }
    }
  };

  const renderIcon = () => {
    if (text === 'submit') return <span className="ml-2"><ArrowRightIcon /></span>;
    if (text === 'save') return <span className="ml-2"><SaveIcon /></span>;
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
