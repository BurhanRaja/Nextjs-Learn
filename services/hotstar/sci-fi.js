import movieURL from "../../utils/hotstarDisney/movieURL";
import tvURL from "../../utils/hotstarDisney/tvURL";

export const getScifiMovies = async () => {
  const responseMovies = await fetch(
    movieURL("release_date.desc", "878", "", "en", "122")
  );

  let scifiMovies = await responseMovies.json();

  scifiMovies = scifiMovies.results;

  let allSciFiMovies = [];

  for (let i = 0; i < 8; i++) {
    if (scifiMovies[i] !== undefined) {
      allSciFiMovies.push(scifiMovies[i]);
    }
  }

  return allSciFiMovies;
};

export const getScifiShows = async () => {
  const responseShows = await fetch(
    tvURL("release_date.desc", "10765", "", "en", "122")
  );

  let scifiShows = await responseShows.json();

  scifiShows = scifiShows.results;

  let allSciFiShows = [];

  for (let i = 0; i < 8; i++) {
    if (scifiShows !== undefined) {
      allSciFiShows.push(scifiShows[i]);
    }
  }

  return allSciFiShows;
};
