# Iteration 5: Routing

In this version, we add an employee details page. Because the application now has more than one view, we add a simple view **routing mechanism**.

**Code Highlights:**

There are many options to implement routing. Some routing libraries are specific to React (check out [react-router](https://github.com/reactjs/react-router)), but you can also use other existing routing libraries. Because the routing requirements of this sample app are very simple, I used a simple script (`router.js`) that I have been using in other sample apps.

`componentDidMount()` is a method called automatically by React after a component is rendered for the first time.

## Goal
* Add employee detail component for detail page;
* Use `componentDidMount()` method for loading employee's detail information from the service with `findById` method;
* Import `router.js` for routing requirements;
* Add home page routing;
* Add employee detail page rounting;


## TODO
Use react-router to implement rout logic