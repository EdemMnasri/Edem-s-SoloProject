            /* Array of objects(Movies) */
const movies = [
    { title: 'Mission: Impossible', genre: 'action', actors: ['Tom Cruise'], duration: 140 },
    { title: 'Die Hard', genre: 'action', actors: ['Bruce Willis'], duration: 130 },
    { title: 'Mad Max: Fury Road', genre: 'action', actors: ['Tom Hardy', 'Charlize Theron'], duration: 120 },
    { title: 'The Dark Knight', genre: 'action', actors: ['Christian Bale', 'Heath Ledger'], duration: 150},
    { title: 'Inception', genre: 'science fiction', actors: ['Leonardo DiCaprio', 'Ellen Page'], duration: 140},
    { title: 'The Avengers', genre: 'action', actors: ['Robert Downey Jr.', 'Scarlett Johansson'], duration: 140 },
    { title: 'Jurassic Park', genre: 'adventure', actors: ['Sam Neill', 'Laura Dern'], duration: 120},
    { title: 'The Shawshank Redemption', genre: 'drama', actors: ['Tim Robbins', 'Morgan Freeman'], duration: 140 },
    { title: 'Titanic', genre: 'romance', actors: ['Leonardo DiCaprio', 'Kate Winslet'], duration: 190},
    { title: 'The Matrix', genre: 'science fiction', actors: ['Keanu Reeves', 'Carrie-Anne Moss'], duration: 130 },
    { title: 'Pulp Fiction', genre: 'crime', actors: ['John Travolta', 'Samuel L. Jackson'], duration: 150 },
    { title: 'Forrest Gump', genre: 'drama', actors: ['Tom Hanks', 'Robin Wright'], duration: 140 },
    { title: 'The Lord of the Rings', genre: 'fantasy', actors: ['Elijah Wood', 'Ian McKellen'], duration: 170 },
    { title: 'La La Land', genre: 'musical', actors: ['Ryan Gosling', 'Emma Stone'], duration: 120 },


];
     /* Store the user input inside our variables using the "Get recommendation buttton"  */

     function recommendMovie() {
    const selectedGenre = document.getElementById('genre').value;
    const selectedActors = Array.from(document.getElementById('actors').selectedOptions).map(option => option.value);
    const selectedDuration = document.getElementById('duration').valueAsNumber;
  
     /* Creating a new array filteredMovies */
    /* filtering the inputs with the array of objects(Movies.genre,Movie.actor)   */
   /* Creating a range of duration (10 - Inputed Duration + 10)  */
    const filteredMovies = movies.filter(movie =>
        movie.genre === selectedGenre &&
        movie.actors.some(actor => selectedActors.includes(actor)) &&
        movie.duration <= selectedDuration + 10 && 
        movie.duration >= selectedDuration - 10
    );

    displayRecommendation(filteredMovies);
}

/* Getting the recommendation div by its id which is "recommendation"  */
/* Cheking if there is no match and return a message  */


function displayRecommendation(movies) {
    const recommendationDiv = document.getElementById('recommendation');
    recommendationDiv.innerHTML = '';

    if (movies.length === 0) {
        recommendationDiv.innerHTML = '<p>No matching movies found.</p>';
        return;
    }

/* Iterating through the array of movies */
    /* Creating a list item for eah movie  */
    /* Appending the list item to ul (another unordered list)  */
  
  
    const ul = document.createElement('ul');
    movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = `${movie.title} (${movie.duration} min)`;
        ul.appendChild(li);
    });


/* Appending the entire ul to the recommendation div  */
    recommendationDiv.appendChild(ul);
}

/* Updating the duration value   */

document.getElementById('duration').addEventListener('input', function () {
    document.getElementById('durationValue').textContent = `${this.value} min`;
});