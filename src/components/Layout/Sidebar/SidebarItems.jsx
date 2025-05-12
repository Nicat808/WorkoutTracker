import { IoMdHome } from "react-icons/io";
import { BiDumbbell } from "react-icons/bi";
import { MdFactory } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { GiMuscleUp } from "react-icons/gi";
import { BsWindowSplit } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";

import { ROUTE_NAME } from "../../../utils/route";

export const sidebarItems = [
  {
    path: ROUTE_NAME.index,
    name: "home",
    icon: <IoMdHome />,
  },
  {
    path: ROUTE_NAME.exercises,
    name: "exercises",
    icon: <BiDumbbell />,
  },
  {
    path: ROUTE_NAME.muscles,
    name: "muscles",
    icon: <GiMuscleUp />,
  },
  {
    path: ROUTE_NAME.workoutSplits,
    name: "workout splits",
    icon: <BsWindowSplit />,
  },
  {
    path: ROUTE_NAME.calendar,
    name: "calendar",
    icon: <FaCalendarAlt />,
  },
  {
    path: ROUTE_NAME.factory,
    name: "factory",
    icon: <MdFactory />,
  },
  {
    path: ROUTE_NAME.analytics,
    name: "Statistics",
    icon: <IoAnalyticsSharp />,
  },
];
