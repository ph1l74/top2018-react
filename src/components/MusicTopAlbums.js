import React, { Component } from 'react';
import './MusicTopAlbums.css';
import LoadingDiv from './LoadingDiv';
// import '../music-note.svg';

class MusicTopAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            albums: []
        };
    }

    const

    componentDidMount() {
        // debugger;
        fetch("http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=ph1l74&period=12month&api_key=7f6a86c5dc710c6e2e6aa4d9066e4c14&format=json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        albums: result.topalbums.album
                    });
                    // console.log(result.topalbums.album[0].image[2]['#text']);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, albums } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <LoadingDiv />;
        } else {
            return (
                <div className="top-albums-container">
                    {albums.slice(0, 10).map(item => (
                        <div className="top-albums-item">
                            <div className="top-albums-item-cover-div">
                                <img
                                    alt="Poster"
                                    src={item.image[2]['#text']}
                                    className="top-albums-item-cover-img"
                                    onError={
                                        (e) => {
                                            e.target.onerror = null;
                                            e.target.src = "nocover.jpg"
                                        }
                                    } />
                            </div>
                            <div className="top-albums-playcount">
                                {item.playcount}
                            </div>
                            <div className="top-albums-item-info">
                                <div className="top-albums-item-name">
                                    <p className="title is-5">{item.name}</p>
                                </div>
                                <div className="top-albums-item-name">
                                    {item.artist.name}
                                </div>
                            </div>

                        </div>

                    ))}
                </div>
            );
        }
    }
}

export default MusicTopAlbums;