export class ParseServise {

	private LocationObject:any;

	constructor() {
		Parse.initialize("NzSjvRfYiL9JgOMkV6YFh4GphCgW94Hg7OlYBzHa", "pNl8q5v1cqnmZF8hahruS7XXbTHCDEw7KRULVsWV");
		this.LocationObject = Parse.Object.extend("Location");
	}

	getAddresses() {
		var promise = new Promise();
		var query = new Parse.Query(this.LocationObject);
		query.find({
			success: function(results) {
				promise.resolve(results);
			},
			error: function(error) {
				promise.reject(error);
			}
		});
		return promise;
	}

	setAddress(Address:String) {
		var promise = new Promise();
		var myLocation = new this.LocationObject();
		myLocation.save({home: 'Dizengoff 24'}, {
			success: function(object) {
				promise.resolve(object);
			},
			error: function(model, error) {
				promise.reject(error);
			}
		});
		return promise;
	}
}