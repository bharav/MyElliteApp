(
	function(){
		'use strict'
		angular.module('eliteApp').controller('LocationCtrl',['$state','eliteApi',LocationCtrl]);
		function LocationCtrl($state,eliteApi){
			var vm = this;
			var data =eliteApi.getLeaguesData();
		    vm.locations=data;
			
			
		}
	}
	
)();