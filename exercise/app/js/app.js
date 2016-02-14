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

var EmployeePage = React.createClass({
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

router.addRoute('', function () {
    ReactDOM.render(
        <HomePage service={employeeService}/>,
        document.getElementById('content')
    );
});

router.addRoute('employees/:id', function (id) {
    ReactDOM.render(
        <EmployeePage employeeId={id} service={employeeService}/>,
        document.getElementById('content')
    );
});

router.start();