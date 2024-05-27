import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Chair3d from './components/Chair3d';
import CustomCanvas from './components/CustomCanvas';

const Router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/chair3d', element: <Chair3d /> },
  { path: '/canvas', element: <CustomCanvas /> },
]);
const App = () => <RouterProvider router={Router} />;

export default App;
