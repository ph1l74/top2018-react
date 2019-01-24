import React, { Component } from 'react';
import TileChild from '../components/TileChild';


class Tile extends Component {
    render() {
        return (
            <div class="tile is-ancestor">
                <TileChild title={this.props.title}/>
            </div>
        );
    }
}

export default Tile;



