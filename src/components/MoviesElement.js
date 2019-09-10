import React, { Component } from 'react';
import LoadingDiv from './LoadingDiv';
import './MoviesElement.css';
// import '../music-note.svg';

class MoviesElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            movie: {}
        };
    }

    componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=157b48b5&i=" + this.props.tt)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        movie: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, movie } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <LoadingDiv />;
        } else {
            return (

                <div className="movies-element">
                    <figure className="image is-2by3 movies-figure" style={{backgroundImage : 'url(' + movie.Poster + ')'}}>
                        {/* <img alt={movie.Title}></img> */}
                        <div className="movies-element-info">
                            <div className="movies-element-info-title">{movie.Title}</div>
                            <div className="movies-element-info-year">({movie.Year})</div>
                            <div className="movies-element-info-rating">
                                <i className="fas fa-star"></i> {this.props.rating}/10
                        </div>
                        </div>
                    </figure>
                </div>
            );
        }
    }
}

export default MoviesElement;