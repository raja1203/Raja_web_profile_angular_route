app.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider
			.when ('/About',{
				templateUrl : 'homepage.html'
			}
			)
			.when ('/ProfSum',{
				templateUrl : 'prof_summary.html'
			}
			)
			.when ('/Achiev',{
				templateUrl : 'achievements.html'
			}
			)
			.when ('/Exp',{
				templateUrl : 'experience.html',
				controller  : 'ExperienceController'
			}
			)
			.when ('/Skill',{
				templateUrl : 'skillset.html'
			}
			)
			.when ('/Train',{
				templateUrl : 'trainings_new.html'
			}
			)
		    .otherwise({
				redirectTo: '/'
			});

	}]);