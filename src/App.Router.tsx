import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import ResponsiveTable from './pages/responsive-table/ResponsiveTable.tsx';

const routes: RouteObject[] = [
    {
      path: '/', children: [
        { path: '/responsive-table', element: <ResponsiveTable/> },
        { path: '/test', element: <h1>TEST</h1> },
      ]
    },
    { path: '*', element: <Navigate to="/responsive-table" replace/> },
    { path: '', element: <Navigate to="/responsive-table" replace/> }
  ]
;

const appRouter = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_BASE_URL
});


export default appRouter;
