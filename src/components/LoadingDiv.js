import React, { Component } from 'react';
import './LoadingDiv.css';

class LoadingDiv extends Component {
    render() {
        return (
            <div id="trackLoading" className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }
}

export default LoadingDiv;