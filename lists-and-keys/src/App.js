import logo from './logo.svg';
import './App.css';
import React from 'react';
import MoviesList from './MoviesList';

const moviesData = [
  { 'hasOscars': false, 'title': 'The Shawshank Redemption', 'director': 'Frank Darabont', 'rate': '9.3', 'id': 0 },
  { 'hasOscars': true, 'title': 'The Godfather', 'director': 'Francis Ford Coppola', 'rate': '9.2', 'id': 1 },
  { 'hasOscars': true, 'title': 'The Godfather: Part II', 'director': 'Francis Ford Coppola', 'rate': '9.0', 'id': 2 },
  { 'hasOscars': true, 'title': 'The Dark Knight', 'director': 'Christopher Nolan', 'rate': '9.0', 'id': 3 },
  { 'hasOscars': false, 'title': '12 Angry Men', 'director': 'Sidney Lumet', 'rate': '8.9', 'id': 4 }
];

class App extends React.Component {

  state = {
    movies: moviesData
  }

  addMovie = () => {
    const newMovie = { 'hasOscars': true, 'title': 'Interstellar', 'director': 'Christopher Nolan', 'rate': '8.6', 'id': 31 };
    // create a copy, push newMovie and assign the copy to the state
    // const newMoviesList = this.state.movies.slice();
    // newMoviesList.push(newMovie);
    this.setState((state, props) => ({
      movies: state.movies.concat(newMovie)
      // movies: newMovieList
    }))
  }

  render() {
    // const moviesList = this.state.movies.map(movie => (<li key={movie.id}>{movie.title}</li>))
    return (
      <div className="App">
        <h1>Movies</h1>
        <button onClick={this.addMovie}>Add a movie</button>
        {/* <ul>
          {moviesList}
        </ul> */}
        {/* // if there are no movies in the state display a message */}
        {this.state.movies.length === 0 && <h2>No movies to display</h2>}
        <MoviesList movies={this.state.movies} />

      </div>
    )
  }
}

export default App;
