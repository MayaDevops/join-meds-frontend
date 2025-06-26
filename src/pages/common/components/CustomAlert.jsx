
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Heading
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux'; //
import {
  ErrorInfo, InfoIcon, ModalClose, TimerSnoozeZzz
} from 'assets';
import { actions as commonServicesSliceActions } from '../../commonServices/slice';
import { getAlertAction } from '../../commonServices/selectors';
import CustomButton from './CustomButton';

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
    forwardAction = () => {},
    backwardAction = () => {
      dispatch(commonServicesSliceActions.setAlertAction({}));
    },
    closeOnOverlayClick = false,
    closeOnEsc = false
  } = alertAction;

  const close = () => dispatch(commonServicesSliceActions.setAlertAction({}));

  const renderIcon = () => {
    switch (variant) {
      case 'error':
        return (
          <div className="bg-[#FFEBEE] p-1 rounded-md">
            <ErrorInfo />
          </div>
        );
      case 'sessionExpired':
        return (
          <div className="bg-[#E6F4FF] p-1 rounded-md">
            <TimerSnoozeZzz />
          </div>
        );
      default:
        return (
          <div className="bg-[#FFD65A] p-1 rounded-md">
            <InfoIcon />
          </div>
        );
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
      <ModalContent className="rounded-lg shadow-lg bg-white">
        <ModalHeader className="flex items-start justify-between">
          <div className="flex items-center gap-4 mt-8">
            {renderIcon()}
            <div>
              <Heading as="h4" size="md" className="font-semibold text-black">
                {title}
              </Heading>
              <p className="text-sm text-gray-500 mt-1">
                {message}
              </p>
            </div>
          </div>
          <span onClick={backwardAction} className="text-gray-500 hover:text-gray-700"><ModalClose /></span>
        </ModalHeader>

        <ModalFooter className="flex justify-center gap-4">
          {backwardActionText && (
            <CustomButton
              variant="outline"
              size="md"
              className="border text-black  rounded-md"
              onClick={backwardAction}
            >
              {backwardActionText}
            </CustomButton>
          )}
          {forwardActionText && (
            <CustomButton
              variant="solid"
              size="md"
              className=" text-white  rounded-md "
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
