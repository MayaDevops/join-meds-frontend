import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/components/HomeLayout';
import Home from './pages/home/components';
import Register from './pages/register/components';
import { ChakraProvider } from '@chakra-ui/react';
import CustomToast from 'pages/common/components/CutomToast';

function App() {
  return (
    // <ChakraProvider resetCSS={false}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="ui/join-meds/register" element={<Register />} />
          </Route>
        </Routes>
        {/* <CustomToast /> */}
      </Router>
    // </ChakraProvider>
  );
}

export default App;
