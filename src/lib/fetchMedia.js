function getConfigData() {
  let configData;

  if (localStorage.getItem("image_base_url")) {
    return;
  }

  const url =
    "https://api.themoviedb.org/3/configuration?api_key=" + process.env.REACT_APP_TMDB_API_KEY;

  fetch(url)
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then(data => {
      configData = data;

      localStorage.setItem("image_base_url", configData.images.base_url);
      localStorage.setItem("poster_size", "w185");
    });
}

export function fetchMedia(searchTerm, media_type) {
  let urlString = "";

  getConfigData();

  if (searchTerm) {
    urlString =
      "https://api.themoviedb.org/3/search/multi?api_key=" + process.env.REACT_APP_TMDB_API_KEY + "&language=en-US&page=1&include_adult=false&query=" +
      searchTerm;
  } else {
    urlString =
      "https://api.themoviedb.org/3/" +
      media_type +
      "/popular?api_key=" + process.env.REACT_APP_TMDB_API_KEY;
  }

  return fetch(urlString).then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  });
}
