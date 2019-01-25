import React, { Component } from 'react';
import CHGKRatingChart from './CHGKRatingChart';

// http://rating.chgk.info/api/players/1683/rating.json


class CHGKBlock extends Component {

    render() {
        return (
            <section className="hero is-medium is-info is-bold">
                <a id="chgk"></a>
                <div class="hero-body">
                    <div class="container">
                        <h1 className='title is-2'>ЧГК</h1>
                        <div class="tile is-ancestor">
                            <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <p className="title is-4">Рейтинг</p>
                                    <CHGKRatingChart />
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <p className="title is-4">Последние игры</p>
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



