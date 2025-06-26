import React from 'react';

const ViewIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5c-5 0-9 5.5-9 7s4 7 9 7 9-5.5 9-7-4-7-9-7z"
    />
    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ViewOffIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3l18 18M10.73 10.73a2.5 2.5 0 103.54 3.54"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.05 7.05a9.8 9.8 0 00-3.05 4.95c1 2.5 4 5.5 8 5.5a8.6 8.6 0 005.3-1.8M9.88 9.88a3 3 0 014.24 4.24"
    />
  </svg>
);

export { ViewIcon, ViewOffIcon };
