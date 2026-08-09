import React, { useState } from "react";
import axios from "axios";

const DeleteProduct = () => {
  const [inputValue, setInputValue] = useState("");

  const deleteData = (event) => {
    event.preventDefault();

    axios
      .delete(`/products/${inputValue}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
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
      <h3>Delete a Product</h3>
      <form onSubmit={deleteData}>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          type="number"
          placeholder="Type Id ..."
          name="id"
        />
        {inputValue && <button type="submit">Delete Product</button>}
      </form>
    </div>
  );
};

export default DeleteProduct;
