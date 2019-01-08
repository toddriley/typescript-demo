const GIPHY_API_KEY = "YOUR_API_KEY_GOES_HERE";

export const getGif = id => {
  return new Promise((resolve, reject) => {
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
      .then(json => {
        resolve(json.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
