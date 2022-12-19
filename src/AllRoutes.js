import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;