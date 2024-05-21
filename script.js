const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Какой последний фильм вы посмотрели?', ''),
      b = +prompt('На сколько баллов вы его оцениваете?', ''),
      c = prompt('Какой последний фильм вы посмотрели?', ''),
      d = +prompt('На сколько баллов вы его оцениваете?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);