import React, { Component } from 'react';
import './MusicTopTracks.css';
import LoadingDiv from './LoadingDiv';

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
        // debugger;
        fetch("http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=ph1l74&period=12month&api_key=7f6a86c5dc710c6e2e6aa4d9066e4c14&format=json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        tracks: result.toptracks.track
                    });
                    // console.log(result.toptracks.track[0].image[2]['#text']);
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
        const { error, isLoaded, tracks } = this.state;
        // console.log(tracks[0].image);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <LoadingDiv />;
        } else {
            return (
                <div className="top-tracks-container">
                    {tracks.slice(0, 10).map(item => (
                        <div className="top-tracks-item">
                            <div className="top-tracks-item-cover-div">
                                <img
                                    alt="Poster"
                                    src={item.image[2]['#text']}
                                    className="top-tracks-item-cover-img"
                                    onError={
                                        (e) => {
                                            e.target.onerror = null;
                                            e.target.src = "nocover.jpg"
                                        }
                                    } />
                            </div>
                            <div className="top-tracks-playcount">
                                {item.playcount}
                            </div>
                            <div className="top-tracks-item-info">
                                <div className="top-tracks-item-name">
                                    <p className="title is-5">{item.name}</p>
                                </div>
                                <div className="top-tracks-item-name">
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

export default MusicTopTracks;