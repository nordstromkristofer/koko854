import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='homediv'>
      <h2>koko854</h2>
      <Link to="/instafeed">
        <p>instafeed</p>
      </Link>
      <Link to="/soundcloud">
        <p>Soundcloud</p>
      </Link>
    </div>
  );
}

export default Home;
