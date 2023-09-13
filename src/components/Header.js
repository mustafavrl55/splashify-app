import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MySelectComponent from "../icon";
import { Link } from "react-router-dom";
import { FotoContext } from "../context/FotoContext";
import ClearIcon from '@mui/icons-material/Clear';
import { getDataPhotos } from "./Selection";

const Header = () => {

  const {photos, setPhotos } = useContext(FotoContext)

  

  const handleFilter = (event) =>  {
        
    const textValue = event.target.value;
    filterText(textValue)
    setInputValue(textValue)
}
const filterText = (textValue) => {
    const filteredData = photos.filter((item) =>  item?.user?.name.toLowerCase().includes(textValue.toLowerCase()) )
    setPhotos(filteredData)
}

const [titlePhotos, setTitlePhotos] = useState("");

const url =
"https://api.unsplash.com/photos/random?client_id=NYSAMbpU6_alpTdQJvorIwPVZMhfPjfgNTbsLoNk0RE";

const options = {
method: "GET",
};

const getData = async () => {
try {
  const response = await fetch(url, options);
  const result = await response.json();
  setTitlePhotos(result);
} catch (error) {
  console.error(error);
}
};

useEffect(() => {
getData();
}, []);

const [inputValue, setInputValue] = useState('');
console.log(inputValue)

const handleClear = () => {
   setInputValue("")
   getDataPhotos(setPhotos)
}



  return (
    <div className="header">
      <div className="title">
        <img
          src={titlePhotos?.urls?.raw}
          alt=""
        />
         <Link to="/">
            <span>Splashify</span>
        </Link>
        
      </div>
      <div className="nav-1">
        <Link to="/nature">
            <span>Nature</span>
        </Link>
        <Link to="/architecture">
        <span>Architecture</span>
        </Link>
        <Link to="/travel">
        <span>Travel</span>
        </Link>
      </div>
      <div className="input">
        <input type="text" value={inputValue} placeholder="Search high resolution images " onChange={handleFilter} />
        <SearchIcon id="search-button" />
        <ClearIcon id="clear-button" onClick={()=> handleClear()} />
      </div>
      <div className="nav-2">
        <Link to="/food">
            <span>Food</span>
        </Link>
        <Link to="/animals">
            <span>Animals</span>
        </Link>
        <Link to="/technology">
        <span>Technology</span>
        </Link>
      </div>
      <MySelectComponent />
    </div>
  );
};

export default Header;
