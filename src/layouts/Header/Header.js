import Navigations from "./Navigations/Navigations";
import Actions from "./Actions/Actions";
import { useState } from "react";
import SearchBox from "./SearchBox/SearchBox";

const Header = () => {
  const [searchClicked, setSearchClicked] = useState(false);

  const searchHandeler = () => {
    setSearchClicked(!searchClicked)
  }
  return (
    <div className="flex justify-between items-center h-[105px] w-full shadow py-4 px-6">
      {searchClicked ? <SearchBox/> : <Navigations />}
      
      <Actions onSearch={searchHandeler}/>
    </div>
  );
};

export default Header;
