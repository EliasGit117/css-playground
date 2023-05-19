import './App.css'
import { RouterProvider } from 'react-router-dom';
import appRouter from './App.Router.tsx';


function App() {

  return (
    <RouterProvider router={appRouter}/>
    // <ResponsiveTable/>
  )
}

export default App
