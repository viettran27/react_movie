import React from "react";

import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/:cate" element={<Catalog />}></Route>
            <Route path="/:cate/:id" element={<Detail />}></Route>
            <Route path="/:cate/search/:keyword" element={<Catalog />}></Route>
        </Routes>
    )
}

export default RoutesConfig
