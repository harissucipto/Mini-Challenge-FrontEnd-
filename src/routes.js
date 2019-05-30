import React from 'react';
const Aplikasi = React.lazy(() => import('./views/Aplikasi/Aplikasi'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/app', exact: true, name: 'Aplikasi', component: Aplikasi }
];

export default routes;
