import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar-panel">
        <div className="logo-brand">Micro 1</div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/jobs">Jobs</a>
            </li>
            <li>
              <a href="/payouts">Payouts</a>
            </li>
            <li>
              <a href="/profiles"></a>My profile
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
