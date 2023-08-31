import { isDisabled } from '@testing-library/user-event/dist/utils';
import './style.css';
export const Project = ({link, img, title, skills, done}) => {
  return (
    <li className="project">
      <a target='_blank' rel="noreferrer" href={link ? link : isDisabled} >
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
        <p className="project__description">Technologies - {skills}</p>
        <p className="project__description">{done}</p>
      </a>
    </li>
  );
}

