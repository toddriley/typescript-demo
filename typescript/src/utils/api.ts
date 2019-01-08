const GIPHY_API_KEY = "YOUR_API_KEY_GOES_HERE";

/**
 * In this example `response.data.images.hd` is an optional object.
 * We know that this object is sometimes undefined in the data
 * returned by the API. We don't do it in this example, but it is
 * often a good idea to make every field of every object on a JSON
 * API response optional in our type definitions. This will ensure
 * that our front-end code will not crash if the server returns
 * undefined when we expected an object.
 */
interface ApiResponse {
  data: ApiData[];
  // There are other fields we don't care about for this example
}

export interface ApiData {
  images: {
    original: ApiImage;
    downsized: ApiImage;
    hd?: ApiImage;
    // There are other fields we don't care about for this example
  };
  // There are other fields we don't care about for this example
}

interface ApiImage {
  url?: string;
  width?: string;
  height?: string;
  size?: string;
  // There are other fields we don't care about for this example
}

export const getGif = (id: string): Promise<ApiData[]> => {
  // Promise is a generic type.
  return new Promise<ApiData[]>((resolve, reject) => {
    const api_key = GIPHY_API_KEY;
    const endpoint = `https://api.giphy.com/v1/gifs?api_key=${api_key}
	&ids=${id}`;
    const options = {
      method: "GET",
      headers: {
        Accept: "image/*"
      }
    };
    fetch(endpoint, options)
      .then(res => {
        return res.json();
      })
      .then((json: ApiResponse) => {
        // TypeScript assumes json type is any here unless we specify it explicitly as ApiResponse
        resolve(json.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
