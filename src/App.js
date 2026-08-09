import React, { useState } from "react";
import axios from "axios";

import style from "./App.module.css";

// components
import GetProducts from "./components/GetProducts";
import AddProduct from "./components/AddProduct";
import PutProduct from "./components/PutProduct";
import DeleteProduct from "./components/DeleteProduct";

// Axios Config
axios.defaults.baseURL = "https://fakestoreapi.com";
axios.interceptors.request.use((request) => {
  console.log(request);
  return request;
});
axios.interceptors.response.use((response) => {
  console.log(response);
  return response.data;
});

const App = () => {
  const [showComponent, setShowComponent] = useState({
    get: false,
    add: false,
    put: false,
    delete: false,
  });

  const btnhandler = (event) => {
    // setShowComponent({ ... showComponent , get : true})

    setShowComponent({
      ...showComponent,
      [event.target.name]: !showComponent[event.target.name],
      // get : !false
    });
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.btnComponentController}>
        <button name="get" onClick={btnhandler}>
          get Products
        </button>
        <button name="add" onClick={btnhandler}>
          add Product
        </button>
        <button name="put" onClick={btnhandler}>
          put Product
        </button>
        <button name="delete" onClick={btnhandler}>
          delete Product
        </button>
      </div>
      {showComponent.get && <GetProducts />}
      {showComponent.add && <AddProduct />}
      {showComponent.put && <PutProduct />}
      {showComponent.delete && <DeleteProduct />}
    </div>
  );
};

export default App;
