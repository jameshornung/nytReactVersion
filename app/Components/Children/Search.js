var React =require('react');

var Search = React.createClass({

	getInitialState: function(){
		return {
			queryTerm: "",
			numResults: 0,
			startYear: 0,
			endYear: 0,
			queryURL: "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7d3df12c9cc24361aad9ac44f690a69b&q="
		}
	},

	handleClick: function(){
		this.helpers.runSearch;
	},

	handleSearchChange: function(event){
    	this.setState({queryTerm: event.target.value});
    	console.log(this.state.queryURL);
	},

	handleNumChange: function(event){
		this.setState({numResults: event.target.value});
	},

	handleStartChange: function(event){
		this.setState({startYear: event.target.value});
	},

	handleEndChange: function(event){
		this.setState({endYear: event.target.value});
	},

	render: function(){
		return(
				<div className="col-sm-12">
				<br />
					
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
						</div>
						<div className="panel-body">

							
							<form role="form">

						  	  
							  <div className="form-group">
							    <label htmlFor="search">Search Term:</label>
							    <input type="text" className="form-control" id="searchTerm" onChange={this.handleSearchChange} />
							  </div>

							 
							  <div className="form-group">
							    <label htmlFor="pwd">Number of Records to Retrieve:</label>
								<select className="form-control" id="numRecordsSelect" onChange={this.handleNumChange}>
									<option value="1">1</option>
									<option value="5">5</option>
									<option value="10">10</option>
								</select>			  
							  </div>

						  	 
							  <div className="form-group">
							    <label htmlFor="startYear">Start Year (Optional):</label>
							    <input type="text" className="form-control" id="startYear" onChange={this.handleStartChange}/>
							  </div>

						  	  
							  <div className="form-group">
							    <label htmlFor="endYear">End Year (Optional):</label>
							    <input type="text" className="form-control" id="endYear" onChange={this.handleEndChange}/>
							  </div>

							  
							  <button type="submit" className="btn btn-default" id="runSearch" onClick={this.handleClick}><i className="fa fa-search"></i> Search</button>
		  					  <button type="button" className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i> Clear Results</button>

							</form>
						</div>
					</div>
				</div>
			)
	}
});

module.exports = Search;



