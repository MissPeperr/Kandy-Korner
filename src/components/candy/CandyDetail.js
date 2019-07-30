import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardFooter, Button } from 'reactstrap';

export default class CandyDetail extends Component {
    render() {
        return (
            <React.Fragment>
                <Card className="candy-card">
                    {
                        this.props.candyTypes
                            .filter(type => type.id === this.props.candy.typeId)
                            .map(type => (
                                <CardImg key={this.props.candy.id} className="candy-img" top width="50%" height="25%" src={`../${type.img}`} alt={`${type.name}`} />
                            ))
                    }
                    <CardTitle className="candy-title">
                        <h4>{this.props.candy.name}</h4>
                    </CardTitle>
                    <CardBody>
                        {
                            this.props.candyTypes.filter(type => type.id === this.props.candy.typeId)
                                .map(type => (
                                    <CardSubtitle key={type.id}>
                                        Type of Candy: <h5>{type.name}</h5>
                                    </CardSubtitle>
                                ))
                        }
                    </CardBody>
                    <CardFooter className="candy-footer">
                        {
                            this.props.candy.name === "404" ? ""
                                : <Button color="danger" onClick={() => this.props.delete("candies", this.props.candy.id)}>Delete</Button>
                        }

                    </CardFooter>
                </Card>
            </React.Fragment>
        )
    }
}