import React, { Component } from 'react';
import WOW from 'wowjs';


export default class MusicTopTracksElement extends Component {

    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
        return (
            <div className="top-tracks-item wow fadeInDown"
                data-wow-iteration="1"
                data-wow-duration="0.5s"
                data-wow-delay={this.props.index * 0.05 + `s`}
                key={this.props.key}>
                <div className="top-tracks-item-cover-div">
                    <img
                        alt="Poster"
                        src={this.props.imgURL}
                        className="top-tracks-item-cover-img"
                        onError={
                            (e) => {
                                e.target.onerror = null;
                                e.target.src = "nocover.jpg"
                            }
                        } />
                </div>
                <div className="top-tracks-playcount">
                    {this.props.playcount}
                </div>
                <div className="top-tracks-item-info">
                    <div className="top-tracks-item-name">
                        <p className="title is-5">{this.props.name}</p>
                    </div>
                    <div className="top-tracks-item-name">
                        {this.props.artistName}
                    </div>
                </div>

            </div>

        )
    }
}