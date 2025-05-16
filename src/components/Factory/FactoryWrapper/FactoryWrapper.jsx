import { MoveLeft, CircleChevronLeft } from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../Global/PageTitle/PageTitle";

const FactoryWrapper = () => {
  const navigate = useNavigate();
  const { state: name } = useLocation();

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="factory-detail-container">
      <PageTitle name={`Welcome to ${name} factory !`} />
      <div className="factory-history-back-icon" onClick={handleNavigate}>
        <MoveLeft size={48} />
      </div>
      <Outlet />
    </div>
  );
};

export default FactoryWrapper;
