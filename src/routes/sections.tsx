import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import store from 'src/store';
import ModalProvider from 'src/modal';
import { varAlpha } from 'src/theme/styles';
import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/home'));
export const LoadsPage = lazy(() => import('src/pages/loads'));
export const UserPage = lazy(() => import('src/pages/user'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const SignUpPage = lazy(() => import('src/pages/sign-up'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const RemainsPage = lazy(() => import('src/pages/remains'));
export const ZaborPage = lazy(() => import('src/pages/zabor'));
export const RequestItemPage = lazy(() => import('src/pages/zabort-item'));
export const NewRequestFormPage = lazy(() => import('src/pages/new-zabor-form'));
export const SettingsPage = lazy(() => import('src/pages/settings'));
export const FinancePage = lazy(() => import('src/pages/finance'));
export const RequestPage = lazy(() => import('src/pages/request'));
export const PackPage = lazy(() => import('src/pages/pack'));
export const SendingPage = lazy(() => import('src/pages/sending'));
export const CalculatorPage = lazy(() => import('src/pages/calculator'));
export const TasksPage = lazy(() => import('src/pages/tasks'));

// ----------------------------------------------------------------------

const renderFallback = (
  <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export function Router() {
  return useRoutes([
    {
      element: (
        <DashboardLayout>
          <Provider store={store}>
            <ModalProvider />

            <Suspense fallback={renderFallback}>
              <Outlet />
            </Suspense>
          </Provider>
        </DashboardLayout>
      ),
      children: [
        { element: <HomePage />, path: '/' },
        { path: 'user', element: <UserPage /> },
        { path: 'loads', element: <LoadsPage /> },
        { path: 'remains', element: <RemainsPage /> },
        { path: 'requests', element: <ZaborPage /> },
        { path: 'create-request/new', element: <NewRequestFormPage /> },
        { path: 'requests/:id', element: <RequestItemPage /> },
        { path: 'settings', element: <SettingsPage /> },
        { path: 'finance', element: <FinancePage /> },
        { path: 'create-request', element: <RequestPage /> },
        { path: 'create-request/pack', element: <PackPage /> },
        { path: 'create-request/sending', element: <SendingPage /> },
        { path: 'calculator', element: <CalculatorPage /> },
        { path: 'tasks', element: <TasksPage /> },
      ],
    },
    {
      path: 'sign-in',
      element: (
        <AuthLayout>
          <SignInPage />
        </AuthLayout>
      ),
    },
    {
      path: 'sign-up',
      element: (
        <AuthLayout>
          <SignUpPage />
        </AuthLayout>
      ),
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
