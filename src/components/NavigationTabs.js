import { NavLink } from 'react-router-dom';
import './NavigationTabs.css'; // We'll create this CSS file

function NavigationTabs() {
  return (
    <nav className="tabs">
      <NavLink to="/" className={({ isActive }) => isActive ? "tab active" : "tab"}>
        Pre-Match Section
      </NavLink>
      <NavLink to="/match" className={({ isActive }) => isActive ? "tab active" : "tab"}>
        Match-Time Section
      </NavLink>
      <NavLink to="/post" className={({ isActive }) => isActive ? "tab active" : "tab"}>
        Post-Match Section
      </NavLink>
    </nav>
  );
}

export default NavigationTabs;