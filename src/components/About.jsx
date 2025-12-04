import { Outlet, NavLink } from "react-router";

function About() {
  return (
    <div className="page about-page">
      <h1 className="page-title">About us</h1>

      <nav className="subnav">
        <NavLink to="team" className="subnav-link">Team</NavLink>
        <NavLink to="history" className="subnav-link">Our history</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default About;
