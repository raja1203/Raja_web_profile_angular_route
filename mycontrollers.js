
app.controller('ExperienceController',['myRepService',function(myRepService){

	this.selectOrg = '';
	this.org_list = [];
	this.org_list = myRepService.orgList();
    this.visible = false;
    this.basicDetails= []; 
    this.basicDetails = myRepService.basicDetails();
}]);


app.controller("DetailsController",['myRepository', function(myRepository) {
	this.dvisible = false;
	
	this.setTab = function(currentTab) {
		this.tab = currentTab ;
	}
	this.isSelected = function(checkTab){
		return this.tab === checkTab || 0;
	}
	
  
    this.bdstyle = {'width': '40%'};
    this.locstyle = {'width': '25%'};

    this.selDtls = function () { 
    return myRepository.select_dtls(this.radioModel);
    };
    
}]);

app.controller('trainController',['myRepository',function(myRepository){
 this.isCollapsed = myRepository.visibility;	
 this.radioModel = '';
}]);