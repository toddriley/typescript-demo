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
