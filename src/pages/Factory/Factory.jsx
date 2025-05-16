import PageTitle from "../../components/Global/PageTitle/PageTitle";
import { Dumbbell, BicepsFlexed, SeparatorVertical } from "lucide-react";
import { ROUTE_NAME } from "../../utils/route";
import { useNavigate } from "react-router-dom";
import FactoryCard from "../../components/Factory/FactoryCard/FactoryCard";

const fabricParts = [
  {
    name: ROUTE_NAME.exerciseFactory.split("/")[1],
    icon: <Dumbbell size={120} absoluteStrokeWidth />,
  },
  {
    name: ROUTE_NAME.muscleFactory.split("/")[1],
    icon: <BicepsFlexed size={120} absoluteStrokeWidth />,
  },
  {
    name: ROUTE_NAME.workoutSplitFactory.split("/")[1],
    icon: <SeparatorVertical size={120} absoluteStrokeWidth />,
  },
];

const Factory = ({ name }) => {
  const navigate = useNavigate();

  return (
    <>
      <PageTitle name={name} />
      <div className="factory-container">
        {fabricParts.map((part, i) => (
          <FactoryCard
            icon={part.icon}
            key={i}
            name={part.name}
            onClickHandler={() => navigate(part.name, { state: part.name })}
          />
        ))}
      </div>
    </>
  );
};

export default Factory;
