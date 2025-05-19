import { Link } from "react-router-dom";

const ExerciseCard = ({ name, image, onClickHandler, toNavigate, data }) => {
  return (
    <Link
      to={toNavigate}
      className="exercise-card"
      onClick={onClickHandler}
      state={data}
    >
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </Link>
  );
};

export default ExerciseCard;
