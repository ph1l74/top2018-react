import React, { Component } from 'react';
import LoadingDiv from './LoadingDiv';
// import './MusicBlock.css';

// http://rating.chgk.info/api/players/1683/rating/


class CHGKBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            ratings: {}
        };
    }


    // componentDidMount() {
    //     fetch("http://rating.chgk.info/api/players/1683/rating.json")
    //         .then(res => res.JSON())
    //         .then(
    //             (result) => {
    //                 console.log(result);
    //                 this.setState({
    //                     isLoaded: true,
    //                     ratings: result
    //                 });
    //             },
    //             (error) => {
    //                 console.log(error);
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    // }

    render() {
        // const { error, isLoaded, ratings } = this.state;
        // if (error) {
        //     return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //     return <LoadingDiv />;
        // } else {
        //     console.log(ratings);
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
    // }

}

export default CHGKBlock;



