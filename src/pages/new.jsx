import React, { useState } from "react";
import { AddSize } from "../components/AddSize";
import { Menubar } from "../components/Menubar";
import { SubmitBtn } from "../components/SubmitBtn";
import banana from "../assets/images/banana.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import firebase from "firebase/app";
import "firebase/firestore";

export function AddProduct() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageGallery, setImageGallery] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    apparel_category: "",
    gender: "",
    brand: "",
    description: "",
    sizes: [],
    date: null,
  });

  const uploadImages = async () => {
    const storageRef = firebase.storage().ref();
    const imageUrls = [];

    for (const imageFile of selectedImages) {
      const imageRef = storageRef.child(`images/${imageFile.name}`);
      await imageRef.put(imageFile);
      const imageUrl = await imageRef.getDownloadURL();
      imageUrls.push(imageUrl);
    }

    setImageUrls(imageUrls);
  };

  const handleSizeChange = (sizes) => {
    // Update the selected sizes in the formData state
    setFormData({ ...formData, sizes });
  };

  //Firebse function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await uploadImages();

      const db = firebase.firestore();
      const userId = firebase.auth().currentUser.uid;

      const userFormsRef = db
        .collection("users")
        .doc(userId)
        .collection("forms");
      const formWithImages = { ...formData, images: imageUrls };

      await userFormsRef.add(formWithImages);

      // Clear the form and selected images
      setFormData({
        name: "",
        apparel_category: "",
        gender: "",
        brand: "",
        description: "",
        sizes: [],
        date: null,
      });
      setSelectedImages([]);
      setImageUrls([]);

      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const files = e.target.files;
    setSelectedImages([...selectedImages, ...files]);

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      // Create an image element to check dimensions
      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        const maxSizeInBytes = 3 * 1024 * 1024; // 3MB

        if (file.size > maxSizeInBytes) {
          // Show an alert if the file size exceeds the limit
          alert("File size is too large. Please select a smaller file.");
          return;
        }

        const maxWidth = 9000; // Define your maximum width
        const maxHeight = 9000; // Define your maximum height

        if (img.width <= maxWidth && img.height <= maxHeight) {
          const newGallery = [...imageGallery, imageUrl].slice(-4);
          setSelectedImage(imageUrl);
          setImageGallery(newGallery);
        } else {
          // Alert if dimensions exceed the limits
          alert(
            `Image dimensions exceed the maximum allowed (${maxWidth}x${maxHeight}).`
          );
        }
      };
    }
  };

  return (
    <div className="flex justify-center">
      <div className="h-full w-screen bg-white shadow-lg rounded-lg">
        <div className="flex flex-row">
          <Menubar />
          <div className="h-4/5 w-4/5 bg-white mt-4 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between">
                <div className="w-1/2">
                  <div className="mb-3 mx-5 w-full">
                    <label
                      htmlFor="base-input"
                      className="block mb-2 font-medium text-xs text-gray-900 "
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="product_name"
                      id="base-input"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    />
                  </div>

                  <div className="flex justify-between w-full">
                    <div className="mb-3 ml-5 mr-1">
                      <label
                        className="block mb-2 font-medium text-xs text-gray-900"
                        htmlFor="category"
                      >
                        Category
                      </label>
                      <select
                        name="apparel_category"
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        value={formData.apparel_category}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs p-2 text-center w-48 inline-flex mr-2 items-center"
                      >
                        <option id="dropdown" value="t-shirts">
                          T-Shirts
                        </option>
                        <option id="dropdown" value="jeans">
                          Jeans
                        </option>
                        <option id="dropdown" value="dresses">
                          Dresses
                        </option>
                        <option id="dropdown" value="sweaters">
                          Sweaters
                        </option>
                        <option id="dropdown" value="jackets">
                          Jackets
                        </option>
                        <option id="dropdown" value="shoes">
                          Shoes
                        </option>
                        <option id="dropdown" value="hats">
                          Hats
                        </option>
                        <option id="dropdown" value="socks">
                          Socks
                        </option>
                        <option id="dropdown" value="scarves">
                          Scarves
                        </option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label
                        className="block mb-2 font-medium text-xs text-gray-900"
                        htmlFor="gender"
                      >
                        Gender
                      </label>
                      <select
                        name="gender"
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs p-2 text-center w-44 inline-flex items-center"
                        onChange={handleChange}
                        value={formData.gender}
                      >
                        <option id="dropdown" value="male">
                          Male
                        </option>
                        <option id="dropdown" value="female">
                          Female
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3 w-full ml-5">
                    <label
                      className="block mb-2 font-medium text-xs text-gray-900"
                      htmlFor="brand"
                    >
                      Brand
                    </label>
                    <select
                      name="brand"
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="dropdown"
                      className="bg-gray-50 border
                     border-gray-300 
                     text-gray-900  
                     focus:ring-4 
                     focus:outline-none
                  focus:ring-blue-300 
                    font-medium rounded-lg text-xs p-2 text-center w-full inline-flex items-center"
                      onChange={handleChange}
                      value={formData.brand}
                    >
                      <option id="dropdown" value="nike">
                        Nike
                      </option>
                      <option id="dropdown" value="Addidas">
                        Addidas
                      </option>
                    </select>
                  </div>

                  <div className="mb-3 w-full ml-5">
                    <label
                      className="block mb-2 font-medium text-xs text-gray-900"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      className="h-72 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your product description"
                      maxLength={180}
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                    <p className="text-xs font-light text-gray-400 my-2">
                      Do not exceed 180 characters while entering product
                      description.
                    </p>
                  </div>
                </div>
                <div className="mb-3 mx-5 w-5/12">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 font-medium text-xs text-gray-900 "
                  >
                    Product Images
                  </label>

                  <label
                    htmlFor="dropzone-file"
                    className="flex justify-center"
                  >
                    <img
                      src={selectedImage || banana} // Use the selected image or a default image
                      className="h-64 rounded-lg"
                      alt=""
                    />
                  </label>
                  <div className="my-3 grid grid-cols-5 gap-3">
                    {imageGallery.map((image, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center max-h-12 max-w-full rounded-lg bg-gray-50 border border-gray-300 focus:border-2 focus:ring-blue-500 focus:border-blue-500"
                        tabIndex="0"
                      >
                        <img
                          src={image}
                          alt={`Image ${index + 1}`}
                          onClick={() => setSelectedImage(image)}
                          className="object-scale-down max-h-10 max-w-full "
                        />
                      </div>
                    ))}
                    <label
                      htmlFor="dropzone-file"
                      className="w-full h-12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
                    >
                      <svg
                        className="max-h-6 max-w-full mt-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="rgb(55 65 81)"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />{" "}
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                      </svg>

                      <input
                        id="dropzone-file"
                        type="file"
                        name="images"
                        accept=".png, .jpg"
                        className="hidden"
                        onChange={handleFileChange}
                        multiple
                      />
                    </label>
                  </div>

                  <div className="mb-3 mr-1">
                    <label
                      className="mb-2 font-medium text-xs text-gray-900"
                      htmlFor="category"
                    >
                      Size
                    </label>

                    <AddSize onSizeChange={handleSizeChange} />
                  </div>
                  <div className="mb-3">
                    <label
                      className="block mb-2 font-medium text-xs text-gray-900"
                      htmlFor="gender"
                    >
                      Date
                    </label>
                    <DatePicker
                      name="date"
                      selected={formData.date}
                      onChange={(date) => {
                        setFormData({ ...formData, date });
                      }}
                      dateFormat="dd/MM/yyyy" // You can customize the date format
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <SubmitBtn />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
