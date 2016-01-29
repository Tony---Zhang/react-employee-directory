# Iteration 1: Static Version

In this first version, we create and render the HomePage component with some hardcoded (static) sample data.

**Code Highlights:**

Creating components is easy: You use `React.createClass()`, implement the `render() `function, and return the UI description.
The JSX returned by `render()` is not an actual DOM node: it’s a description of the UI that will be diffed with the current description to perform the minimum set of changes to the DOM.
JSX is *optional*: you can use the React APIs to create the UI description programmatically.
Composing components is easy: You can use a component created using `React.createClass()` as a tag in JSX. 

## Goal
HomePage is made of **three** other components: 
Header, SearchBar, and EmployeeList.

* Header will show the title of this page;
* SearchBar include a input edit;
* EmployeeList will show a hardcode employee's list;


