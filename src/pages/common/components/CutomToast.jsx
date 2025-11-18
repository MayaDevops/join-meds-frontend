import React, { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckSvg } from 'assets';
import { getToastAction } from '../selectors';
import { actions as commonActions } from '../slice';
 
const CustomToast = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { open = false, variant = 'default', message = '' } = useSelector(getToastAction);
 
  const variantColors = {
    success: {
      bg: '#EBFFD8',
      text: 'text-white',
      border: 'border-l-[5px] border-[#328E6E]',
      icon: <CheckSvg />
    },
    error: {
      bg: '#E55050',
      text: 'text-white',
      border: 'border-l-[5px] border-red-800',
      icon: '❌'
    },
    warning: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-900',
      border: 'border-l-[5px] border-yellow-600',
      icon: '⚠️'
    },
    default: {
      bg: 'bg-blue-500',
      text: 'text-white',
      border: 'border-l-[5px] border-blue-700',
      icon: 'ℹ️'
    }
  };
 
  const variantColor = variantColors[variant] || variantColors.default;
  const { bg, text, border, icon } = variantColor;
 
  useEffect(() => {
    if (open) {
      toast({
        duration: 2500,
        isClosable: true,
        position: 'top-right',
        render: () => (
          <div
            style={bg.startsWith('#') ? { backgroundColor: bg } : {}}
            className={`${bg.startsWith('#') ? '' : bg} ${text} ${border} rounded-lg shadow-xl p-5 max-w-sm flex items-start space-x-4`}
            role="alert"
          >
            <div className="text-3xl flex-shrink-0 mt-[2px]">{icon}</div>
            <div>
              <p className="text-md text-[#000000] text-center">{message}</p>
            </div>
          </div>
        )
      });
 
      // Reset the alertToast in redux
      dispatch(commonActions.setAlertToast({ open: false }));
    }
  }, [open, toast, message, bg, text, border, variant, icon, dispatch]);
 
  return null;
};
 
export default CustomToast;
 