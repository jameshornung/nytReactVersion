var React = require('react');

var Saved = React.createClass({

	render: function(){
		return(
				<div className="col-sm-12">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title"><strong><i className="fa fa-table"></i>   Saved Articles</strong></h3>
						</div>
					</div>
				</div>

			)
	}
});

module.exports = Saved;