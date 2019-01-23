import React, { Component } from 'react';

class Hero extends Component {

    render() {
        let size, color, bold;

        if (this.props.size) { size = 'is-' + this.props.size };
        if (this.props.color) { color = 'is-' + this.props.color };
        if (this.props.bold) { bold = 'is-' + this.props.bold };

        return (
            <section className={`hero ${size} ${color} ${bold} `}>
                <a id={this.props.anchor}></a>
                <div class="hero-body">
                    <div class="container">
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