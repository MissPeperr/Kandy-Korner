import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CandyList from './candy/CandyList'
import EmployeeList from './employee/EmployeeList';
import StoreList from './store/StoreList'
import DataManager from './modules/DataManager';
import CandyDetail from './candy/CandyDetail';


export default class ApplicationViews extends Component {
    state = {
        locations: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    componentDidMount() {
        const newState = {}
        DataManager.getAll("locations")
            .then(allStores => newState.locations = allStores)
            .then(() => DataManager.getAll("employees"))
            .then(allEmps => newState.employees = allEmps)
            .then(() => DataManager.getAll("candyTypes"))
            .then(allTypes => newState.candyTypes = allTypes)
            .then(() => DataManager.getAll("candies"))
            .then(allCandy => newState.candies = allCandy)
            .then(() => this.setState(newState))
    }

    delete = (resource, resObj) => {
        DataManager.delete(resource, resObj)
            .then(() => DataManager.getAll(resource))
            .then(allOfResource => this.setState({
                [resource]: allOfResource
            }))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList locations={this.state.locations} />
                }} />
                <Route exact path="/candy" render={(props) => {
                    return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} delete={this.delete}/>
                }} />
                <Route path="/candy/:candyId(\d+)" render={(props) => {
                    let candy = this.state.candies.find(candy =>
                        candy.id === parseInt(props.match.params.candyId)
                    )

                    // If the candy wasn't found, create a default one
                    if (!candy) {
                        candy = {id:404, name:"404", type: "Candy not found"}
                    }
                    return <CandyDetail candy={candy} candyTypes={this.state.candyTypes} delete={this.delete}/>
                }} />
                <Route exact path="/employee" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}