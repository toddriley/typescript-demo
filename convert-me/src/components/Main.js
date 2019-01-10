/**
 * For a deep dive into module resolution see https://www.typescriptlang.org/docs/handbook/modules.html
 * tl;dr: replace the import statement with `import * as React from "react"`
 */
import React from "react";

/**
 *
 * props.idsToData is an object where the key is the id and the value is the Gif data object e.g.
 *
 * const idsToData = {
 *   "idNumber1": {
 *     ...gif1
 *   },
 *   "idNumber2": {
 *     ...gif1
 *   },
 *   ...etc
 * }
 *
 *  Access a gif's data by it's id by calling `props.idsToData[gifId]`
 */

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
