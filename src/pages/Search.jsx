import { Button, Tab, Tabs, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SingleContent from "../components/SingleContent";
import CunstomPagination from "../components/CunstomPagination";
import axios from "axios";

const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchSearch = async () => {
    try {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/search/${
          type ? `tv` : `movie`
        }?query=${searchText}&include_adult=true&language=en-US&page=1`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
      };

      const { data } = await axios.request(options);
      console.log(data);
      setContent(data.results);
      setNumOfPages(data.total_pages);
      
    } catch (error) {
      console.log("Error is: ", error);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [type, page])

  return (
    <div className="w-full">
      <div className="flex my-4 justify-center gap-4">
        <TextField
          className="w-1/2"
          label="Search"
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button variant="contained" className="ml-10" onClick={fetchSearch}>
          <SearchIcon />
        </Button>
      </div>

      <div className="flex flex-row justify-center">
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          className="flex justify-center pb-3 w-1/2"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
        >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search TV Series" />
        </Tabs>
      </div>

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
                media_type={type ? "tv" : "movie"}
                vote_average={vote_average}
              />
            )
          )}
      </div>
      {numOfPages > 1 && (
        <CunstomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
