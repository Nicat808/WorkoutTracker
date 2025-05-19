import { Exercise } from "../models/exercise";
import {
  exerciseForces,
  exerciseMechanics,
} from "../utils/constants/exerciseClassifications";
import pullUp from "../assets/images/Exercises/pull-up.webp";
import upRightRow from "../assets/images/Exercises/EZ-bar-wide-grip-upright-row.webp";
import { exerciseNames } from "../utils/constants/exerciseNames";
import { muscleNames } from "../utils/constants/muscleNames";

export const exerciseList = [
  new Exercise(
    exerciseNames.pullUp,
    exerciseMechanics.Compound,
    exerciseForces.Pull,
    [
      muscleNames.LATS.name,
      muscleNames.Shoulders.parts.RearDelts.name,
      muscleNames.Biceps.name,
    ],
    pullUp
  ),
  new Exercise(
    exerciseNames.upRightRow,
    exerciseMechanics.Compound,
    exerciseForces.Pull,
    [muscleNames.Shoulders.parts.SideDelts.name],
    upRightRow
  ),
];
