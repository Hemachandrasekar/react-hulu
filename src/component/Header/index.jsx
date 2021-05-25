import React from "react";
import {
  HomeIcon,
  LightningBoltIcon,
  CollectionIcon,
  BadgeCheckIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItems from "../HeaderItems";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col mb-5 items-center justify-between sm:flex-row h-auto">
      <div className="flex pt-3 m-5">
        <HeaderItems title="HOME" Icon={HomeIcon} />
        <HeaderItems title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItems title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItems title="SEARCH" Icon={SearchIcon} />
        <HeaderItems title="ACTION" Icon={UserIcon} />
      </div>
      <div className=" flex items-center mr-5 -mt-3">
        <img src={logo} alt="logo" width="100" height="100" />
      </div>
    </div>
  );
};

export default Header;
