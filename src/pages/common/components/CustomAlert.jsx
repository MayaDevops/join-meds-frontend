import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Heading,
  ModalBody
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { actions as commonServicesSliceActions } from 'pages/common/slice';
import CustomButton from './CustomButton';
import { getAlertAction } from '../selectors';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const CustomAlert = () => {
  const dispatch = useDispatch();
  const alertAction = useSelector(getAlertAction);

  const {
    open = false,
    variant = '',
    message = '',
    size = 'lg',
    title = '',
    backwardActionText = null,
    forwardActionText = null,
    forwardAction = () => { },
    backwardAction = () => {
      dispatch(commonServicesSliceActions.setAlertAction({}));
    },
    closeOnOverlayClick = false,
    closeOnEsc = false
  } = alertAction;

  const close = () => dispatch(commonServicesSliceActions.setAlertAction({}));

  const renderIcon = () => {
    switch (variant) {
      case 'success':
        return (
          <div className="text-green-600 flex items-center justify-center mr-2">
          

            {/* ✅ Option 2: If using Heroicons */}
            <CheckCircleIcon className="h-10 w-10 text-green-600" />
          </div>
        );
      case 'error':
        return (
          <div className="text-red-500 font-bold text-lg mr-2">
            ❌
          </div>
        );
      case 'sessionExpired':
        return (
          <div className="bg-blue-100 p-1 rounded-md">
            {/* <TimerSnoozeZzz /> */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      isOpen={open}
      onClose={close}
      isCentered
      size={size}
      closeOnOverlayClick={closeOnOverlayClick}
      closeOnEsc={closeOnEsc}
    >
      <ModalOverlay />
      <ModalContent className="rounded-lg shadow-lg bg-white overflow-hidden">
        {/* Header */}
        <ModalHeader className="flex items-start justify-between px-4 py-2 bg-[#00B5D8] text-white text-sm">
          <div className="flex items-center gap-3">

            <Heading as="h4" size="sm" className="text-white font-medium">
              {title}
            </Heading>
          </div>
          <span
            onClick={backwardAction}
            className="text-gray-200 hover:text-white cursor-pointer text-lg"
          >
            &times;
          </span>
        </ModalHeader>

        {/* Middle Section for Message */}
        <ModalBody className="px-6 py-4 text-center flex items-center justify-center min-h-[80px]">
          {renderIcon()}
          <p className="text-black-700 text-md">{message}</p>
        </ModalBody>

        {/* Footer */}
        <ModalFooter className="flex justify-center gap-4 py-2 bg-[#E0F2FE]">
          {backwardActionText && (
            <CustomButton
              variant="outline"
              size="sm"
              className="border text-[#0C4A6E] rounded-md px-4"
              onClick={backwardAction}
            >
              {backwardActionText}
            </CustomButton>
          )}
          {forwardActionText && (
            <CustomButton
              variant="solid"
              size="sm"
              className="bg-[#0C4A6E] text-white rounded-md px-4"
              onClick={() => {
                forwardAction();
                close();
              }}
            >
              {forwardActionText}
            </CustomButton>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomAlert;
