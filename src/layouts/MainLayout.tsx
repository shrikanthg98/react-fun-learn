import { NavLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <header className="navbar">
        <NavLink to="/" className="brand">
          React Fun Learn
        </NavLink>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/user">User</NavLink>
        </nav>
      </header>

      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
