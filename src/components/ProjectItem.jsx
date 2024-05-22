import { useNavigate } from "react-router-dom";

const ProjectItem = ({ name, id, skills, image }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="min-h-[250px] text-center mx-auto my-2 p-5 rounded-md shadow-xl"
        onClick={() => navigate(`${id}`)}
      >
        <h2>{name}</h2>
        <img
          src={image}
          width={250}
          height={280}
          alt="image"
          className="rounded-md"
        />
        <p>{skills}</p>
      </div>
    </>
  );
};

export default ProjectItem;
