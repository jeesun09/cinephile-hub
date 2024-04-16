import React from 'react'
import { img_300, unavailable } from '../config/config'
import { Badge } from '@mui/material';

const SingleContent = ({ id, title, date, poster, media_type, vote_average }) => {
  return (
    <div className="flex flex-col w-[220px] p-[5px] my-[5px] bg-[#282c34] text-white border rounded-lg font-serif hover:bg-white hover:text-black hover:border-black">
      <Badge badgeContent={Number(vote_average).toFixed(1)} color={vote_average>6 ? 'primary': 'secondary'} className=''/>
      <img
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
        className="rounded-lg"
      />
      <b className="w-full text-center text-base py-2">{title}</b>
      <div className="flex justify-between px-[2px] pb-1">
        <span className="">
          {media_type === "tv" ? "TV Series" : "Movie"}
        </span>
        <span className="">{date}</span>
      </div>
    </div>
  );
};

export default SingleContent