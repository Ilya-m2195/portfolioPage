import './style.css';
import vk from '../../img/icons/vk.svg';
import instagram from '../../img/icons/instagram.svg';
import twitter from '../../img/icons/twitter.svg';
import gitHub from '../../img/icons/gitHub.svg';
import linkedIn from '../../img/icons/linkedIn.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item"><a href="#!"><img src={vk} alt="vk" /></a></li>
            <li className="social__item"><a href="#!"><img src={instagram} alt="instagram" /></a></li>
            <li className="social__item"><a href="#!"><img src={twitter} alt="twitter" /></a></li>
            <li className="social__item"><a target='_blank' rel="noreferrer" href="https://github.com/Ilya-m2195"><img src={gitHub} alt="gitHub" /></a></li>
            <li className="social__item"><a href="#!"><img src={linkedIn} alt="linkedIn" /></a></li>
          </ul>
          <div className="copyright">
            <p>© 2023 by I.E.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

