(
	function(){
		'use strict'
		angular.module('eliteApp').controller('teamDetailCtrl',["$stateParams",'eliteApi',teamDetailCtrl]);
		
		function teamDetailCtrl($stateParams,eliteApi){
			var vm = this;
			
			vm.teamId=Number($stateParams.id);
			var data = eliteApi.getLeaguesData();
			console.log(data.teams,vm.teamId);
			var team = _.chain(data.teams)
			           .pluck('divisionTeams')
					   .flatten()
					   .find({"id":vm.teamId})
					   .value();
					   console.log(team);
		   vm.teamName=team.name;
		   console.log(data.games)
		   vm.games=_.chain(data.games).filter(isTeamInGame)
		  	   .map(function(item){
			   var isTeam1=(item.team1Id===vm.teamId?true:false)
			   var opponentName = isTeam1?item.team2:item.team1;
			   var scoreDisplay=getScoreDisplay(isTeam1,item.team1Score,item.team2Score);
		 	   return{
			            gameId:item.id,
						opponent:opponentName,
						time:item.time,
						location:item.location,
						locationUrl:item.locationUrl,
						scoreDisplay:scoreDisplay,
						homeAway:(isTeam1?"vs.":"at")	
			};
			
		}).value();
		
		function isTeamInGame(item)
		{
			return item.team1Id===vm.teamId || item.team2Id===vm.teamId;
		}
		
		function getScoreDisplay(isTeam1, team1Score, team2Score)
		{
			if(team1Score && team2Score)
			{
				var teamScore = (isTeam1?team1Score:team2Score);
				var opponentscore =(isTeam1?team2Score:team1Score);
				var winindicator = teamScore >opponentscore?"W: ":"L: ";
				return winindicator+teamScore+"-"+opponentscore;
			}
			else{
				return "";
			}
		}
		
	}
}
	
)();