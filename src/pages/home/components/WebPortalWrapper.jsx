import React from 'react';
import { useOutletContext } from 'react-router-dom';
import WebPortal from './WebPortal'; // your main page with section refs

const WebPortalWrapper = () => {
  const { setHeaderProps } = useOutletContext();
  return <WebPortal setHeaderProps={setHeaderProps} />;
};

export default WebPortalWrapper;
