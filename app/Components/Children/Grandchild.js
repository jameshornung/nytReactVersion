var React = require('react');

var Grandchild = React.createClass({

	render: function(){

		return(
			<div>
				<h3>I am the grandchild</h3>
			</div>
			)
	}
});

module.exports = Grandchild;