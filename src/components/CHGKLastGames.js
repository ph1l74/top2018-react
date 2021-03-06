import React, { Component } from 'react';
import LoadingDiv from './LoadingDiv';
import './CHGKLastGames.css'

class CHGKLastGames extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            games: [],
        };
    }

    componentDidMount() {
        fetch("https://mantissa-rating.herokuapp.com/tournaments")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        games: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, games } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <LoadingDiv />;
        } else {
            return (
                <div>
                    {games.slice(0, 5).map((game, index) => (
                        <div className='chgk-game' key={index}>
                            {game}
                        </div>
                    ))}
                </div>

            )
        }
    }
}

export default CHGKLastGames;