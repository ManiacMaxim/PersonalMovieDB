
const personalMovieDB = {
    
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start() {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },

    rememberMyFilms() {
        if (personalMovieDB.count != 0 && personalMovieDB.count < 10 ){
            alert("Просмотрено довольно мало фильмов(");
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count <30) {
            alert("Вы классический зритель!");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман!");
        } else {
            alert("Error!");
        }
    },

    detectedPersonalLevel(){
        for (let i = 1; i <= 2; i++){
            const a = prompt('Какой последний фильм вы посмотрели?', ''),
                b = +prompt('На сколько баллов вы его оцениваете?', '');
        
            if (a != null && b != null && a !='' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                console.log('Error!');
                i--;
            }
        }
    },

    toggleVisibleMyDB() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } 
        else {
            personalMovieDB.privat = true;
        }
    },

    ShowMyDb(){
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB)
        }
    },

    writeYourGenres(){
        for (let i = 1; i<2; i++){
            
            let send = prompt(`Напишите через запятую свои любимые жанры` + '').toLowerCase();
                if (send === null || send === '') {
                    i--
                } else {
                    send.split(', ');
                    personalMovieDB.genres = send.split(', ')
                    personalMovieDB.genres.sort();
                }
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}`)
        });
    }
}


// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectedPersonalLevel();

// personalMovieDB.toggleVisibleMyDB()

// personalMovieDB.writeYourGenres();
