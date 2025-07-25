import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { routes } from 'pages/routes';
// import RouteAuthorizer from 'common/components/RouteAuthorizer';
import _ from 'lodash';
import { store } from './app/store';
import './index.css'
import './i18n';
import App from 'App';
import { ChakraProvider } from '@chakra-ui/react';
import CustomToast from 'pages/common/components/CutomToast';
import CustomAlert from 'pages/common/components/CustomAlert';

const container = document.getElementById('root');
const root = createRoot(container);
// const renderRoutes = (appRoutes, parentPath = '') => appRoutes.map((route, index) => {
//   console.log({route})
//   const keyIndex = `${index}-route`;
//   const fullPath = parentPath + (!_.startsWith('/', route.path) && !_.endsWith('/', parentPath) ? '/' : '') + route.path;

//   return (
//     <Route
//       key={keyIndex}
//       path={route.path}
//       element={route.element}
//       {...(route.errorElement && { errorElement: route.errorElement })}
//     >
//       {route.children && renderRoutes(route.children, fullPath)}
//     </Route>
//   );
// });

root.render(
  <Provider store={store}>
    <ChakraProvider resetCSS={false}>
      <App />
      <CustomToast />
      <CustomAlert />
    </ChakraProvider>
  </Provider>
);
