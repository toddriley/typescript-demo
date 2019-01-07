import * as React from "react";
import { ApiData } from "../utils/api";

interface MainProps {
  isOriginal: boolean;
  isHd: boolean;
  isDownsized: boolean;
  selectedId: string;
  idsToData: { [key: string]: ApiData[] };
}

const Main = (props: MainProps) => {
  const gifs = [];
  let totalSize = 0;
  if (props.selectedId && props.idsToData[props.selectedId]) {
    for (const gif of props.idsToData[props.selectedId]) {
      if (props.isOriginal) {
        const { size } = gif.images.original;
        const gifSize = size ? parseInt(size) : 0;
        gifs.push({
          ...gif.images.original,
          key: gifSize + "o"
        });
        totalSize += gifSize;
      }
      if (props.isDownsized) {
        const { size } = gif.images.downsized;
        const gifSize = size ? parseInt(size) : 0;
        gifs.push({
          ...gif.images.downsized,
          key: gifSize + "d"
        });
        totalSize += gifSize;
      }
      if (props.isHd && gif.images.hd) {
        const { size } = gif.images.hd;
        const gifSize = size ? parseInt(size) : 0;
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
