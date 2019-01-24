import React, { Component } from 'react';

class TileChild extends Component {
    render() {
        let p = this.props.title;
        
        return (
            <div class="tile is-parent">
                <article class="tile is-child box">
                    {p}
                </article>
            </div>
        );
    }
}

export default TileChild;