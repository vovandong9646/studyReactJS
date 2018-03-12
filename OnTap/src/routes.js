import React from 'react';
import HomePage from './page/HomePage';
import ProductPage from './page/ProductPage';
import NotFound from './page/NotFound';
import ProductActionPage from './page/ProductActionPage';

var routes = [
    {
        path : "/",
        exact : true,
        main : () => <HomePage />
    },
    {
        path: '/products',
        exact: false,
        main : () => <ProductPage />
    },
    {
        path: '',
        exact: false,
        main : () => <NotFound />
    },
    {
        path: '/product/add',
        exact: false,
        main : () => <ProductActionPage />
    }
];

export default routes;