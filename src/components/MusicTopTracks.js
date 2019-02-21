import React, { Component } from 'react';
import './MusicTopTracks.css';
import LoadingDiv from './LoadingDiv';
import MusicTopTracksElement from './MusicTopTracksElement';


class MusicTopTracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            tracks: []
        };
    }

    const

    componentDidMount() {
        fetch("http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=ph1l74&period=12month&api_key=7f6a86c5dc710c6e2e6aa4d9066e4c14&format=json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        tracks: result.toptracks.track
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
        const { error, isLoaded, tracks } = this.state;
        // console.log(tracks[0].image);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <LoadingDiv />;
        } else {
            return (
                <div className="top-tracks-container">
                    {tracks.slice(0, 10).map((item, index) => (
                        <MusicTopTracksElement 
                            key={index}
                            index={index}
                            imgURL={item.image[2]['#text']}
                            playcount={item.playcount}
                            name = {item.name}
                            artistName = {item.artist.name}
                        />
                    ))}
                </div>
            );
        }
    }
}

export default MusicTopTracks;