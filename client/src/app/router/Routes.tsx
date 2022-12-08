import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import ActivityDashboard from "../../components/activities/dashboard/ActivityDashboard";
import ActivityDetails from "../../components/activities/details/ActivityDetails";
import ActivityForm from "../../components/activities/form/ActivityForm";
import NotFound from "../../components/errors/NotFound";
import ServerError from "../../components/errors/ServerError";
import TestError from "../../components/errors/TestError";
import App from "../layout/App";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'activities', element: <ActivityDashboard />},
            {path: 'activities/:id', element: <ActivityDetails />},
            {path: 'create-activity', element: <ActivityForm key='create' />},
            {path: 'manage/:id', element: <ActivityForm key='manage' />},
            {path: 'errors', element: <TestError />},
            {path: 'server-error', element: <ServerError />},
            {path: 'not-found', element: <NotFound />},
            {path: '*', element: <Navigate replace to='/not-found' />},
        ]
    }
]

export const router = createBrowserRouter(routes);