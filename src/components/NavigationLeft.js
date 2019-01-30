import React, { Component } from 'react';
import './NavigationLeft.css';

export default class NavigationLeft extends Component {

    constructor(props) {
        super(props)
        this.state = {
            position: 0
        }
    }

    componentDidMount() {
        this.setState({ position: (document.getElementById('header').clientHeight)+40 });
        window.onscroll = () => {
            if (window.scrollY > this.state.position) {
                if (document.getElementById('navigation-left').classList.contains('hidden')) {
                    document.getElementById('navigation-left').classList.remove('hidden');
                    document.getElementById('navigation-left').classList.add('fixed');
                }
            }
            else if(window.scrollY < this.state.position-40) {
                if (document.getElementById('navigation-left').classList.contains('fixed')) {
                    document.getElementById('navigation-left').classList.remove('fixed');
                    document.getElementById('navigation-left').classList.add('hidden');
                }
            }
        }

    }
    render() {

        const links = this.props.links.map((link) =>
            <li><a href={link.href}>{link.icon}</a></li>
        )

        return (
            <div id="navigation-left" className="hidden">
                <ul>
                    <li><a href="#top"><i class="fas fa-arrow-up"></i></a></li>
                    {links}
                </ul>
            </div>
        );
    }
}