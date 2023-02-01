import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";

// Other pages

const HomePage = React.lazy(() => import("../pages/HomePage"));
const FavoritePage = React.lazy(() => import("../pages/FavoritePage"));
const OrdersPage = React.lazy(() => import("../pages/OrdersPage"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage />,
                index: true
            },
            {
                path: '/favorites',
                element: <FavoritePage />
            },
            {
                path: '/orders',
                element: <OrdersPage />
            },
        ]
    }
]);

export default router;