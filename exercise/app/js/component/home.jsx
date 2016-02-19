import React from 'react';

const Header = require('./header');

var SearchBar = React.createClass({
    getInitialState: function () {
        return {
            searchKey: ''
        }
    },

    handleSearch: function (event) {
        var input = event.target.value;
        // This is not apply right now, after run out of
        // this function scope, this state will bring into effect
        this.setState({searchKey: input});

        this.props.searchHandler(input);
    },

    render: function () {
        return (
            <input id="searchInput" type="text" onChange={this.handleSearch}/>
        );
    }
});

var EmployeeListItem = React.createClass({
    propTypes: {
        employee: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            <li>
                <a href={"#employees/"+this.props.employee.id}>
                    {this.props.employee.firstName} {this.props.employee.lastName}
                </a>
            </li>
        );
    }
});

var EmployeeList = React.createClass({
    propTypes: {
        employees: React.PropTypes.array.isRequired
    },

    render: function () {
        var items = this.props.employees.map(function (employee) {
            return (
                <EmployeeListItem key={employee.id} employee={employee}/>
            );
        });
        return (
            <ul>
                {items}
            </ul>
        );
    }
});

module.exports = React.createClass({
    getInitialState: function () {
        return {
            employees: []
        }
    },
    handleSearch: function (key) {
        this.props.service.findByName(key).done(function (result) {
            console.debug('Search key: %s', key);
            console.debug('Result: %s', JSON.stringify(result, null, 4));
            this.setState({employees: result});
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                <Header title="Employee List"/>
                <SearchBar searchHandler={this.handleSearch}/>
                <EmployeeList employees={this.state.employees}/>
            </div>
        );

    }
});