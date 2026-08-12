import "./MainDashboardView.css";
const MainDashboardView = () => {
  return (
    <div className="dashboard-grid-container">
      <main className="main-feature-column">
        <article className="dashboard-widget-card">
          <div className="card-header-flex">
            <h2>Applied Jobs</h2>
            <span className="action-link-btn">View All</span>
          </div>
          <div
            style={{
              padding: "40px 0",
              textAlign: "center",
              color: "var(--text-muted)",
            }}
          >
            No active job applications found. Explore open roles in the Jobs
            panel.
          </div>
        </article>
        <aside className="sidebar-utility-column">
          <article className="dashboard-widget-card">
            <div className="card-header-flex">
              <h2>micro1 referral program</h2>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                Refer high-tier developers to our platform networks and earn
                automated tier bonuses.
              </p>
            </div>
          </article>
          <article className="dashboard-widget-card">
            <div className="card-header-flex">
              <h2>Quick Links</h2>
            </div>

            <div className="quick-links-stack">
              <button className="quick-link-row-btn">
                Checkout Reddit discussion
              </button>
              <button className="quick-link-row-btn">Expert Agreement</button>
              <button className="quick-link-row-btn">Privacy Policy</button>
            </div>
          </article>
        </aside>
      </main>
    </div>
  );
};

export default MainDashboardView;
