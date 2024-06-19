
let numberOfFilms;


function start(){
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
    
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    if (personalMovieDB.count != 0 && personalMovieDB.count < 10 ){
        alert("Просмотрено довольно мало фильмов(");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <30) {
        alert("Вы классический зритель!");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман!");
    } else {
        alert("Error!");
    }
}

// rememberMyFilms();


function detectedPersonalLevel(){
    for (let i = 1; i <= 3; i++){
        const a = prompt('Какой последний фильм вы посмотрели?', ''),
            b = +prompt('На сколько баллов вы его оцениваете?', '');
    
        if (a != null && b != null && a !='' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            console.log('Error!');
            i--;
        }
    }
}

// detectedPersonalLevel();

function ShowMyDb(hidden){
    // if (personalMovieDB.privat== false) {
    //     console.log(personalMovieDB)
    // }
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}

ShowMyDb(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i<=3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i} ` + '')
    }
}

writeYourGenres();











// let i = 0;
// while(i < 2){
//     const a = prompt('Какой последний фильм вы посмотрели?', ''),
//         b = +prompt('На сколько баллов вы его оцениваете?', '');

//     if (a != null && b != null && a !='' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         console.log('Error!');
//         i--;
//     }
//     i++;
// }

// let i = 0;
// do {
//     const a = prompt('Какой последний фильм вы посмотрели?', ''),
//         b = +prompt('На сколько баллов вы его оцениваете?', '');

//     if (a != null && b != null && a !='' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         console.log('Error!');
//         i--;
//     }
//     i++;
// } while (i < 2)


// console.log(personalMovieDB)