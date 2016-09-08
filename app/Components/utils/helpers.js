var axios = require('axios');

var helpers = {

	runSearch: function(term, num){
		console.log(term);
		console.log(num);

		var URL ="https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7d3df12c9cc24361aad9ac44f690a69b&q=" + term;
		return axios.get(URL)
			.then(function(response){
				console.log(response);
				// return response;
		})
	}
}

module.exports = helpers;