(function(){
	'use strict'
	angular.module('eliteApp').factory('eliteApi',[eliteApi]);
	function eliteApi(){
		var leagues=JSON.parse('[{"id": 1,"name": "7th Grade MS JV Friday 2013-14 League","isArchived": true, "href": "/api/leaguedata/1"},{"id": 2,"name": "7th Grade MS JV Friday 2014-15 League","isArchived": true, "href": "/api/leaguedata/2"} ]');
var leaguedata =JSON.parse('[{"id": 1,"name": "7th Grade MS JV Friday 2013-14 League","isArchived": true, "href": "/api/leaguedata/1"} ]');
function getLeagues()
{
	return leagues;
}
function getLeaguesData(){
	return leaguedata;
}
		return{
			getLeagues:getLeagues,
			getLeaguesData:getLeaguesData
		};
	}
})();