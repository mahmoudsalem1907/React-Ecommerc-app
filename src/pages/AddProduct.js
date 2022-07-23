import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddProduct = ({
  handleAddNewProduct,
  categories,
  products,
  handleEditProduct,
}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const mode = id === "add" ? "add" : "edit";
  const productToEdit = products.find((p) => p.id === +id);

  const [product, setProduct] = useState({
    name: mode === "add" ? "" : productToEdit.name,
    price: mode === "add" ? "" : productToEdit.price,
    category: mode === "add" ? "" : productToEdit.category,
  });
  const handlerSubmit = async (e) => {
    e.preventDefault();

    if (mode === "add") {
      handleAdd();
    } else {
      handleEdit(id, product);
    }

    // Navigate to Admin Page
    navigate("/admin");
  };
  const handleAdd = async () => {
    // Call Backend
    const { data: newProduct } = await axios.post(
      "http://localhost:3000/products",
      { ...product, count: 0, isEmpty: false }
    );

    // Add the new product to the list of products
    handleAddNewProduct(newProduct);
  };

  const handleEdit = async (id, prodct) => {
    const { data } = await axios.put(`http://localhost:3000/products/${id}`, {
      ...product,
      count: 0,
      isEmpty: false,
    });
    handleEditProduct(data);
  };

  return (
    <>
      {mode === "add" ? (
        <h1 className="mt-3">Add new product</h1>
      ) : (
        <h1 className="mt-3">Edit product</h1>
      )}
      <form className="py-2" onSubmit={handlerSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            //   ref={emailref}
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}
            autoFocus
            type="text"
            className={"form-control"}
            id="name"
            value={product.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Product Price
          </label>
          <input
            value={product.price}
            //   ref={emailref}
            onChange={(e) => {
              setProduct({ ...product, price: +e.target.value });
            }}
            type="text"
            className={"form-control"}
            id="price"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product Category
          </label>
          <select
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: +e.target.value })
            }
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option>Category</option>
            {categories
              .filter((cat) => cat.id !== 0)
              .map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
          </select>
        </div>
        {/* <div className="text-danger">{errors?.email}</div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddProduct;
