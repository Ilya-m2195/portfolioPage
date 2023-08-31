import './style.css';
export const Header = props => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>Hi, my name's <em>Ilya</em></strong><br />
          I'm a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="https://omsk.hh.ru/resume/4e0907b4ff0c04666b0039ed1f4337396e7652" target='_blank' rel="noreferrer" className="btn" >View CV</a>
      </div>
    </header>
  )
}

