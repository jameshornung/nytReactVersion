var React = require('react');
var axios = require('axios');
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

		//VERIFY CHILD UPDATED STATES
		//--------------------------------------------

		// // console.log(this.state.queryTerm);
		// // console.log(this.state.numResults);
		// // console.log(this.state.startYear);
		// // console.log(this.state.endYear);

		//QUERY THE NEW YORK TIMES API (Cannot make this work using a variety of methods???)
		//---------------------------------------------

		//Using axios from the helpers component
		// helpers.runSearch(this.state.queryTerm);

		//Using axios in this component
		// var URL ="https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7d3df12c9cc24361aad9ac44f690a69b&q=" + this.state.queryTerm;

		// axios.get(URL).then(function(response){
		// 	console.log(response);
		// })

		//Have also attempted:
		//jQuery ajax call (error: ? is not recognized)
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