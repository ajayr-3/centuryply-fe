import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Chair3d from './components/Chair3d';
import CubeCanvas from './components/Cube';
import Home from './components/Home';

const Router = createBrowserRouter([
  { path: '/', element: <CubeCanvas /> },
  { path: '/chair3d', element: <Chair3d /> },
  { path: '/home', element: <Home /> },
]);
const App = () => <RouterProvider router={Router} />;

export default App;
