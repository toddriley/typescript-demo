export const getGif = id => {
  return new Promise((resolve, reject) => {
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
      .then(json => {
        console.log(json.data);
        resolve(json.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
