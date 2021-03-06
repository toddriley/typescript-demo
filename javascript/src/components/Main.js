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
    <main className="main">
      <div class="gif-wrapper">
        {gifs.map(gif => {
          return (
            <figure className="gif" key={gif.key}>
              <img src={gif.url} alt={gif.url} />
              <figcaption>
                <span>Size:</span> {gif.size}
              </figcaption>
            </figure>
          );
        })}
      </div>
      <div class="total-counter">
        <h2 className="total-counter__label">Total size:</h2>
        <span className="total-counter__value">{totalSize}</span>
      </div>
    </main>
  );
};

export default Main;
