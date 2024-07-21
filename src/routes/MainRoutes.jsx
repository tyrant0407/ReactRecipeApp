import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Layout from "../components/Layout";
import Recipes from "../components/Recipes";
import Details from "../components/Details";
import Create from "../components/Create";
import About from "../components/About";
import Contact from "../components/Contact";
import Update from "../components/Update";

const MainRoutes = () => {
  return (
    <div>
        <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/create-recipe" element={<Create />} />
                <Route path="/update-recipe/1" element={<Update />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/1" element={<Details />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
      
    </div>
  )
}

export default MainRoutes
