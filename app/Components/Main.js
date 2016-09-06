var React = require('react');
var axios = require('axios');

// var helpers = require('./utils/helpers.js');
var Search = require('./Children/Search');
var Results = require('./Children/Results');
var Saved = require('./Children/Saved');

var helpers = require('./utils/helpers.js');


var Main = React.createClass({

	getInitialState: function(){
		return {
			queryTerm: "",
			numResults: 0,
			startYear: 0,
			endYear: 0
		}
	},

	// This functions should allow the child element to update search parameters here in the parent element
	setParameters: function(term, number, year1, year2){
		this.setState({
			queryTerm: term,
			numResults: number,
			startYear: year1,
			endYear: year2
		})
	},

	componentDidUpdate: function(){
		console.log('update happened');
		// // console.log(this.state.queryTerm);
		// // console.log(this.state.numResults);
		// // console.log(this.state.startYear);
		// // console.log(this.state.endYear);

		
		var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7d3df12c9cc24361aad9ac44f690a69b&q=";
		var queryURL = queryURLBase + this.state.queryTerm;

		axios.request(queryURL)
			.then(function(response){

			console.log(response);
				
		})
	},

	//render the function
	render: function(){
		return(
				<div className="container">

	
					<div className="jumbotron">
						<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
					</div>
					<div className="row">
						<Search setParameters={this.setParameters} />
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