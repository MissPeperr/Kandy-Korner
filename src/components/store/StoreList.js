import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default class CandyList extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello, StoreList!</h1>
                {
                    this.props.locations.map(location => (
                        <Card key={location.id}>
                            <CardBody>
                                <CardTitle>
                                    <h2>{location.name}</h2>
                                </CardTitle>
                                <CardSubtitle>
                                    {location.address}
                                </CardSubtitle>

                            </CardBody>
                        </Card>
                    ))
                }
            </React.Fragment>
        )
    }
}