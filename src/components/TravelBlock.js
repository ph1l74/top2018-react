import React from 'react';
import TravelMap from './TravelMap';
import './TravelBlock.css';

const TravelBlock = () => {
    return (
        <section className="hero is-medium is-primary is-bold">
            <a id="travel"></a>
            <div className="hero-body">
                <div className="container">
                    <h1 className='title is-1'>Путешествия</h1>
                    <div className="travel-map-container">
                        <TravelMap width="1200" height="500" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TravelBlock;