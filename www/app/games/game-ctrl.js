(
	function(){
		'use strict'
		angular.module('eliteApp').controller('GameCtrl',['$stateParams','eliteApi',GameCtrl]);
		function GameCtrl($stateParams,eliteApi){
			var vm = this;
			var gameId=Number($stateParams.id);
			console.log(gameId);
			var data =eliteApi.getLeaguesData();
		    vm.game=_.find(data.games,{"id":gameId});
		}
	}
	
)();