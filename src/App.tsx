import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Chair3d from './components/Chair3d';
import CubeCanvas from './components/Cube';
import Home from './components/Home';
import Cabinet from './components/Cabinet';

const Router = createBrowserRouter([
  { path: '/0', element: <Chair3d /> },
  { path: '/', element: <Cabinet /> },
  { path: '/1', element: <CubeCanvas /> },
  { path: '/home', element: <Home /> },
]);
const App = () => <RouterProvider router={Router} />;

export default App;
