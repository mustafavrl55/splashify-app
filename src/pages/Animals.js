/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { FotoContext } from "../context/FotoContext";

const Animals = () => {
  const {photos, setPhotos } = useContext(FotoContext)

  const url =
    "https://api.unsplash.com/search/photos?page=1&per_page=30&query=Animals&client_id=NYSAMbpU6_alpTdQJvorIwPVZMhfPjfgNTbsLoNk0RE";

  const options = {
    method: "GET",
  };

  const getData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setPhotos(result.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDownload = (item) => {
    // Dosya URL'si veya verisi
    const fileUrl = item.links.download;

    // Dosya indirme işlemi
    const downloadWindow = window.open(fileUrl, "_blank");
    if (!downloadWindow) {
      console.error("Popup blocked. Please allow popups for this site.");
    }
  };

  return (
    <div className="selection">
      <div className="my-masonry-grid">
        {photos.map((item) => (
          <div className="my-masonry-grid_column">
            <div className="imageItem">
              <img src={item?.urls?.regular} alt="" />
              <div className="info">
                <h5 className="name">{item?.user?.name} </h5>
                <div className="info-content">
                  <p>
                    {item?.likes}
                    <FavoriteBorderIcon />
                  </p>
                  <ArrowDownwardIcon onClick={() => handleDownload(item)} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animals ;
