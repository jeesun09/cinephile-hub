import { Chip } from "@mui/material";
import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  type,
  selectedGenres,
  genres,
  setGenres,
  setSelectedGenres,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((select) => select.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/genre/${type}/list?language=en`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      },
    };
    const { data } = await axios.request(options);
    console.log(data.genres);
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div className="py-[6px]">
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            style={{ margin: 3 }}
            clickable
            size="small"
            color="primary"
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            style={{ margin: 3 }}
            clickable
            size="small"
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
