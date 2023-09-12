import React from "react";
import { Link } from "react-router-dom";

const ProductTable = () => {
  return (
    <>
      <div className="mt-5">
        <div>
          <h2 className="text-lg font-semibold text-left text-gray-900 bg-white ml-5">
            Products
          </h2>
          <p className="my-1.5 text-sm font-normal text-gray-500 ml-5">
            Browse list of products designed to help you work and play, stay
            organized, get answers, keep in touch, grow your business, and more.
          </p>
        </div>
        <div className="relative overflow-x-auto no-scrollbar">
          <div className="flex justify-between">
            <div className="pb-4 bg-white ml-5">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search for products"
                />
              </div>
            </div>
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-800
            font-light rounded-lg text-sm px-2 py-0 mb-4 text-center inline-flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
              <Link to={"/addproduct"}>Add Product</Link>
            </button>
          </div>
          <table className="w-full text-sm text-left rounded-md text-gray-500 ml-5">
            <thead className="text-xs text-gray-700 bg-gray-100 rounded-lg">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 font-extralight">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3 font-extralight">
                  Color
                </th>
                <th scope="col" className="px-6 py-3 font-extralight">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 font-extralight">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 font-extralight">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3 font-extralight">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-light text-gray-900 whitespace-nowrap"
                >
                  Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4 font-extralight text-gray-900">
                  Silver
                </td>
                <td className="px-6 py-4 font-extralight text-gray-900">
                  Laptop
                </td>
                <td className="px-6 py-4 font-extralight text-gray-900">
                  $2999
                </td>
                <td className="px-6 py-4 font-extralight text-gray-900">500</td>
                <td className="px-6 py-4 font-extralight text-gray-900">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <nav
            className="flex items-center justify-between pt-4 mb-3 ml-5"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500">
              Showing <span className="font-semibold text-gray-900">1-10</span>{" "}
              of <span className="font-semibold text-gray-900">1000</span>
            </span>
            <ul className="inline-flex -space-x-px text-sm h-8">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
