import React, { Component } from 'react';
import MusicTopAlbums from './MusicTopAlbums';
import MusicTopTracks from './MusicTopTracks';
import './MusicBlock.css';

class MusicBlock extends Component {
    render() {
        return (
            <section className="hero is-medium is-danger is-bold">
                <a id="music"></a>
                <div className="hero-body">
                    <div className="container">
                        <h1 className='title is-2'>Музыка</h1>
                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <p className="title is-4">Самые прослушиваемые альбомы</p>
                                    <MusicTopAlbums />
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <p className="title is-4">Самые прослушиваемые треки</p>
                                    <MusicTopTracks  />
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MusicBlock;



