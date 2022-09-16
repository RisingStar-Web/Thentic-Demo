import React from "react";
import { Link } from "react-router-dom";
import FavIcon from "../../assets/favicon.png";
const MenuItem = ({ to, name }) => {
  return (
    <Link className="text-white py-3 px-4 bg-[#2d323a5a]" to={to}>
      {name}
    </Link>
  );
};
export default function Header() {
  return (
    <div className="py-3 bg-[#181c1ffc] shadow-2xl shadow-gray-800 w-full">
      <div className="flex items-center  justify-between max-w-5xl m-auto">
        <div className="flex gap-4 items-center">
          <img
            alt="favicon"
            className="rounded-full"
            width={50}
            src={FavIcon}
          />
          <h1 className="text-white text-3xl font-semibold">thentic</h1>
        </div>
        <div className="flex gap-6">
          <MenuItem to="/create" name="Create" />
          <MenuItem to="/contracts" name="Contracts" />
          <MenuItem to="/nfts" name="NFTs" />
        </div>
      </div>
    </div>
  );
}
