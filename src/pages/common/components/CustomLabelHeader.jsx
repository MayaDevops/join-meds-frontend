import React from 'react';
import './CustomLabelHeader.css';

const CustomLabelHeader = ({ headerText }) => {
  return (
    <div className="label-with-line mt-4">
      <span className="label-text text-lg sm:text-md md:text-xl lg:text-lg font-semibold text-[#255C57]">
        {headerText}
      </span>
      <div className="horizontal-line" />
    </div>
  );
};

export default CustomLabelHeader;
