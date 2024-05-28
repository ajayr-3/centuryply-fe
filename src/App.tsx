import { createHashRouter, RouterProvider } from 'react-router-dom';
import Chair3d from './components/Chair3d';
import CubeCanvas from './components/Cube';
import Home from './components/Home';

const Router = createHashRouter([
  { path: '/', element: <Home /> },
  { path: '/chair3d', element: <Chair3d /> },
  { path: '/canvas', element: <CubeCanvas /> },
]);
const App = () => <RouterProvider router={Router} />;

export default App;
