import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="get-back-icon" onClick={handleNavigate}>
      <MoveLeft size={48} absoluteStrokeWidth />
    </div>
  );
};

export default GoBack;
