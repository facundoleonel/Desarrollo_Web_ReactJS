import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import {
  BsFillArrowLeftCircleFill as IconLeft,
  BsFillArrowRightCircleFill as IconRight,
} from "react-icons/bs";

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
    let prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    if (prevPage < 0) {
      setCurrentPage(COUNTER_MAX);
    }
  };
  const handleNext = (e) => {
    e.preventDefault();
    let nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    if (nextPage >= COUNTER_MAX) {
      setCurrentPage(0);
    }
  };
  return (
    <>
      <section className="portada" id="portada-banner">
        <picture>
          {currentPost && (
            <>
              <img
                width={"100%"}
                style={{ objectFit: "cover" }}
                height={"350px"}
                src={currentPost.imagen}
                alt={currentPost.titulo}
              />
              <p>
                <strong>{currentPost.titulo}</strong>
              </p>
            </>
          )}
        </picture>
        <div className="columns-2">
          <Button onClick={handlePrev} className="btn-banner-prev">
            <IconLeft />
          </Button>
          <Button onClick={handleNext} className="btn-banner-next">
            <IconRight />
          </Button>
        </div>
      </section>
    </>
  );
};
