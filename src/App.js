import React, { useState } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CatEdit from './pages/CatEdit';
import CatIndex from './pages/CatIndex';
import CatNew from './pages/CatNew';
import CatShow from './pages/CatShow';
import { Routes, Route } from 'react-router';
import './App.css';

import mockCats from "./mockCats"

function App() {
  const [cats, setCats] = useState(mockCats)
  console.log(cats)
  return (
      <>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catindex" element={<CatIndex />} />
          <Route path="/catshow" element={<CatShow />} />
          <Route path="/catnew" element={<CatNew />} />
          <Route path="/catedit" element={<CatEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </>
  );
}

export default App;
