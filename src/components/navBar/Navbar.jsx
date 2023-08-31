import './style.css'
import { NavLink } from 'react-router-dom';
import { BtnDarkMode } from '../btnDarkMode/BtnDarkMode';

export const Navbar = props => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="./" className="logo"><strong>My</strong> portfolio</a>
          <BtnDarkMode />
          <ul className="nav-list">
            <li className="nav-list__item"><NavLink to="/" className={navData => navData.isActive ? "nav-list__link nav-list__link--active" : "nav-list__link"}>Home</NavLink></li>
            <li className="nav-list__item"><NavLink to="/projects" className={navData => navData.isActive ? "nav-list__link nav-list__link--active" : "nav-list__link"}>Projects</NavLink></li>
            <li className="nav-list__item"><NavLink to="/contacts" className={navData => navData.isActive ? "nav-list__link nav-list__link--active" : "nav-list__link"}>Contacts</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
