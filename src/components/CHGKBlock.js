import React, { Component } from 'react';
import CHGKRatingChart from './CHGKRatingChart';
import CHGKLastGames from './CHGKLastGames';

// http://rating.chgk.info/api/players/1683/rating.json

class CHGKBlock extends Component {

    render() {
        return (
            <section className="hero is-info is-bold">
                <a id="chgk"></a>
                <div className="hero-body">
                    <div className="container">
                        <h1 className='title is-2 wow fadeInDown' data-wow-iteration="1" data-wow-offset="80" data-wow-duration="0.5s">ЧГК</h1>
                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <p className="title is-4">Рейтинг</p>
                                    <CHGKRatingChart/>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <p className="title is-4">Последние игры</p>
                                    <CHGKLastGames />
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default CHGKBlock;



