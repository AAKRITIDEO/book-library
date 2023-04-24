import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from "react";
import Books from "../books/books";
import Header from "../../pages/header/header";
import Home from "../../pages/homepage/HomePage";
import ScrollToTop from "../scrolltop/scrolltotop";
import PageNotFound from '../../pages/page-not-found/PageNotFound';
import "../../css/style.css"
import Book from '../book/book';
import BookDetail from '../book-detail/bookdetail';
import About from '../../pages/about/about';


const App = () => {
  return (


    <BrowserRouter>
    
      <Routes>
      <Route path="/header" element={<Header/>} />
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/books" element={<Books/>} />
      <Route path="/book" element={<Book/>} />
      <Route path="/scrolltotop" element={<ScrollToTop/>} />
      <Route path="/books/:BookId" element={<BookDetail/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;
