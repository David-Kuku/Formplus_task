import React, { Component } from 'react'
import './Tada.css'

export default class Tada extends Component {
    render() {
        return (
            <div className="container" >
                <i className="fa fa-info-circle icon" ></i>
                <p className="text" data-testid="info"><i className="fa fa-info-circle icon_small" ></i>Tada! Get started with a free template. Can't find what you are looking for? 
                    Search from the 1000+ available templates
                </p>
            </div>
        )
    }
}
