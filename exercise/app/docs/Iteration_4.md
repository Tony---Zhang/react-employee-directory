# Iteration 4: Async Data and State

In this version, we implement employee search using **an async service**. In this sample app, we use a mock **in-memory service** (defined in `data.js`) that uses **JQuery** to implement all the background Ajax calls, and uses **deferred** to deal with the callback, with **promises** so you can easily replace the implementation with Ajax calls. We keep track of the search key and the list of employees in the `HomePage` state.

**Code Highlights:**

The state (`this.state`) is private to the component and is changed using `this.setState()`.
The UI is automatically updated when the user types a new value in `SearchBar`. This is because when the state of a React component is changed, the component **automatically re-renders** itself (by executing its `render()` function).
`getInitialState()` executes once during the component lifecycle and and is used to set up the initial state of the component.

## Goal
* The EmployeeList are still hardcoded in memory;
* Create data.js to load employee list data with query `searchKey`;
* Add `employeeService` to `HomePage`;
* Import JQuery to our project.
* Implement `findById(searchKey)`, `findByName(searchKey)`, `findByManager(searchKey)` functions in `data.js` with JQuery Ajax calls.


