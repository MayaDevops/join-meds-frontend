import React from 'react';
import { Outlet } from 'react-router-dom';
// import Header from 'pages/home/components/Header';
// import Footer from 'pages/home/components/Footer';

const HomeLayout = () => {
  // const [headerProps, setHeaderProps] = useState({});

  return (
    <div>
      {/* <Header {...headerProps} /> */}
      {/* <Outlet context={{ setHeaderProps }} /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default HomeLayout;
