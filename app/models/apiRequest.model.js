"use strict";
require('rxjs/Rx');
var ApiRequest = (function () {
    function ApiRequest() {
    }
    ApiRequest.makeApiCall = function () {
        ApiRequest.http.get('http://api.brewerydb.com/v2/beers/?key=78429bded3df154045e0f95e41c88cb2&availableId=1')
            .map(function (res) { return res.json(); })
            .subscribe(function (results) { return console.log(results); });
    };
    return ApiRequest;
}());
exports.ApiRequest = ApiRequest;
//# sourceMappingURL=apiRequest.model.js.map