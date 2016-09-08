//----------------------------------------------

		//Attempting axios in this component
		// var URL ="https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7d3df12c9cc24361aad9ac44f690a69b&q=" + this.state.queryTerm;

		// axios.get(URL).then(function(response){
		// 	console.log('axios ran');
		// 	console.log(response);
		// })
		// .catch(function(err) {
		// 	console.log('error', err)
		// });

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