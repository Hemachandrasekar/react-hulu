import React from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MovieList = ({ list }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  return (
    <div className="px-5 my-4 sm:grid md:grid-cols-3 cursor-pointer ">
      {list?.map((item, index) => {
        return (
          <div className="flex flex-col p-2 transition duration-200 ease-in transform sm:hover:scale-105 group hover:z-50">
            <LazyLoadImage
              alt={item.title}
              effect="blur"
              src={`${BASE_URL}${item.backdrop_path}`}
            />
            <div className="p-2">
              <p className="truncate max-w-md">{item.overview}</p>
              <h2 className="mt-2 text-white text-2xl transition-all duration-100 ease-in-out ">
                {item.title}
              </h2>
            </div>
            <div className="flex col-auto opacity-0 group-hover:opacity-100 gap-4 px-2">
              <p>{item.release_date}</p>
              <ThumbUpIcon className="h-5" />
              <p>{item.vote_count}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
