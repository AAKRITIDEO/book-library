import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import defaultBook from "../../img/defaultBook.png";
import "../../css/style.css";
import "./book.css";
import { motion } from "framer-motion";




const Book = ({ id, volumeInfo }) => {
  const imageVariants = {
    hover: {
      scale: 1.7,
      boxShadow: "0px 0px 8px #000",
      transition: {
        duration: 0.5,
        type: "spring",
        delay: 0.15,
      },
    },
  };


  let { title, authors, publisher, previewLink, imageLinks } = volumeInfo;

  //setting up default values for volume info data
  title = title || "Title is not available";
  authors = authors || "Author(s) name not available";
  publisher = publisher || "Publisher company not available";
  previewLink = previewLink || "https://books.google.co.in/";

  return (
   
      <div key={id} className="loading-card">
        <>
          <motion.img
            src={imageLinks ? imageLinks.thumbnail : defaultBook}
            width="100px"
            alt="Book-cover"
            variants={imageVariants}
            whileHover="hover"
          />
        </>
        <>
          {title && (
            <>
              <h3 className="inline">{title}</h3>
            </>
          )}
        </>

        <>
          {authors && (
            <h4>
              Author:{" "}
              <span>   
                {authors}
              </span>
            </h4>
          )}
        </>

        <>
          {publisher && (
            <h5>
              {" "}
              Published by:{" "}
              <span>
                {" "}
                {publisher}
              </span>
            </h5>
          )}
        </>

        <>
          {previewLink && (
            <h5>
              Read more :{" "}
              {/* <a href={`/books/${id}`} target="_blank" rel="noreferrer"> */}
              <a href={previewLink} target="_blank" rel="noreferrer">
                {" "}
                Google Books <BiLinkExternal/>

              </a>

             
            </h5>
          )}
        </>
      </div>
  
  );
};

export default Book;
