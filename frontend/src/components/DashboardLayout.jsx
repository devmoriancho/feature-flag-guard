import { NavLink, Outlet } from "react-router-dom";
import { LayoutDashboard, Briefcase, Wallet, User } from "lucide-react";
import "./DashboardLayout.css";
const DashboardLayout = () => {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar-panel">
        <div className="logo-brand">Micro 1</div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink to="/dashboard" className="nav-link-row">
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobs" className="nav-link-row">
                <Briefcase size={18} />
                <span>Jobs</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/payouts">
                <Wallet size={18} />
                <span>Payouts</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profiles" className="nav-link-row">
                <User size={18} />
                <span>My profile</span>
              </NavLink>
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
