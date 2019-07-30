import React, { Component } from 'react';
import CandyCard from './CandyCard';
import './candy.css'

export default class CandyList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="candy-list">
                    {
                        this.props.candies.map(candy => (
                            <CandyCard key={candy.id}
                                candy={candy}
                                candyTypes={this.props.candyTypes}
                                delete={this.props.delete} />
                        ))
                    }

                </div>
            </React.Fragment>
        )
    }
}