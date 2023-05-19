import { createBrowserRouter } from 'react-router-dom';
import ResponsiveTable from './pages/responsive-table/ResponsiveTable.tsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ResponsiveTable/>,
  },
]);

export default appRouter;
