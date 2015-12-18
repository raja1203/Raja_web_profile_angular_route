app3.service('myRepService',function() {

var org_list = [
						'TCS',
						'Citibank',
						'IBM',
						'HCL',
						'Microsoft',
						'Wipro'
					];

this.orgList = function () {
	return org_list;
};
	
var bs_dt = [
				{
					shortName		:'TCS',
				    name    		:'Tata Consultancy Services',
				    baseLocation	:'Chennai',
				    multiLocations 	: true,								           
				    isRegular 		: true,
				    jobType			: 'Regular',
				    period			:'Feb 1997 to Dec 2005',
				    designation		:'IT Analyst'
				},
				{
					shortName		:'Citibank',
					name        	:'Citibank NA',
				    baseLocation	:'Singapore',
				    multiLocations	: false,
				    isRegular		: false,
				    jobType			: 'Contract',
				    period			:'Jan 2006 to Dec 2007',
				    designation		:'Associate Manager Projects',
				    parentCompany	:'Covansys Asia Pacific Pvt Ltd'
				    
				},
				{

					shortName  		:'IBM',
					name     	    :'IBM Global Services India',  
					baseLocation	:'Chennai',
				    multiLocations  : false,
					isRegular       : false, 
					jobType			: 'Contract',
					period			:'Mar 2008 to Oct 2009',
				    designation		:'Project Manager',
				    parentCompany	:'Synova Innovative Technologies Pvt Ltd'
				    
				},
				{
					shortName  		:'HCL',
					name       		:'HCL Technologies Ltd',
					baseLocation	:'Chennai',
					multiLocations	: true,									
					isRegular		: true,
					jobType			: 'Regular',
					period			:'Oct 2009 to Mar 2011',
				    designation		:'Associate Project Manager'
				   
				},
				{

					shortName		:'Microsoft',
					name    	    :'Microsoft Global services India',
					baseLocation	:'Hyderabad',
					multiLocations	: false,
					isRegular		: false,
					jobType			: 'Contract',
					period			:'Nov 2013 to Jan 2014',
				    designation		:'Senior Project Manager',
				    parentCompany	:'Asterminds Enterprise Solutions Pvt Ltd'
				    
				},
				{
					shortName		:'Wipro',
					name    		:'Wipro Technologies',
					baseLocation	:'Chennai',
					multiLocations	: false,
					isRegular   	: false,
					jobType			: 'Contract',
					period			:'Feb 2014 to Mar 2015',
				    designation		:'Delivery manager',
				    parentCompany	:'Railsdata Software Pvt Ltd'
				    
				}
		    ];

this.basicDetails = function () {
	return bs_dt;
};


/*this.visibility = function () {
	return false;
};
*/
});

