import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

app.get("/random", (req, res) => {
  const idx = Math.floor(Math.random() * movies.length);
  res.json(movies[idx]);
});

app.get("/movies/:id", (req, res) => {
  const idx = parseInt(req.params.id);
  const movie = movies.find((movie) => idx === movie.id);
  res.json(movie);
});

app.get("/filter", (req, res) => {
  const genre = req.query.genre ? req.query.genre.toLowerCase() : null;
  const rating = req.query.rating ? parseFloat(req.query.rating) : null;
  const filteredMovies = movies.filter((movie) => {
    const genreMatch = genre ? movie.genre.toLowerCase() === genre : true;
    const ratingMatch = rating ? movie.rating === rating : true;
    return genreMatch && ratingMatch;
  });
  res.json(filteredMovies);
});

let movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "The Dark Knight", genre: "Action", rating: 9.0 },
  { id: 3, title: "Forrest Gump", genre: "Drama", rating: 8.8 },
  { id: 4, title: "The Godfather", genre: "Crime", rating: 9.2 },
  { id: 5, title: "Pulp Fiction", genre: "Crime", rating: 8.9 },
  { id: 6, title: "The Matrix", genre: "Sci-Fi", rating: 8.7 },
  { id: 7, title: "The Shawshank Redemption", genre: "Drama", rating: 9.3 },
  { id: 8, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
  { id: 9, title: "Gladiator", genre: "Action", rating: 8.5 },
  { id: 10, title: "Titanic", genre: "Romance", rating: 7.8 },
  { id: 11, title: "Avatar", genre: "Sci-Fi", rating: 7.8 },
  { id: 12, title: "Fight Club", genre: "Drama", rating: 8.8 },
  { id: 13, title: "The Lion King", genre: "Animation", rating: 8.5 },
  { id: 14, title: "Joker", genre: "Thriller", rating: 8.4 },
  { id: 15, title: "Avengers: Endgame", genre: "Action", rating: 8.4 },
  { id: 16, title: "The Silence of the Lambs", genre: "Thriller", rating: 8.6 },
  { id: 17, title: "The Green Mile", genre: "Drama", rating: 8.6 },
  { id: 18, title: "The Departed", genre: "Crime", rating: 8.5 },
  { id: 19, title: "Whiplash", genre: "Drama", rating: 8.5 },
  { id: 20, title: "The Prestige", genre: "Mystery", rating: 8.5 },
  { id: 21, title: "Django Unchained", genre: "Western", rating: 8.4 },
  { id: 22, title: "Schindler's List", genre: "History", rating: 9.0 },
  { id: 23, title: "The Grand Budapest Hotel", genre: "Comedy", rating: 8.1 },
  { id: 24, title: "Mad Max: Fury Road", genre: "Action", rating: 8.1 },
  { id: 25, title: "The Wolf of Wall Street", genre: "Biography", rating: 8.2 },
  { id: 26, title: "Blade Runner 2049", genre: "Sci-Fi", rating: 8.0 },
  { id: 27, title: "The Social Network", genre: "Drama", rating: 7.7 },
  {
    id: 28,
    title: "Spider-Man: Into the Spider-Verse",
    genre: "Animation",
    rating: 8.4,
  },
  { id: 29, title: "Parasite", genre: "Thriller", rating: 8.6 },
  { id: 30, title: "La La Land", genre: "Musical", rating: 8.0 },
  { id: 31, title: "Saving Private Ryan", genre: "War", rating: 8.6 },
  { id: 32, title: "The Truman Show", genre: "Drama", rating: 8.1 },
  { id: 33, title: "The Big Lebowski", genre: "Comedy", rating: 8.1 },
  { id: 34, title: "Shutter Island", genre: "Thriller", rating: 8.2 },
  { id: 35, title: "No Country for Old Men", genre: "Crime", rating: 8.1 },
  { id: 36, title: "The Revenant", genre: "Adventure", rating: 8.0 },
  { id: 37, title: "A Beautiful Mind", genre: "Biography", rating: 8.2 },
  { id: 38, title: "Black Swan", genre: "Thriller", rating: 8.0 },
  { id: 39, title: "The Pianist", genre: "History", rating: 8.5 },
  { id: 40, title: "The Irishman", genre: "Crime", rating: 7.9 },
  { id: 41, title: "Oldboy", genre: "Mystery", rating: 8.4 },
  { id: 42, title: "The Hateful Eight", genre: "Western", rating: 7.8 },
  { id: 43, title: "Logan", genre: "Action", rating: 8.1 },
  { id: 44, title: "John Wick", genre: "Action", rating: 7.4 },
  { id: 45, title: "The Conjuring", genre: "Horror", rating: 7.5 },
  { id: 46, title: "A Quiet Place", genre: "Horror", rating: 7.5 },
  { id: 47, title: "The Exorcist", genre: "Horror", rating: 8.0 },
  { id: 48, title: "It", genre: "Horror", rating: 7.3 },
  { id: 49, title: "Hereditary", genre: "Horror", rating: 7.3 },
  { id: 50, title: "Memento", genre: "Mystery", rating: 8.4 },
  { id: 51, title: "Se7en", genre: "Thriller", rating: 8.6 },
  { id: 52, title: "Goodfellas", genre: "Crime", rating: 8.7 },
  { id: 53, title: "The Usual Suspects", genre: "Mystery", rating: 8.5 },
  { id: 54, title: "The Sixth Sense", genre: "Thriller", rating: 8.1 },
  { id: 55, title: "2001: A Space Odyssey", genre: "Sci-Fi", rating: 8.3 },
  { id: 56, title: "Casablanca", genre: "Romance", rating: 8.5 },
  { id: 57, title: "Requiem for a Dream", genre: "Drama", rating: 8.3 },
  { id: 58, title: "The Thing", genre: "Horror", rating: 8.2 },
  { id: 59, title: "The Shining", genre: "Horror", rating: 8.4 },
  { id: 60, title: "The Lighthouse", genre: "Mystery", rating: 7.5 },
];
