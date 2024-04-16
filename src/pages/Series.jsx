import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../components/SingleContent";
import CunstomPagination from "../components/CunstomPagination";
import Genres from "../components/Genres";
import useGenre from "../hook/useGenre";

const Series = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOFPage, setNumOfPage] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const fetchSeries = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/tv?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreforURL}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      },
    };

    const { data } = await axios.request(options);
    setContent(data.results);
    setNumOfPage(data.total_pages);
    console.log(data);
  };

  useEffect(() => {
    fetchSeries();
  }, [page, genreforURL]);

  return (
    <div className="">
      <span className="uppercase flex justify-center font-mono text-3xl rounded-3xl p-1">
        Series
      </span>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        genres={genres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />
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
              vote_average,
            }) => (
              <SingleContent
                key={id}
                id={id}
                title={title || name}
                date={first_air_date || release_date}
                poster={poster_path}
                media_type="tv"
                vote_average={vote_average}
              />
            )
          )}
      </div>
      {numOFPage > 1 && (
        <CunstomPagination setPage={setPage} numOfPages={numOFPage} />
      )}
    </div>
  );
};

export default Series;
