var friendData = require("../data/friends");

module.exports = function(app) {
	// GET ROUTE
	app.get("/api/friends", function(req, res) {
		res.json(friendData);
	});
	// POST ROUTE
	app.post("/api/friends", function(req, res) {
		friendData.push(req.body);
		console.log(friendData);
		var newPersonName = req.body.name;
		var newPersonArray = req.body.score.split(",");

		function sum(tot, num) {
			return tot + num;
		};

		for (var i = 0; i < friendData.length; i++) {
			if (req.body.name != friendData[i].name) {
				var existingPersonName = friendData[i].name;
				var existingPersonArray = friendData[i].score.split(",");

				var newFriendScore = [];
				
				for (var j = 0; j < newPersonArray.length; j++) {
					newFriendScore.push(Math.abs(newPersonArray[j] - existingPersonArray[j]));
				};

				console.log(newFriendScore.reduce(sum));
			};
		};

		// if val = 40, most incompatable red text
		// if val = 0, most compatable green text
		// if val is between 1-10 get along light blue text
		// if val is between 11-20 you like them, but not too much yellow text
		// if val is between 21-30 you don't like them but not too much Yellow
		// if val is between 31-39 You cant stand them orange text
	});
};