import './style.css';
export const Project = ({link, img, title, skills, done}) => {
  return (
    <li className="project">
      <a href={link}>
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
        <p className="project__description">Skills - {skills}</p>
        <p className="project__description">{done}</p>
      </a>
    </li>
  );
}

