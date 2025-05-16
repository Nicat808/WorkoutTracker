import PageTitle from "../../components/Global/PageTitle/PageTitle";

const Exercises = ({ name }) => {
  return (
    <>
      <PageTitle name={name} />
      <div className="exercises-container"></div>
    </>
  );
};

export default Exercises;
