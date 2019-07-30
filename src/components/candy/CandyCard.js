import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardTitle, CardFooter, Button } from 'reactstrap';

export default class CandyCard extends Component {
    render() {
        return (
            <Card className="candy-card">
                {
                    this.props.candyTypes
                        .filter(type => type.id === this.props.candy.typeId)
                        .map(type => (
                            <CardImg key={this.props.candy.id} className="candy-img" top width="50%" height="25%" src={`${type.img}`} alt={`${type.name}`} />
                        ))
                }
                <CardTitle className="candy-title">
                    <h4>{this.props.candy.name}</h4>
                </CardTitle>
                <CardFooter className="candy-footer">
                    <Link className="btn btn-primary" to={`/candy/${this.props.candy.id}`}>Details</Link>
                    <Button color="danger" onClick={() => this.props.delete("candies", this.props.candy.id)}>Delete</Button>
                </CardFooter>
            </Card>
        )
    }
}