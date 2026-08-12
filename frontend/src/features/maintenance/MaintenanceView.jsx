import maintenanceSvg from "../../assets/Maintenance.gif";
import "./MaintenanceView.css";
const MaintenanceView = () => {
  return (
    <section className="maintenance-container">
      <img
        src={maintenanceSvg}
        alt="Animated maintenance illustration"
        className="maintenance-animation"
      />
      <h1>System Under Maintenance</h1>
      <p>
        We are upgrading your portal experience. We will be back online shortly!
      </p>
    </section>
  );
};

export default MaintenanceView;
