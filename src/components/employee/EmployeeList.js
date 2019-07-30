import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

export default class CandyList extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello, EmployeeList!</h1>
                {
                    this.props.employees.map(employee => (
                        <Card key={employee.id}>
                            <CardBody>
                                <CardTitle>
                                    <h2>{employee.name}</h2>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    ))
                }
            </React.Fragment>
        )
    }
}