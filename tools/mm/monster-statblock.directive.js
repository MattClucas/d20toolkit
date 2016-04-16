(function () {   
    //Directives are essentially "modules" whose HTML and/or Javascript is self contained (or nearly so)
    myApp.directive('d20MonsterStatBlock', [function () {

        return {
            restrict: 'E',
            templateUrl: 'monster-statblock.tpl.html',
            controller: 'MonsterStatBlockCtrl',
            controllerAs: 'monsterController', // how to reference the controller in HTML
            bindToController: true,
            scope: {
                MonsterPreParse: "=monster" // What this means is, in the HTML element calling for the directive, look for an attribute "monster=" and feed its data in here
            }
        };
    }]);
})();