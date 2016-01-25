# Iteration 2: Data Flow

In this second version, we define an array of employees in the HomePage component, and we make the data flow down the component hierarchy to **EmployeeList** and **EmployeeListItem**. In this version, the list of employees is *hardcoded*: we’ll work with dynamic data in iteration 4.

**Code Highlights:**

* ~~In JSX~~, you can add attributes to your custom component tags to pass properties to the component instance.

	```js
	<EmployeeList employees={employees}/>
	```
* Properties passed by the parent are available in `this.props` in the child. For example EmployeeList can access the list of employees provided by `HomePage` in `this.props.employees`.
In a list component (like `EmployeeList`), it’s a **common pattern to programmatically create an array of child components** (like `EmployeeListItem`) and include that array ~~in the JSX~~ description of the component.

	```js
	render: function () {
	    var items = this.props.employees.map(function (employee) {
	        return (
	            <EmployeeListItem key={employee.id} employee={employee} />
	        );
	    });
	    return (
	        <ul>
	            {items}
	        </ul>
	    );
	}
	```
The key attribute (like in `EmployeeListItem` above) is used to uniquely identify an instance of a component (useful in the diff process).

## Goals
Add EmployeeListItem component to load dynamic employees' list


