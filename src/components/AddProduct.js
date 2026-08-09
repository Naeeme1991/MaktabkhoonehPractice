import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [inputValue, setInputValue] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    image: "",
  });

  // let formData = new FormData();

  const onInputChange = (event) => {
    switch (event.target.name) {
      case "title":
        setInputValue({ ...inputValue, title: event.target.value });
        // formData.appeend("title", event.target.value);
        break;
      case "category":
        setInputValue({ ...inputValue, category: event.target.value });
        // formData.appeend("category", event.target.value);
        break;
      case "description":
        setInputValue({ ...inputValue, description: event.target.value });
        // formData.appeend("description", event.target.value);
        break;
      case "price":
        setInputValue({ ...inputValue, price: event.target.value });
        // formData.appeend("price", event.target.value);
        break;
      case "file":
        setInputValue({ ...inputValue, image: event.target.files[0] });
      // formData.appeend("image", event.target.files[0]);
      default:
        break;
    }
  };

  const postData = (event) => {
    event.preventDefault();

    axios
      .post(`/products`, inputValue)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });

    // axios
    //   .post(`/products`, formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "20px",
      }}
    >
      <h3>Add a new Product</h3>
      <form onSubmit={postData}>
        <input
          value={inputValue.title}
          onChange={onInputChange}
          type="text"
          placeholder="Title"
          name="title"
        />
        <input
          value={inputValue.category}
          onChange={onInputChange}
          type="text"
          placeholder="Category"
          name="category"
        />
        <input
          value={inputValue.description}
          onChange={onInputChange}
          type="text"
          placeholder="Description"
          name="description"
        />
        <input
          value={inputValue.price}
          onChange={onInputChange}
          type="number"
          placeholder="Price"
          name="price"
        />
        <input onChange={onInputChange} type="file" name="file" />
        {inputValue.title &&
          inputValue.category &&
          inputValue.description &&
          inputValue.price &&
          inputValue.image && <button type="submit">Add Product</button>}
      </form>
    </div>
  );
};

export default AddProduct;
