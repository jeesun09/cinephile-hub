import React from "react";

const Header = () => {
  return (
    <div className="w-full text-4xl fixed top-0 text-center py-3 bg-[#9BCF53] z-50">
      <h1
        className="cursor-pointer"
        onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
      >
        Cinephile Hub
      </h1>
    </div>
  );
};

export default Header;
