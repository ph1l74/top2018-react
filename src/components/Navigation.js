import React, { Component } from 'react';

class Navigation extends Component {
    render() {

        const links = this.props.links.map((link) => 
            <li><a href={link.href}>{link.title}</a></li>
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

export default Navigation;