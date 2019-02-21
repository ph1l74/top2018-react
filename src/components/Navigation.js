import React, { Component } from 'react';

export default class Navigation extends Component {

    render() {

        const links = this.props.links.map((link, index) =>
            <li key={index}><a href={link.href}>{link.title}</a></li>
        )

        return (
            <section>
                <div className="tabs is-centered">
                    <ul>
                        {links}
                    </ul>
                </div>
            </section>
        );
    }
}
