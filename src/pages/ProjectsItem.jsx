import { useParams } from "react-router-dom";
import { ProjectList } from "../../data/data.js";

const ProjectsItem = () => {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <>
      <div className="yoki m-2 p-3 w-full h-auto flex flex-col gap-5 justify-center items-center">
        <h2>
          {project.name} -{id}
        </h2>
        <img
          src={project.image}
          width={500}
          height={300}
          alt="image"
          className="rounded-md"
        />
        <p>{project.skills}</p>
      </div>
    </>
  );
};

export default ProjectsItem;
