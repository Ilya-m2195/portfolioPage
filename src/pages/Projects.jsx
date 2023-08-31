import { Project } from "../components/project/Project";
import { projects } from "../components/project/projectsList";

export const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map(el => <Project key={el.title}
            link={el.link}
            img={el.img}
            title={el.title}
            skills={el.skills}
            done={el.done}
          />)}
        </ul>
      </div>
    </main>
  );
}

