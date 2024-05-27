import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>All Links</h1>
      <ul>
        <li>
          <Link to={'/chair3d'}>Chair 3D</Link>
        </li>
        <li>
          <Link to={'/canvas'}>Canvas</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
