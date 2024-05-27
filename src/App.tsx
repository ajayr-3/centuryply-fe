import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Chair3d from './components/Chair3d';
import CubeCanvas from './components/Cube';

const Router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/chair3d', element: <Chair3d /> },
  { path: '/canvas', element: <CubeCanvas /> },
]);
const App = () => <RouterProvider router={Router} />;

export default App;
