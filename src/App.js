import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CatEdit from './pages/CatEdit';
import CatIndex from './pages/CatIndex';
import CatNew from './pages/CatNew';
import CatShow from './pages/CatShow';
// Mock Cats
import mockCats from "./mockCats"

function App() {

  const [cats, setCats] = useState([])
    console.log(cats)

  useEffect(() => {
    readCat()
  }, [])

  const readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((payload) => setCats(payload))
      .catch((error) => console.log(error))
  }  

  const createCat = (cat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(cat), 
      headers: {
        "Content-Type": "application/json"
      }, 
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readCat())
    .catch((errors) => console.log(errors))
  }

  fetch("rails-api-endpoint")
    .then((response) => response.json())
    .then((payload) => console.log(payload))
    .catch((error) => console.log(error))

  return (
      <>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catindex" element={<CatIndex cats={cats} />} />
          <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
          <Route path="/catnew" element={<CatNew createCat={createCat} />} />
          <Route path="/catedit" element={<CatEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </>
  )
}

export default App;
