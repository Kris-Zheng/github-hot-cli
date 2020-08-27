import React, { useEffect, useState } from "react";

const LazyImg = ({ src, style, width, height, defaultSrc }) => {
  const [lazySrc, setLazySrc] = useState(
    defaultSrc ||
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=16980857,3179427414&fm=26&gp=0.jpg"
  );
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.addEventListener("load", () => {
      setLazySrc(src);
    });
  }, []);
  return (
    <img src={lazySrc} alt="" width={width} height={height} style={style} />
  );
};

export default LazyImg;
