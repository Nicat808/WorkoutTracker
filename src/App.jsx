import { Routes, Route } from "react-router-dom";
import { ROUTE_NAME } from "./utils/constants/route";
import Layout from "./components/Layout/Layout";
import Excercises from "./pages/Exercises/Exercises";
import Home from "./pages/Home/Home";
import Analytics from "./pages/Analytics/Analytics";
import Muscles from "./pages/Muscles/Muscles";
import WorkoutSplits from "./pages/WorkoutSplits/WorkoutSplits";
import Calendar from "./pages/Calendar/Calendar";
import ExerciseDetail from "./pages/ExerciseDetail/ExerciseDetail";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAME.index} element={<Layout />}>
        <Route index element={<Home name={"home"} />} />
        <Route
          path={ROUTE_NAME.exercises}
          element={<Excercises name={ROUTE_NAME.exercises} />}
        />
        <Route path={ROUTE_NAME.exerciseDetail} element={<ExerciseDetail />} />
        <Route
          path={ROUTE_NAME.muscles}
          element={<Muscles name={ROUTE_NAME.muscles} />}
        />
        <Route
          path={ROUTE_NAME.workoutSplits}
          element={<WorkoutSplits name={ROUTE_NAME.workoutSplits} />}
        />
        <Route
          path={ROUTE_NAME.calendar}
          element={<Calendar name={ROUTE_NAME.calendar} />}
        />

        <Route
          path={ROUTE_NAME.analytics}
          element={<Analytics name={ROUTE_NAME.analytics} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
