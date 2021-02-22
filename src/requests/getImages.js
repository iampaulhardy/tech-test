import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        let imageResults = response.data.collection.items;
        let parsedImages = imageResults.filter((element) =>
          element.data.some((subElement) => subElement.media_type === "image")
        );
        let images = parsedImages.map((image) => {
          return image.links[0].href;
        });
        console.log(images);
        return images
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;
