import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../../data/data.js";

const Projects = () => {
  return (
    <>
      <div className="my-2 mx-3 p-3 grid grid-cols-[repeat(1,minmax(220px,1fr))]  md:grid-cols-[repeat(2,minmax(200px,1fr))]  lg:grid-cols-[repeat(3,minmax(180px,1fr))]  gap-3">
        {ProjectList.map((project, index) => (
          <ProjectItem
            key={index}
            id={index}
            name={project.name}
            image={project.image}
            skills={project.skills}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
