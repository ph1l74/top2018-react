import React, { Component } from 'react';
import MoviesElement from './MoviesElement';
import './MoviesBlock.css';


// 157b48b5


class MoviesBlock extends Component {
    render() {
        return (
            <section className="hero is-medium is-dark is-bold">
                <a id="movies"></a>
                <div class="hero-body">
                    <div class="container">
                        <h1 className='title is-2'>Кино</h1>
                        <div className="movies-container">
                            <MoviesElement tt="tt0048261" rating="10" />
                            <MoviesElement tt="tt0078788" rating="9" />
                            <MoviesElement tt="tt0093754" rating="9" />
                            <MoviesElement tt="tt5742374" rating="8" />
                            <MoviesElement tt="tt5776858" rating="8" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MoviesBlock;



