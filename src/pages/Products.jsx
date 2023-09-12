import React from "react";
import Menubar from "../components/Menubar";
import ProductTable from "../components/ProductTable";

export function Products() {
  return (
    <div className="flex justify-center">
      <div className="h-screen w-screen bg-white shadow-lg rounded-lg">
        <div className="flex flex-row">
          <Menubar />
          <div className="h-4/5 w-full bg-white mt-2 mx-4 rounded-lg">
            <ProductTable />
          </div>
        </div>
      </div>
    </div>
  );
}

/* {<Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <AddProduct />} */
