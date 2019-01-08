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
    const api_key = "FmXifh05pC4El6o7XNyCHmiUvwX8Q6Y8";
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
