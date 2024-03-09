import TopStrip from "./TopStrip";
import SearchCont from "./SearchCont";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { useAppContext } from "../../../contexts/AppContext";

const Header = () => {
  const { openSearch, setOpenSearch } = useAppContext();

  const [openMenu, setOpenMenu] = useState(false);
  function handleMenu() {
    setOpenMenu((prev) => !prev);
  }

  const [showList, setShowList] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowList(true);
    }, 600);
  }, [openSearch]);

  function toggleSearch() {
    setShowList(false);
    setOpenSearch((prev) => !prev);
  }

  return (
    <div className="relative w-full">
      <TopStrip />

      {/* <SearchCont handleMenu={handleMenu} toggleSearch={toggleSearch} /> */}

      <Nav handleMenu={handleMenu} />

      {openMenu && <Dropdown handleMenu={handleMenu} />}

      {/* {openSearch && (
        <SearchTray toggleSearch={toggleSearch} showList={showList} />
      )} */}
    </div>
  );
};

export default Header;
