import React from 'react';

const FacebookIcon = ({ width = '22', height = '22' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 11.0614C0 16.5303 3.97192 21.0778 9.16667 22V14.0553H6.41667V11H9.16667V8.55525C9.16667 5.80525 10.9386 4.27808 13.4447 4.27808C14.2386 4.27808 15.0948 4.4 15.8886 4.52192V7.33333H14.4833C13.1386 7.33333 12.8333 8.00525 12.8333 8.86142V11H15.7667L15.2781 14.0553H12.8333V22C18.0281 21.0778 22 16.5312 22 11.0614C22 4.9775 17.05 0 11 0C4.95 0 0 4.9775 0 11.0614Z"
        fill="white"
      />
    </svg>
  );
};

export default FacebookIcon;
