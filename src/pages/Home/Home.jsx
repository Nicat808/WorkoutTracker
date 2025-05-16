import PageTitle from "../../components/Global/PageTitle/PageTitle";

const Home = ({ name }) => {
  return (
    <div>
      <PageTitle name={name} />
      <div className="test1"></div>
      <div className="test2"></div>
      <div className="test3"></div>
    </div>
  );
};

export default Home;
