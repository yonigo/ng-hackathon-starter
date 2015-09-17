export class GoogleSearchServise {

    constructor() {

    }


    get() {
        fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=AIzaSyAftx2BAphV1j5XlIo0zmw9N3KN82TakAQ').then(function () {

            debugger;
        });
        //var _this = this;
        //var promise = new Promise(function (resolve, reject) {
        //		var query = new Parse.Query(_this.LocationObject);
        //		query.find({
        //			success: function (results) {
        //				resolve(results);
        //			},
        //			error: function (error) {
        //				reject(error);
        //			}
        //		});
        //	}
        //);

        return promise;
    }

    //AIzaSyAftx2BAphV1j5XlIo0zmw9N3KN82TakAQ
}