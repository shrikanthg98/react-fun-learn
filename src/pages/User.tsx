import { NavLink, Outlet } from 'react-router-dom';

const User = () => {
  return (
    <section className="user-page">
      <h1>User</h1>
      <p>This page is the parent route.</p>

      <nav className="sub-nav" aria-label="User navigation">
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>

      <div className="nested-route-box">
        <Outlet />
      </div>
    </section>
  );
};

export const UserProfile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <p>This is rendered inside the User parent route.</p>
    </div>
  );
};

export const UserSettings = () => {
  return (
    <div>
      <h2>Settings</h2>
      <p>This is another child route under User.</p>
    </div>
  );
};

export default User;
