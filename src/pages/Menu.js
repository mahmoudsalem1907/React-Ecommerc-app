import { useState } from "react";
import MCard from "../component/Card";
import Louder from "../component/Louder";

const Menu = ({ products, categories, handlerAddToCart }) => {
  // state to search
  const [search, setSearch] = useState("");
  // search function
  const handlersearch = (e) => {
    console.log(e.target.value.toLowerCase());
    setSearch(e.target.value.toLowerCase());
    console.log(search);
    // textin();
    // console.log(products.name.toLowerCase().includes(search));
  };
  // filtered
  const [currentCategory, setCurrentCategory] = useState(0);
  // filtered item
  const filteredItems =
    currentCategory === 0
      ? products.filter((p) => p.name.toLowerCase().includes(search))
      : products.filter(
          (p) =>
            p.name.toLowerCase().includes(search) &&
            p.category === currentCategory
        );
  // ------------------------ paggination -----------------------------
  // set the number of items to view in screen
  const itemCountPerPage = 5;
  // set the current page
  const [pageNo, setPageNo] = useState(1);
  // set state to the categories
  // logic to get start index of the page
  const startIndexInPage = (pageNo - 1) * itemCountPerPage;
  // cut the all product to start the paganation
  const pagenationItems = filteredItems.slice(
    startIndexInPage,
    startIndexInPage + itemCountPerPage
  );
  // that is array to carry the number of pages
  let pageArray = [];
  const noOfPage = Math.ceil(filteredItems.length / itemCountPerPage);
  for (let i = 1; i <= noOfPage; i++) {
    // const element = array[i];
    pageArray.push(i);
  }
  // console.log(pageArray);
  const handlerPagination = (page) => {
    //setState
    setPageNo(page);
  };
  // change the current category
  const handlerChangeCategories = (cat) => {
    setCurrentCategory(cat);
    setPageNo(1);
  };

  const [sortState, setSortState] = useState("none");
  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };

  return (
    <>
      <div className="row">
        <div className="col-2 p-2 mt-2">
          <div className="list-group" id="list-tab" role="tablist">
            <div className="mb-2">
              {/* <form className="d-flex"> */}
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handlersearch}
                value={search}
              />
            </div>
            <div className="mb-2 fs-5 text-secondary">Category</div>
            {categories.map((cat) => (
              <a
                key={cat.id}
                className={
                  cat.id === currentCategory
                    ? "list-group-item list-group-item-action active"
                    : "list-group-item list-group-item-action "
                }
                id="list-home-list"
                data-bs-toggle="list"
                href="#list-home"
                role="tab"
                aria-controls="list-home"
                onClick={() => handlerChangeCategories(cat.id)}
              >
                {cat.name}
              </a>
            ))}
          </div>
          {/* {categories.length === 0 && <Louder />} */}
        </div>
        <div className="col-10">
          <div className="row d-flex justify-content-around gap-3 my-3">
            {pagenationItems.map((p) => (
              <MCard
                item={p}
                key={p.name}
                handlerAddToCart={handlerAddToCart}
              />
            ))}
          </div>
          {/* pagination */}
          {pageArray.length !== 1 && (
            <nav aria-label="...">
              <ul className="pagination pagination-sm d-flex justify-content-center">
                {pageArray.map((page) => (
                  <li
                    key={page}
                    className={
                      page == pageNo ? "page-item active" : "page-item"
                    }
                    aria-current="page"
                    onClick={() => handlerPagination(page)}
                  >
                    <span style={{ cursor: "pointer" }} className="page-link">
                      {page}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        {products.length === 0 && <Louder />}
      </div>
    </>
  );
};

export default Menu;
