import { useLocation } from "react-router-dom";
import GoBack from "../../components/Global/GoBack/GoBack";

const ExerciseDetail = () => {
  const { state } = useLocation();

  return (
    <div className="exercise-detail-container">
      <GoBack />
      <div className="exercise-detail">
        <div className="exercise-infos">
          <h1>{state.name}</h1>
          <h3>Classification :</h3>
          <table className="classification-table" border={1}>
            <tbody>
              <tr>
                <td>Mechanics:</td>
                <td>{state.mechanic}</td>
              </tr>
              <tr>
                <td>Force:</td>
                <td>{state.force}</td>
              </tr>
            </tbody>
          </table>
          <h3>Target muscles :</h3>
          <div className="detail-target-muscles">
            {state.targetMuscles?.map((muscle, i) => (
              <div key={i} className="target-muscle">
                {muscle.scientificalName}
              </div>
            ))}
          </div>
        </div>
        <div className="exercise-image">
          <img src={state.image} alt={state.name} />
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
