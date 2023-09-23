import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


import MobileOTP  from './MobileOTP';
import Home from './Home';
import EmailOTP from './EmailOTP';
import PincodeLookup from './PincodeLookup';
import Aadhaar from './Aadhaar';


const router = createBrowserRouter([

  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/mobileotp',
    element: <MobileOTP/>,
  },
  {
    path: '/emailotp',
    element: <EmailOTP/>,
  },
  {
    path: '/pincodelookup',
    element: <PincodeLookup/>,
  },
  {
    path: '/aadhaar_check',
    element: <Aadhaar/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);