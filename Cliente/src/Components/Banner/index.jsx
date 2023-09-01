import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Loading from "./../../Assets/img/loading.gif";

export const Banner = ({ posts = [] }) => {
  const [COUNTER_MAX, setCOUNTER_MAX] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPost, setCurrentPost] = useState({});
  // {  }
  useEffect(() => {
    setCOUNTER_MAX(posts.length - 1);
  }, [posts]);

  useEffect(() => {
    setCurrentPost(posts[currentPage]);
  }, [currentPage, posts]);

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
    if (currentPage < 0) {
      setCurrentPage(COUNTER_MAX);
    }
  };
  const handleNext = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
    if (currentPage >= COUNTER_MAX) {
      setCurrentPage(0);
    }
  };
  return (
    <section className="portada" id="portada-banner">
      {" "}
      <picture>
        {currentPost ? (
          <>
            <img
              width={"100%"}
              style={{objectFit:"cover"}}
              height={"350px"}
              src={currentPost.urlToImage}
              alt={currentPost.title}
            />
            <p><strong>{currentPost.title}</strong></p>
          </>
        ) : (
          <section className="loading">
            <img src={Loading} alt="uner" />
          </section>
        )}
      </picture>
      <div className="columns-2">
        <Button onClick={handlePrev}>Izquierda</Button>
        <Button onClick={handleNext}>Derecha</Button>
      </div>
    </section>
  );
};
