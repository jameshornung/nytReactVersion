var React = require('react');

var Grandchild = require('./Grandchild')

var Child = React.createClass({

	render: function(){

		return (
			<div>
				<h2>I am a child element</h2>
				<Grandchild />
			</div>
				)
	}
});

module.exports = Child;
