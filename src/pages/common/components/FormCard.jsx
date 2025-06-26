import React from 'react';

const FormCard = ({ headerText, children }) => {
  return (
    <div className="px-0 pb-8 gap-[40px] rounded-[4px] rounded-bl-none rounded-br-none border border-[#EAF1F3] shadow-[4px_4px_48px_0px_#00000014] mx-auto">
      {headerText && (
      <div className=" pb-2 pt-2 sm:text-[40px]  md:text-[50px]  lg:text-[60px]  px-[40px] py-[15px] gap-0 rounded-[4px] rounded-bl-none rounded-br-none bg-[#4FD1C533] flex justify-between">
        <h2 className="text-lg sm:text-md md:text-xl lg:text-xl font-semibold text-[#255C57]">
          {headerText}
        </h2>
      </div>
      )}

      <div className="px-[40px] py-[20px]">
        {children}
      </div>
    </div>
  );
};

export default FormCard;
