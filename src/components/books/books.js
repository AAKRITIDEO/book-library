import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../img/Book.svg";
import Searchform from "../search-form/searchform";
import Footer from "../../pages/footer/footer";
import Book from "../book/book";
import LoadingCard from "../loadingcard/loadingCard";
import Header from "../../pages/header/header";
import ScrollToTop from "../scrolltop/scrolltotop";
import "./books.css";


const BookDetails = () => {
  const [details, setDetails] = useState([]);

  const [term, setTerm] = useState("George Orwell");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      const resources = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=11`
      );
      setDetails(resources.data.items);
      setIsLoading(false);
    };
    fetchDetails();
  }, [term]);

  const loadMore = async () => {
    const resources = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=8&startIndex=${details.length}`
    );
    setDetails((oldDetails) => [...oldDetails, ...resources.data.items]);
  };

  return (
    <div className="books-content">
    <Header/>
    
      <h2>
        {term}
      </h2>
      <Searchform searchText={(text) => setTerm(text)}></Searchform>
      {isLoading ? (
        <div className="container">
          
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>
      ) : !details ? (
        <h1>
          😞 Couldn't find books about {term}
        </h1>
      ) : (
        <>
          <div className="container">
            {details.map((book, index) => (
              <Book {...book} key={index} />
            ))}
            <div className="custom-card">
              <h3>
                Didn't find the book you love?
              </h3>
              <br />

              <img
                src={logo}
                alt="A man reading a book"
                srcSet=""
              />

              <p>
                Search for your favourite{" "}
                <span>
                  Genre{" "}
                </span>
                or{" "}
                <span>
                  Author{" "}
                </span>
                in the search box!!
              </p>
            </div>
          </div>
          <div className="load-more">
            <button onClick={() => loadMore()}>Load More!</button>
          </div>
          <ScrollToTop/>
          <Footer/>
        </>
      )}
    </div>
  );
};

export default BookDetails;
