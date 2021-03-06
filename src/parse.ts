export class ParseServise {

	private LocationObject:any;

	constructor() {
		Parse.initialize("NzSjvRfYiL9JgOMkV6YFh4GphCgW94Hg7OlYBzHa", "pNl8q5v1cqnmZF8hahruS7XXbTHCDEw7KRULVsWV");
		this.LocationObject = Parse.Object.extend("Location");
	}

	getAddresses() {
		var _this = this;
		var promise = new Promise(function (resolve, reject) {
				var query = new Parse.Query(_this.LocationObject);
				query.find({
					success: function (results) {
						resolve(results);
					},
					error: function (error) {
						reject(error);
					}
				});
			}
		);

		return promise;
	}

	setAddress(Address:String) {
		var _this = this;
		var promise = new Promise(function(resolve, reject) {
			var myLocation = new _this.LocationObject();
			myLocation.save({home: Address}, {
				success: function(object) {
					resolve(object);
				},
				error: function(model, error) {
					reject(error);
				}
			});
		});
		return promise;
	}
}