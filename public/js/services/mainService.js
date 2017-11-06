angular.module("DataLoader")
    .service('DataLoaderSvc',['$http','$q','$window',function($http,$q,$window) {
    var me = this;
    return {
      /*TO DO: Return all the audits with history*/
        getAudits : function(){
            var deferred = $q.defer();
            var url = "/allAudits";
            var options = {
                url : url,
                method : "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            };
            $http(options).
                success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function (data, status, headers, config) {
                    deferred.reject(data);
                });
            return deferred.promise;
        },

        getAuditHistory : function(){
            var deferred = $q.defer();
            var url = "/allAuditHistory";
            var options = {
                url : url,
                method : "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            };
            $http(options).
                success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function (data, status, headers, config) {
                    deferred.reject(data);
                });
            return deferred.promise;
        }
    };
}])
