import { lazy } from 'react';

// project imports
import TempUserGuard from 'utils/route-guard/TempUserGuard';
import MinimalLayout from 'layout/MinimalLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';

// login routing
const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/authentication2/Login2')));
const AuthRegister = Loadable(lazy(() => import('views/pages/authentication/authentication2/Register2')));
const AuthForgotPassword = Loadable(lazy(() => import('views/pages/authentication/authentication2/ForgotPassword2')));
const AuthResetPassword = Loadable(lazy(() => import('views/pages/authentication/authentication2/ResetPassword2')));
const AuthCheckMail = Loadable(lazy(() => import('views/pages/authentication/authentication2/CheckMail2')));
const AuthBankLogin = Loadable(lazy(() => import('views/pages/authentication/authentication2/BankDetails')));
const AuthCodeVerification = Loadable(lazy(() => import('views/pages/authentication/authentication2/CodeVerification2')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutesTempUserGuard = {
    path: '/',
    element: (
        <NavMotion>
            <TempUserGuard>
                <MinimalLayout />
            </TempUserGuard>
        </NavMotion>
    ),
    children: [
        {
            path: '/register/bankdetails',
            element: <AuthBankLogin />
        },
        {
            path: '/register/code-verification',
            element: <AuthCodeVerification />
        },
    ]
};

export default LoginRoutesTempUserGuard;
