import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'
import './formovies.css';   // importing css file

class Movies extends Component {
   
    state = {
        movies: getMovies()
    };

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    };

    render(){
        return(
            <React.Fragment>
                <h1>Movies List</h1>
                <div className = "table-container">
                    <table border="0">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th>Removal Option</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.movies.map(movie => (
                                    <tr key = {movie._id} class = 'table-row'>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        <td>
                                            <button
                                                onClick = {() => this.handleDelete(movie)}
                                                className = "btn btn-danger"
                                            >Delete 
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}
     
export default Movies;
