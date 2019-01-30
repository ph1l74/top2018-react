import React, { Component } from 'react';

class Hero extends Component {

    render() {
        return (
            <section id={this.props.id} className='hero is-bold'>
                <a id={this.props.anchor}></a>
                <div className="hero-body">
                    <div className="container">
                        <h1 className='title is-1'>
                            {this.props.title}
                        </h1>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;