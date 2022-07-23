import { Link } from "react-router-dom";
import axios from "axios";

const Admin = ({ products, handleDeleteProduct }) => {
  const handleDelete = async (product) => {
    await axios.delete(`http://localhost:3000/products/${product.id}`);

    handleDeleteProduct(product);
  };
  return (
    <>
      <Link to="/product/add">
        <div className="btn btn-primary mt-3 float-end px-4">Add</div>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <Link to={`/product/${p.id}`}>
                  <div className="btn btn-primary btn-sm">Edit</div>
                </Link>
              </td>
              <td>
                <div
                  onClick={() => handleDelete(p)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Admin;
