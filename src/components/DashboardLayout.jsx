import { NavLink, Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar-panel">
        <div className="logo-brand">Micro 1</div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/jobs">Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/payouts">Payouts</NavLink>
            </li>
            <li>
              <NavLink to="/profiles">My profile</NavLink>
            </li>
          </ul>
        </nav>
        <div className="sidebar-profile">Vincent Parkolwa</div>
      </aside>
      <section className="main-content-window">
        <Outlet />
      </section>
    </main>
  );
};

export default DashboardLayout;
