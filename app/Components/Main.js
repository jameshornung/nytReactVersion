var React = require('react');

// var helpers = require('./utils/helpers.js');
var Search = require('./Children/Search');
var Results = require('./Children/Results');
var Saved = require('./Children/Saved');


var Main = React.createClass({

	//render the function
	render: function(){
		return(
				<div className="container">

	
					<div className="jumbotron">
						<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
					</div>
					<div className="row">
						<Search />
					</div>
					<div className="row">
						<Results />
					</div>
					<div className="row">
						<Saved />
					</div>


				</div>

			)
	}
});

module.exports = Main;