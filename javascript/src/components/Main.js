import React from "react";

const Main = props => {
  const gifs = [];
  let totalSize = 0;
  if (props.selectedId && props.idsToData[props.selectedId]) {
    for (const gif of props.idsToData[props.selectedId]) {
      if (props.isOriginal) {
        const gifSize = gif.images.original.size;
        gifs.push({
          ...gif.images.original,
          key: gifSize + "o"
        });
        totalSize += gifSize;
      }
      if (props.isDownsized) {
        const gifSize = gif.images.downsized.size;
        gifs.push({
          ...gif.images.downsized,
          key: gifSize + "d"
        });
        totalSize += gifSize;
      }
      if (props.isHd) {
        const gifSize = gif.images.hd.size;
        gifs.push({ ...gif.images.hd, key: gifSize + "hd" });
        totalSize += gifSize;
      }
    }
  }
  return (
    <div className="main">
      <h1>Total size: {totalSize}</h1>
      {gifs.map(gif => {
        return (
          <div key={gif.key}>
            <img src={gif.url} alt={gif.url} />
            <p>{gif.size}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
