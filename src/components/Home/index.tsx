import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>All Links</h1>
      <ul>
        <li>
          <Link to={'/0'}>Chair 3D</Link>
        </li>
        <li>
          <Link to={'/'}>Canvas</Link>
        </li>
        <li>
          <Link to={'/1'}>Canvas 2</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
