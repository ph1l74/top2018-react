import React, { Component } from 'react';
import WOW from 'wowjs';


export default class MusicTopAlbumsElement extends Component {

    // componentDidMount() {
    //     new WOW.WOW().init();
    // }

    render() {
        return (
            <div className="top-albums-item wow fadeInDown"
                data-wow-iteration="1"
                data-wow-duration="0.5s"
                data-wow-delay={this.props.index * 0.1 + `s`}
                key={this.props.key}>
                <div className="top-albums-item-cover-div">
                    <img
                        alt="Poster"
                        src={this.props.imgURL}
                        className="top-albums-item-cover-img"
                        onError={
                            (e) => {
                                e.target.onerror = null;
                                e.target.src = "nocover.jpg"
                            }
                        } />
                </div>
                <div className="top-albums-playcount">
                    {this.props.playcount}
                </div>
                <div className="top-albums-item-info">
                    <div className="top-albums-item-name">
                        <p className="title is-5">{this.props.name}</p>
                    </div>
                    <div className="top-albums-item-name">
                        {this.props.artistName}
                    </div>
                </div>

            </div>
        )

    }
}