(
	function(){
		'use strict'
		angular.module('eliteApp').controller('StandingsCtrl',['eliteApi',StandingsCtrl]);
		function StandingsCtrl(eliteApi){
			var vm = this;
			var data =eliteApi.getLeaguesData();
			console.log(data.standings);
		    vm.standings=data.standings;
			
			
		}
	}
	
)();