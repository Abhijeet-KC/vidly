import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'

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
                
        
            </React.Fragment>
        )
    }
}
     
export default Movies;
