import { createContext, useState } from "react";
import { Home } from "./Pages/Home";

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import { AddProduct } from "./Pages/AddProduct";
import { RemoveProduct } from "./Pages/RemoveProduct";
import { List } from "./Pages/List";

export var userContext = createContext(null)


const App = () => {



  const [products, setProducts] = useState([])
  const [no, setNo] = useState(0)

  console.log(no, "nono");

  return (

    <userContext.Provider value={{ no: no, setNo: setNo, products, setProducts }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/remove" element={<RemoveProduct />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
