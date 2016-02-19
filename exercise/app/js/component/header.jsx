import React from 'react';

module.exports = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            <h1>This is header with title: {this.props.title}</h1>
        );
    }
});
