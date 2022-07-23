import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

const ProductPage = () => {
  const params = useParams();
  const loction = useLocation();

  const qs = queryString.parse(loction.search);
  console.log(qs);
  return <h1>mahmsd : {params.id}</h1>;
};

export default ProductPage;
