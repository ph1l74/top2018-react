import React, { Component } from 'react';
import TravelMap from './TravelMap';
import './TravelBlock.css';
import WOW from 'wowjs';

export default class TravelBlock extends Component {

    // componentDidMount() {
    //     new WOW.WOW().init();
    // }

    render() {
        return (
            <section className="hero is-primary is-bold">
                <a id="travel"></a>
                <div className="hero-body">
                    <div className="container">
                        <h1 className='title is-2 wow fadeInDown' data-wow-iteration="1" data-wow-offset="80" data-wow-duration="0.5s">Путешествия</h1>
                        <div className="travel-map-container">
                            <TravelMap width="1200" height="500" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}