import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../components/SingleContent";
import CunstomPagination from "../components/CunstomPagination";

const { VITE_API_KEY, VITE_ACCESS_TOKEN } = import.meta.env;

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrending = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/trending/all/week?language=en-US&page=${page}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${VITE_ACCESS_TOKEN}`,
      },
    };
    const { data } = await axios.request(options);
    //console.log(data.results);
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <span className="uppercase flex justify-center font-mono text-3xl rounded-3xl p-1">Trending</span>
      <div className="flex flex-wrap justify-center gap-3">
        {content &&
          content.map(
            ({
              id,
              name,
              title,
              poster_path,
              first_air_date,
              release_date,
              media_type,
              vote_average,
            }) => (
              <SingleContent
                key={id}
                id={id}
                title={title || name}
                date={first_air_date || release_date}
                poster={poster_path}
                media_type={media_type}
                vote_average={vote_average}
              />
            )
          )}
      </div>
      <CunstomPagination setPage={setPage}/>
    </div>
  );
};

export default Trending;
