(function () {
    var myApp = angular.module('myapp', []);

    myApp.controller("MonsterMasherController", function ($scope, MonsterService, TemplateService) {
        var vm = this; // just something that needs to be done to setup the syntax in-html: "monsterController.Monster"

        var NonIntegerCR = [
            '1/2',
            '1/3',
            '1/4',
            '1/8'
        ];

        vm.CoreMonsters = [];
        vm.MonsterTemplates = [];
        vm.UpdateStats = UpdateStats;

        vm.Monster = {
            Core: {},
            Template: {},
            EndCR: 0,
            EndStats: [],
            EndAbilities: []
        };

        init();

        function init() {
            vm.CoreMonsters = MonsterService.GetCoreTypes();
            vm.MonsterTemplates = TemplateService.GetTemplates();
        }

        function UpdateStats() {
            if (!!vm.Monster && !!vm.Monster.Core) {
                vm.Monster.EndStats = [];
            }

            vm.Monster.Core.Stats.forEach(function (entry) {
                vm.Monster.EndStats.push(UpdateStat(entry));
            });

            vm.Monster.EndCR = CalculateCR(vm.Monster.Core.CR, vm.Monster.Template.CR);
        }

        function CalculateCR(baseCR, newCRmod) {

            var newCR = 0;

            var nonIntArrayIndex = CRisNonInteger(baseCR);

            // If the CR of the base monster is 1/2, 1/3, 1/4, or 1/8
            // OR
            // If the Template's negative CR modification is MORE than the current Core.CR
            if (nonIntArrayIndex >= 0 || (newCRmod < 0 && Math.abs(newCRmod) > baseCR)) {

                var steps = (newCRmod * -1); // Since 1/2, the 'largest' step (before 1 onwards) is 0, so its reversed, kind of odd...

                // If Steps = -3 (aka CR-Mod +3) , but the index of the array is only 0 (1/2), 1 (1/3) , or 2 (1/4)....
                if (nonIntArrayIndex + steps < 0) {

                    newCR = (newCRmod - nonIntArrayIndex);
                    // So, Example:
                    // CR-Mod +3 from Index 0 (1/2)...
                    // 1/2
                    // +1 = 1
                    // +2 = 2
                    // +3 = 3
                }
                // If there WOULD be an out of array bound's issue, just take the last entry: 1/8th
                else if (nonIntArrayIndex + steps > NonIntegerCR.length - 1)
                {
                    newCR = NonIntegerCR[NonIntegerCR.length - 1];
                }
                else {
                    // If the value can be easily handled, just adjust the index.
                    // So, if base CR is 1/3 (aka Index 1), and the CR-Mod is -2 (translated into 2 steps)
                    // the Index is moved 2 steps further, and becomes Index 4 (aka 1/8)
                    newCR = NonIntegerCR[nonIntArrayIndex + steps];
                }

            }
            else {
                newCR = baseCR + newCRmod;
            }

            return newCR;
        }

        // Returns the index (on the NonIntegerCR array),
        // or -1 if not found in array
        function CRisNonInteger(CRtoCheck) {

            var endIndex = -1;

            NonIntegerCR.forEach(function (val, index) {
                if (CRtoCheck == val) {
                    endIndex = index;
                }
            });

            return endIndex;
        }

        // 1 > 1/2 > 1/3 > 1/4 > 1/8
        function GetNextCRStepUp(currentStep) {
        }

        function UpdateStat(stat) {
            var name = stat.Name;
            var originalValue = stat.Value;

            var endStat = {
                Name: name,
                Value: originalValue,
                OriginalValue: originalValue
            }

            if (!!vm.Monster.Template.Name) {
                for (var i = 0; i < vm.Monster.Template.Stats.length; i++) {
                    if (vm.Monster.Template.Stats[i].Name == name) {

                        var adjustmentVal = vm.Monster.Template.Stats[i].Value;
                        endStat.Value += adjustmentVal;

                        if (adjustmentVal > 0) {
                            endStat.ColorClass = "stat-increase";
                        }
                        else if (adjustmentVal < 0) {
                            endStat.ColorClass = "stat-decrease";
                        }

                        break;
                    }
                }
            }

            return endStat;
        }
    });

    myApp.service('MonsterService', function () {
        var service = this;

        // Make the following funciton publicly accesible
        service.GetCoreTypes = GetCoreTypes;

        // Where we cache the types after calling them from some resource
        service.CoreTypes = [
            {
                Name: "Goblin",
                CR: '1/3',
                Description: "This creature stands barely three feet tall, its scrawny, humanoid body dwarfed by its wide, ungainly head.",
                Stats: [
                    { Name: "AC", Value: 16 },
                    { Name: "TouchAC", Value: 16 },
                    { Name: "FlatFootedAC", Value: 14 },

                    { Name: "HP", Value: 6 },

                    { Name: "FortSave", Value: 3 },
                    { Name: "ReflexSave", Value: 3 },
                    { Name: "Will", Value: -3 },

                    { Name: "Speed", Value: 30 },

                    { Name: "Str", Value: 11 },
                    { Name: "Dex", Value: 15 },
                    { Name: "Con", Value: 12 },
                    { Name: "Int", Value: 10 },
                    { Name: "Wis", Value: 9 },
                    { Name: "Cha", Value: 6 },

                    { Name: "Base Atk", Value: 1 },
                    { Name: "CMB", Value: 0 },
                    { Name: "CMD", Value: 12 }
                ],
                Abilities: []
            }
        ];

        function GetCoreTypes() {
            var newTypes = [];

            // TODO: Make a request to ______ to get monster core types
            //MonsterResource.getMonsters({ action: 'getMonsters' }).$promise.then(function (monsters) {
            //    // success
            //    console.log(monster.length);

            //}, function (errResponse) {
            //    // fail
            //    console.log(errResponse);
            //});

            // TODO: Update cache with queryied results

            // Return the Cache
            return service.CoreTypes;
        }

    });
    myApp.service('TemplateService', function () {
        var service = this;

        // Make the following funciton publicly accesible
        service.GetTemplates = GetTemplates;

        // Where we cache the templates after calling them from some resource
        service.Templates = [
            {
                Name: "Alchemically Quickened",
                CR: 1,
                Description: "The transformative mutagens of experimental alchemy have caused many strange and unexplained conditions throughout history. Although they often provide potent abilities, alchemical alterations invariably come with unwanted side effects. The method by which a creature becomes afflicted with an alchemical alteration should be unique for each creature. An alchemical alteration is treated as a simple template.",
                Stats: [
                    {
                        Name: "Speed",
                        Value: 10
                    }
                ],
                Abilities: [
                    "The creature's base speed increases by 10 feet, and each round in which it moves more than 10 feet, it also gains the effect of a blur spell until the start of its next turn."
                ]
            },
            {
                Name: "Thorny",
                CR: 1,
                Description: "Thornies are the pets and companions of the vegepygmies." +
                                "They are rarely encountered outside of a vegepygmy tribe or hunting party." +
                                "Vegepygmies often use them to hunt prey." +
                                "Although the most common thorny is dog-like, vegepygmies have managed to cultivate other types of thornies that resemble other animals in form and manner of attack." +
                                "Thornies reproduce by planting egg-like seeds (that the female lays) in the ground. Three to six months later, a small tree sprouts and buds, and from these buds are born the thornies." +
                                "An average thorny tree is capable of producing 1d6+4 thornies. The tree dies once it buds and the thornies hatch.",
                Stats: [
                    {
                        Name: "AC",
                        Value: 1
                    },
                    {
                        Name: "Speed",
                        Value: 10
                    }
                ],
                Abilities: [
                    "Special Attacks: A thorny retains all the special attacks of the base animal, and gains the \"Thorns\" special attack."
                ]
            },
            {
                Name: "Young", /* http://www.d20pfsrd.com/bestiary/monster-listings/templates/simple-template-young-cr-1 */
                Description: "Creatures with the young template are immature specimens of the base creature. You can also use this simple template to easily create a smaller variant of a monster. This template cannot be applied to creatures that increase in power through aging or feeding (such as dragons or barghests) or creatures that are Fine-sized.",
                CR: -1,
                Stats: [
                    {
                        Name: "Str",
                        Value: -4
                    },
                    {
                        Name: "Dex",
                        Value: 4
                    },
                    {
                        Name: "Con",
                        Value: -4
                    },
                    {
                        Name: "AC",
                        Value: -2
                    },
                    {
                        Name: "Size",
                        Value: -1
                    }
                ],
                Abilities: []
            }
        ];

        function GetTemplates() {
            // TODO: Make a request to ______ to get monster templates
            // TODO: Update cache with queryied results

            // Return the Cache
            return service.Templates;
        }
    });
    myApp.factory('MonsterResource', function ($resource, config) {

        var r = $resource('pathfinderdb.php', {}, {
            getMonsters: { method: 'GET', isArray: true }
        });

        return r;
    });

    // MonsterStatBlock Directive Code ----------------------------------------------------------CURRENTLY A TO DO

    // Directives are essentially "modules" whose HTML and/or Javascript is self contained (or nearly so)
    //myApp.directive('MonsterStatBlock', ['config', function (config) {

    //    return {
    //        restrict: 'E',
    //        templateUrl: 'monsterstatblock.tpl.html',
    //        controller: 'MonsterStatBlockCtrl',
    //        controllerAs: 'monsterController',
    //        bindToController: true,
    //        scope: {
    //            StatBlock: "=monster" // What this means is, in the HTML element calling for the directive, look for an attribute "monster=" and feed its data in here
    //        }
    //    };
    //}]);

    // Controller for JUST the Monster Stat Block
    //myApp.controller("MonsterStatBlockCtrl", function ($scope) {
    //    var vm = this;


    //});
})();
