import { lazy } from 'react';
import { createBrowserRouter, Navigate} from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import LoginRoutesTempUserGuard from './LoginRoutesTempUserGuard';

// project import
import Loadable from 'ui-component/Loadable';

const PagesLanding = Loadable(lazy(() => import('views/pages/landing')));

// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([{ path: '/', element: <Navigate to="/login" replace={true} /> }, AuthenticationRoutes, LoginRoutes,LoginRoutesTempUserGuard,MainRoutes], {
    basename: import.meta.env.VITE_APP_BASE_NAME
});

export default router;
