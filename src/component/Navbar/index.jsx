import { React } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuList = [
    { menu: "Trending", menulink: "/trending" },
    { menu: "Top Rated", menulink: "/top_rated" },
    { menu: "Action", menulink: "/action" },
    { menu: "Comedy", menulink: "/comedy" },
    { menu: "Horror", menulink: "/horror" },

    // "Romance",
    // "Mystery",
    // "Sci-Fi",
    // "Western",
    // "Animation",
    // "Tv Movie",
  ];

  return (
    <div className="flex px-20 pr-24 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
      {menuList.map((item, index) => {
        return (
          <h2 className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">
            <Link to={item.menulink}>{item.menu}</Link>
          </h2>
        );
      })}
    </div>
  );
};

export default Navbar;
