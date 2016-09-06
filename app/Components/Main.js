var React = require('react');
var axios = require('axios');
var $ = require('jquery');
// var request = require('request');

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

	// This functions allows the child element to update search parameters here in the parent element
	setParameters: function(term, number, year1, year2){
		this.setState({
			queryTerm: term,
			numResults: number,
			startYear: year1,
			endYear: year2
		})
	},

	componentDidUpdate: function(){

		//verify update was recognized by parent (submit button etered)
		console.log('Update Verified');

		//VERIFY CHILD UPDATED STATES (this works)
		//--------------------------------------------

		// // console.log(this.state.queryTerm);
		// // console.log(this.state.numResults);
		// // console.log(this.state.startYear);
		// // console.log(this.state.endYear);

		//QUERY THE NEW YORK TIMES API (Cannot make this work using a variety of methods???)
		//---------------------------------------------

		//Attempting axios from the helpers component
		// helpers.runSearch(this.state.queryTerm);

		//----------------------------------------------

		//Attempting axios in this component
		// var URL ="https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7d3df12c9cc24361aad9ac44f690a69b&q=" + this.state.queryTerm;

		// axios.get(URL).then(function(response){
		// 	console.log(response);
		// })

		//------------------------------------------------

		//Attempting ajax call
		// var settings = {
		// 	  "async": true,
		// 	  "crossDomain": true,
		// 	  "url": "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7d3df12c9cc24361aad9ac44f690a69b&q=donald%20trump",
		// 	  "method": "GET",
		// 	  "headers": {
		// 	    "cache-control": "no-cache",
		// 	    "postman-token": "7e98c5a0-facc-6c4b-962d-5b2ff11bc593"
		// 	  }
		// 	}

		// 	console.log(settings);
		// 	$.ajax(settings).done(function (response) {
		// 		console.log('ajax request complete');
		// 	  	console.log(response);
		// 	});

		//----------------------------------------------------

		//Have also attempted:
		//request npm package (crashes webpack?)
		//native node (no response)
		//All methods work in postman, just unable to translate to this program
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