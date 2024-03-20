export interface IMovie {
  kinopoiskId: number;
  nameRu: string;
  ratingKinopoisk?: number;
  ratingImdb?: number;
  posterUrl: string;
  posterUrlPreview: string;
  year: number;
}

export interface IMovieOne extends IMovie {
  description: string;
  countries: {country: string}[];
  genres: {genre: string}[];
}