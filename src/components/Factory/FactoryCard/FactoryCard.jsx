const FactoryCard = ({ onClickHandler, name, icon }) => {
  return (
    <div className="fabric-part-card" onClick={onClickHandler}>
      <div className="fabric-part-card-front">{name}</div>
      <div className="fabric-part-card-back"> {icon}</div>
    </div>
  );
};

export default FactoryCard;
