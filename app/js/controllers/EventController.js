eventapp.controller('EventController',
    function EventController($scope) {
        $scope.htmlsnippet = '<span stype="color:red">hi there from html snippet</span>';
        $scope.boolValue = true;
        $scope.styleTitle = {color:'red'};
        $scope.myclass = 'blue';
        $scope.buttondisablevalue = false;
        $scope.eventItem = {
            name: 'Angular Boot Camp',
            date: '1/1/2017',
            time: '10:30 am',
            location : {
                address : "365 Newtown rd",
                city : "Warminster",
                province : "Bucks"
            },
            imageUrl : 'img/angularjs-logo.png',
            sessions: [
                {
                    name : "Directives Masterclass'",
                    creatorName : 'Bob Smith',
                    duration : '1 hr',
                    level : 'Advanced',
                    abstract : 'In this session you will learn at lot more than you except',
                    upVoteCount : 0
                },
                {
                    name : 'Scopes for fun and profit',
                    creatorName : 'Bob Smith',
                    duration : '1 hr',
                    level : 'Advanced',
                    abstract : 'In this session you will learn at lot more than you except',
                    upVoteCount : 0
                },
                {
                    name : 'Well Behaved Controller',
                    creatorName : 'Bob Smith',
                    duration : '1 hr',
                    level : 'Advanced',
                    abstract : 'In this session you will learn at lot more than you except',
                    upVoteCount : 0
                }
            ]
        }

        $scope.upVoteSession = function(session) {
           session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);