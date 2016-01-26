# Iteration 3: Inverse Data Flow

In the previous version, the data flew down the component hierarchy from **HomePage** to **EmployeeListItem**. In this version, we make data (the search key to be specific) flow upstream, from the **SearchBar** to the **HomePage** where it is used to find the corresponding employees.

**Code Highlights:**
In this version, the inverse data flow is implemented by providing the child (SearchBar) with a handler to call back the parent (HomePage) when the search key value changes.

```js
<SearchBar searchHandler={this.searchHandler}/>
```

## Goals
* Add search input change listener;
* Get the search key by user input and show an alert with msg `Search key: {key}`;

