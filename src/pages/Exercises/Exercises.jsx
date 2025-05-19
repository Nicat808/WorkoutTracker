import PageTitle from "../../components/Global/PageTitle/PageTitle";
import useExercises from "../../utils/hooks/useExercises";
import ExerciseCard from "../../components/Exercises/ExerciseCard/ExerciseCard";
import Dropdown from "../../components/Global/Dropdown/Dropdown";
import {
  exerciseForces,
  exerciseMechanics,
} from "../../utils/constants/exerciseClassifications";
import Input from "../../components/Global/Input/Input";
import { Search } from "lucide-react";
import { ROUTE_NAME } from "../../utils/constants/route";
import { useState } from "react";

const Exercises = ({ name }) => {
  const {
    exercises,
    setSearchQuery,
    setMechanicFilter,
    setForceFilter,
    filters,
  } = useExercises();
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <>
      <PageTitle name={name} />
      <div className="search-filter-section">
        <div className={`exercise-search ${isSearchActive && "active"}`}>
          <Input
            onChangeHandler={(e) => setSearchQuery(e.target.value)}
            onFocusHandler={() => setIsSearchActive(true)}
            onBlurHandler={() => setIsSearchActive(false)}
            placeholder={"Search by name"}
            value={filters.nameQuery}
          />
          <Search />
        </div>

        <div className="exercise-filters">
          <div>
            <h5>Mechanic:</h5>
            <Dropdown
              listValues={[
                "All",
                exerciseMechanics.Compound,
                exerciseMechanics.Isolotion,
              ]}
              onChangeHandler={(value) => setMechanicFilter(value)}
              selectedValue={filters.mechanic}
            />
          </div>
          <div>
            <h5>Force:</h5>
            <Dropdown
              listValues={["All", exerciseForces.Push, exerciseForces.Pull]}
              onChangeHandler={(value) => setForceFilter(value)}
              selectedValue={filters.force}
            />
          </div>
        </div>
      </div>

      <div className="exercises-container">
        {exercises.map((ex, i) => (
          <ExerciseCard
            key={i}
            image={ex.image}
            name={ex.name}
            targetMuscle={ex.getPrimaryMuscle()}
            toNavigate={`/${ROUTE_NAME.exercises}/${ex.name}`}
            data={ex}
          />
        ))}
      </div>
    </>
  );
};

export default Exercises;
