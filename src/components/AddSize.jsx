import React from "react";
import { useState } from "react";

export function AddSize({ onSizeChange }) {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState();
  const [sizes, setSizes] = useState([]);
  const [item, setItem] = useState(false);

  const addSize = () => {
    if (value.trim() !== "") {
      setSizes([...sizes, value]);
      setValue(); // Clear the input field
      onSizeChange([...sizes, value]); // Notify the parent component of the selected sizes
    }
  };

  const deleteSize = (index) => {
    const updatedSizes = [...sizes];
    updatedSizes.splice(index, 1);
    setSizes(updatedSizes);
  };

  return (
    <>
      {item && sizes.length > 0 ? (
        <ul className="flex items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
          {sizes.map((size, index) => (
            <li
              key={index}
              className={`w-full  border-gray-200  ${index > 0 ? "mx-1" : ""} ${
                index < sizes.length - 1 ? "border-r" : ""
              }`}
            >
              <div className="flex items-center justify-center pl-3">
                <input
                  id={`size-${size}`}
                  type="checkbox"
                  name="size"
                  value={size}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor={`size-${size}`}
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {size}
                </label>
                <button
                  className="mr-1.5 text-gray-900 text-2xl block outline-none"
                  onClick={() => deleteSize(index)}
                  type="button"
                >
                  ×
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      <button
        type="button"
        onClick={() => {
          setShowModal(true);
          setItem(true);
        }}
        className="flex justify-center items-center w-full h-12 border-2 border-gray-300 border-dashed rounded-lg mt-2 cursor-pointer bg-gray-50  hover:bg-gray-100 "
      >
        <svg
          className="w-10 h-10 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className=" rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-2.5 mx-1">
                  <h3 className="text-xl font-light text-gray-900">Add size</h3>
                  <button
                    className="p-1 ml-auto bg-transparent  text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-gray-900 text-2xl block outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-2.5 mx-1 flex-auto">
                  <input
                    type="text"
                    value={value}
                    className="rounded-lg"
                    onChange={(e) => setValue(e.target.value)}
                    required
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-3 rounded-b">
                  <button
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2 hover:text-gray-900 focus:z-10 mx-2"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      addSize();
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
