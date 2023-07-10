import { useState } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../config/routes';


function Header(props) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  function handleLogout() {
    setToken(null);
    localStorage.removeItem('token');
  };


  return (
    <>
      <nav>
        <Link to='/profile'>Home</Link>{' '}
        <Link to='/fits'>Fits</Link>{' '}
        <Link to='/soss'>SOS</Link>{' '}
        <Link to='/' onClick={handleLogout}>LogOut</Link>
      </nav>
      <div>
        <Routes token={token} setToken={setToken} />
      </div>
    </>
  );
}


export default Header;
