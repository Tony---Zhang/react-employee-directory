import React from 'react';

const Header = require('./header');

module.exports = React.createClass({
    propTypes: {
        employeeId: React.PropTypes.string.isRequired,
        service: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            employee: {}
        }
    },
    componentDidMount: function () {
        this.props.service.findById(this.props.employeeId).done(function (result) {
            this.setState({employee: result})
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                <Header title="Employee Details"/>
                <h3>{this.state.employee.firstName} {this.state.employee.lastName}</h3>
                {this.state.employee.title}
            </div>
        );
    }
});
