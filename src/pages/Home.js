import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  const handleGoToFool = () => {
    console.log("navigate");
    navigate("/product/fool/22", { replace: true });
  };
  return (
    <>
      <h1>Welcome Home</h1>
      <div
        className="btn btn-danger"
        onClick={() => {
          handleGoToFool();
        }}
      >
        Go to Fool
      </div>
    </>
  );
};

export default Home;
