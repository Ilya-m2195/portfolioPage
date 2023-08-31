import './style.css';
export const Header = props => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>Hi, my name is <em>Ilya</em></strong><br />
          I'm frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="#!" className="btn">Download CV</a>
      </div>
    </header>
  )
}

