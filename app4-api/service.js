angular.module('apiApp').service('mainSvc', function($http){

    var baseUrl = "http://swapi.co/api";

    this.getData = function(){
        return $http ({
            method: 'GET',
            url: baseUrl + '/people',
        }).then(function(response){
            if(response.status === 200){
            console.log(response.data);
            return response.data.results;
        } 
        return "All your base are belong to us!"
        })
    }
})