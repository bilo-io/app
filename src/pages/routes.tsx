/* eslint-disable sort-keys */
import React from 'react';
// Admin

const AuthLogin = React.lazy(() => import('./Auth/AuthLogin'));
const AuthSignUp = React.lazy(() => import('./Auth/AuthSignUp'));
const Landing = React.lazy(() => import('./_Misc/Landing/Landing'));
const Entertainment = React.lazy(() => import('./Entertainment'));
// const Schedule = React.lazy(() => import('./Scheduling'));
const Places = React.lazy(() => import('./Places'));

const NotFound = React.lazy(() => import('./_Misc/NotFound/NotFound'));


const routes: {
  path: string,
  element: React.ReactElement
}[] = [
    {
      element: (
        <Landing />
      ),
      path: '/'
    },
    {
      element: (
        <Entertainment />
      ),
      path: '/v1/entertainment'
    },
    {
      element: (
        <Places />
      ),
      path: '/v1/places'
    },
    // {
    //   element: (
    //     <Schedule />
    //   ),
    //   path: '/v1/schedule'
    // },
    {
      element: (
        <AuthLogin />
      ),
      path: '/auth/login'
    },
    {
      element: (
        <AuthSignUp />
      ),
      path: '/auth/signup'
    },
    {
      element: (
        <NotFound />
      ),
      path: '/not-found'
    },
    {
      element: (
        <NotFound />
      ),
      path: '*'
    }
  ];

export default routes;
