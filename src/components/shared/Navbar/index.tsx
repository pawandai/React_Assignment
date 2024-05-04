import { Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      Navigation Bar
      <Outlet />
    </header>
  );
};

export default Navbar;
