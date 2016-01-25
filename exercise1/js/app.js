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
    render: function () {
        return (
            <input id="searchInput"/>
        );
    }
});

var EmployeeList = React.createClass({
    render: function () {
        return (
            <ul>
                <li>James King</li>
                <li>Julie Taylor</li>
                <li>Eugene Lee</li>
            </ul>
        );
    }
});

var HomePage = React.createClass({
    render: function () {
        return (
            <div>
                <Header title="Employee List"/>
                <SearchBar />
                <EmployeeList />
            </div>
        );

    }
});

ReactDOM.render(
    <HomePage />,
    document.body
);