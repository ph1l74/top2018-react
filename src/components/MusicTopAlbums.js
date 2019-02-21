import React, { Component } from 'react';
import './MusicTopAlbums.css';
import LoadingDiv from './LoadingDiv';
import MusicTopAlbumsElement from './MusicTopAlbumsElement';

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
        fetch("https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=ph1l74&period=12month&api_key=7f6a86c5dc710c6e2e6aa4d9066e4c14&format=json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        albums: result.topalbums.album
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
        const { error, isLoaded, albums } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <LoadingDiv />;
        } else {
            return (
                <div className="top-albums-container">
                    {albums.slice(0, 10).map((item, index) => (
                        <MusicTopAlbumsElement
                            key={index}
                            imgURL={item.image[2]['#text']}
                            playcount={item.playcount}
                            name={item.name}
                            artistName={item.artist.name}
                            index={index}
                        />
                    ))}
                </div>
            );
        }
    }
}

export default MusicTopAlbums;