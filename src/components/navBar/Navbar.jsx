import './style.css'
import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';
import { NavLink } from 'react-router-dom';

export const Navbar = props => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="./index.html" className="logo"><strong>Freelancer</strong> portfolio</a>

          <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>

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
