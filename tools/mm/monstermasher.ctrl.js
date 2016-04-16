(function () {
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
            CR: 0,
            Stats: [],
            Abilities: [],
            Variants: [] // to be added later, but think of Otyugh, it has various types such as Mutant or Oozing
        };

        init();

        function init() {
            vm.CoreMonsters = MonsterService.GetCoreTypes();
            vm.MonsterTemplates = TemplateService.GetTemplates();
        }

        function UpdateStats() {
            if (!!vm.Monster && !!vm.Monster.Core) {
                vm.Monster.Stats = [];
            }

            vm.Monster.Core.Stats.forEach(function (entry) {
                vm.Monster.Stats.push(UpdateStat(entry));
            });

            vm.Monster.CR = CalculateCR(vm.Monster.Core.CR, vm.Monster.Template.CR);
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
})();