app2.factory('myRepository',function() {
	var visible = false;	   


var org_otherLocations =	[
								{
									shortName		:'TCS',
									otherLocations	:[
								    					{city:'Zurich',country:'Switzerland'},
								    					{city:'Kaulalumpur',country:'Malaysia'},
								    					{city:'SanRamon',country:'USA'},
								                        {city:'Bern',country:'Switzerland'}
								                     ]	       
								},
								{
									shortName  		:'HCL',
									otherLocations	:[
														{city:'Noida',country:'India'},
														{city:'Portland',country:'USA'}
												    ]
								}	 
							];



var bus_domains = 			[
								{
									shortName		:'TCS',
						    		busClients		:[
								    					{bus_domain:'Telecom',client:'Qwest'},
								    					{bus_domain:'Finance',client:'SIX systems'},
								    					{bus_domain:'Government',client:'Internal Revenue Board,Malaysia'},
								    					{bus_domain:'Oil and Gas',client:'Chevron'},
								    					{bus_domain:'Telecom',client:'Verizon'},
								    					{bus_domain:'Retail',client:'Target'},
								    					{bus_domain:'Travel',client:'SBB'},
								    					{bus_domain:'Healthcare',client:'Kaiser'},
								    					{bus_domain:'Retail',client:'Springs'},
								    					{bus_domain:'Insurance',client:'AIG'}
						    						 ]
								},
								{
									shortName		:'Citibank',
									busClients		:[
								    					{bus_domain:'Banking',client:'Citibank'}
								    				 ]
								},
								{
									shortName		:'IBM',
									busClients		:[
								    					{bus_domain:'Telecom',client:'ATT'}
								    				 ]
								},
								{
									shortName		:'HCL',
									busClients		:[
								    					{bus_domain:'Energy and Utilities',client:'Pacificorp'}
								    				 ]
								},
								{
									shortName		:'Microsoft',
									busClients		:[
								    					{bus_domain:'Information Technology',client:'Microsoft'}
								    				 ]

								},
								{
									shortName		:'Wipro',
									busClients		:
													[
						    							{bus_domain:'Gaming',client:'Electronic Arts'}
						    				 		]

								}

							];

var roles_rspns = 		[
							{
								shortName		:'TCS',
								roles_rspnsblts :[
						    				  {role_name		:'COOL:Gen and Mainframe Faculty',
											   responsibilty	:'Provided expert level training on COOL:Gen to peers and other team members, and also to users at Client location(Malaysia income tax department).Conducted mainframe technologies(COBOL,DB2,CICS) to two freshers batches of 25 members each.'
											  },
											  
											  {role_name 		:'Internal Quality Auditor',
											   responsibilty 	:'Conducted process quality audits for more than 10 projects to assess compliance related to CMM, PCMM, ISO 9001-2004. This helped in TCS Sholinganallur achieving CMM Level 5.'
											  },

											  {role_name		:'Team Lead',
											   responsibilty  	:'Led a small team of 5 members in development, maintenance and support of Applications for Target Inc.'
											  },
											  {role_name		:'Technical coordinator',
											   responsibilty	:'For client Chevron at onsite SanRamon ,CA,USA, Maintained and supported all phases of custom developed client applications in COOL:Gen, Mainframes and DB2.  Trained, coordinated and supported the team working on applications involving COOL:Gen/Unix and Oracle on software issues, training and installation.'
											  },
											  {role_name		:'COOL:Gen Technical Architect',
											   responsibilty 	:'Managed all phases of project from requirements gathering through user acceptance testing and documentation development. Delivered projects on time and under budget.'
											  },
											  {role_name		:'Mainframe programmer/Developer',
											   responsibilty	:'Provided system support to end users and trouble shoot issues rising within custom developed programs and applications in US West and SEGA projects. Conducted code and test review.'

											  }
											  ]

							},
							{
								shortName			:'Citibank',
								roles_rspnsblts		:[
												{role_name:'Development  manager',
											   responsibilty:'Managed 4 teams of 25 members spread over Singapore and Malaysia .Ensured defect-free releases through careful planning, testing and QA efforts. Defined new process which helped in reducing number of defects reported by users.'},
											  	{role_name:'Resource manager',
											   responsibilty:'Administer all budget and divisional objectives and maintain appropriate level of staff at all times and assist to identify all development resources required for projects.'},
											    {role_name:'Project coordinator',
											   responsibilty:'Interacted with various teams to coordinate project activities.  Attended project meetings and follow-up with outstanding tasks.'},
											    {role_name:'COOL:Gen Technical Architect',
											   responsibilty:'Managed all phases of project from requirements gathering through user acceptance testing and documentation development. Delivered projects on time and under budget.'}

											  ]

							},
							{
								shortName			:'IBM',
								 roles_rspnsblts 	:[
													  {role_name:'Transition Lead ',
											  		 responsibilty:'As a subject matter expert in COOL:Gen , led the team of 6 members  in receiving transition from Accenture for COOL:Gen applications.'},
											 		  {role_name:'Project manager/technical mentor',
											   responsibilty:'Led the team of 4 members. Provided accurate estimates based on requirments from customer. Worked as a single point of contact for customer for handling mission critical application(RSAG).Supported mission critical COOL:Gen application and other non COOL:Gen application without any major issues. Defined new process which provided savings to client. Also performed the role of COOL:Gen system administrator providing user access and privileges.'}						
											  
											  		 ]

							},
							{
								shortName			:'HCL',
								roles_rspnsblts		:[
													 {role_name:'Delivery Manager',
											  		  responsibilty:'Reported to Vertical head.Managed a team of 9 members( 3 at onsite and 6 at offshore). Managed stakeholders from different organization functions like Admin, HR, Travel, Immigration, Legal, Quality, Finance, Operations, Infrastructure, Tools, learning and development, recruitment etc. Performed full life cycle  of people managment activities like Recruitment, Comptenecy management, Shift managment, leave management, performance managment, Succession planning , Allocation and deallocation of resources.Successfully managed SLAs defined by customer and also followed ITSM and ITIL methologies for support work. Ensured defect-free releases through careful planning, testing and QA efforts.Achieved customer satifaction score of 5.2/7 and Process quality index of 95%.'},
											 		 {role_name:'Transition manager ',
											   		  responsibilty:'Prepared transiton plan, executed, monitored and tracked it to succesful closure in onsite-ofshore model'},
											  		 {role_name:'Practice Head',
											   		  responsibilty:'Played a key role in getting COOL:Gen development license. Installed COOL:Gen on local PCs and delivered training programs and improved competencies of close to 10 HCL associates.Achieved a rating of 4.5/5 for best quality training given. Also saved training costs for HCL Technologies.'}
													  ]

							},
							{
								shortName		:'Microsoft',
								roles_rspnsblts :[
													{
														role_name:'PMO',
											   		 	responsibilty:'Prepared status Reports and financials for multiple projects.'
											   		}
											  	 ]											 
											 

							},
							{
								shortName		:'Wipro',
								roles_rspnsblts :[
												{role_name:'Program manager',
											   	 responsibilty:'Reported to Technical Director. Worked on Alliant Upgrade program from inception (Business case definition) till post implementation phases. Managed a virtual team of Technical architect, business users team and vendor team. This project involves up-gradation hardware and software. Prepared project charter, project schedule, tracked the project activities, identified and monitored risks. Identified and managed stakeholders ranging from Chief accounting Officer,technical director, Finance, Business users, Vendors, Infrastructure teams, windows systems administrators etc.'},
											  	{role_name:'Project manager',
											   	 responsibilty:'Managed performance improvement project using informatica smart partition solution.Team consists of Technical architect, vendors, QA and other teams.Prepared project plan and tracked it. Managed Mobile application development project. This involves preparation of project plan, tracking the status of project activities with development team.'},
											    {role_name:'Issue coordinator',
											     responsibilty:'Using JIRA, performed the role of issue coordinator. Responsibility includes recording and tracking issues arised in infrastructed services performed by Wipro Technologies. It also includes following up with task owners regarding root cause analysis for major incidents. '},
											    {role_name:'Resource manager',
											     responsibilty:'Using Workday, administered all budget and divisional objectives and maintain appropriate level of staff at all times and assist to identify all development resources required for projects.'}
											    ]

							}


						];


var selDtls = function (sd) {

	switch (sd) {
		case "rolresp" :
		   return roles_rspns;
		   break;
		case "busdom" :
		   return bus_domains;
		   break;
		case "othrloc" :
		   return org_otherLocations ;  
		   break;
	};
};


return {
	
	
	org_otherLocations :  org_otherLocations,
	bus_domains : bus_domains,
	roles_rspns : roles_rspns,
	select_dtls : selDtls
};

});