'use strict';
// Header will show the title of this page;
// SearchBar include a input edit;
// EmployeeList will show a hardcode employee's list

var Header = React.createClass({
    render: function () {
        return (
            <h1>This is header with title: {this.props.title}</h1>
        );
    }
});

var SearchBar = React.createClass({
    getInitialState: function () {
        return {
            searchKey: ''
        }
    },

    handleSearchAlert:function(key) {
        alert('Search key: ' + key);
    },

    handleSearch: function (event) {
        var input = event.target.value;
        // This is not apply right now, after run out of
        // this function scope, this state will bring into effect
        this.setState({searchKey: input});

        // show alert
        this.handleSearchAlert(input);
    },

    render: function () {
        return (
            <input id="searchInput" type="text" onChange={this.handleSearch} />
        );
    }
});

var EmployeeListItem = React.createClass({
    propTypes: {
        employee: React.PropTypes.element.isRequired
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
        employees: React.PropTypes.element.isRequired
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

var HomePage = React.createClass({
    render: function () {
        // Hardcoded employee list;
        var employeeList = [
            {id: '001', firstName: 'James', lastName: 'King'},
            {id: '002', firstName: 'Julie', lastName: 'Taylor'},
            {id: '003', firstName: 'Eugene', lastName: 'Lee'}
        ];
        return (
            <div>
                <Header title="Employee List"/>
                <SearchBar />
                <EmployeeList employees={employeeList}/>
            </div>
        );

    }
});

ReactDOM.render(
    <HomePage />,
    document.body
);