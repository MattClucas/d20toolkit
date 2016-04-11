(function () {
    myApp.controller("MonsterStatBlockCtrl", function ($scope, MonsterService, TemplateService) {
        var vm = this; // just something that needs to be done to setup the syntax in-html: "monsterController.Monster"
        
        vm.altStatDisplay = false;

        vm.Monster = {
            Core: {},
            Template: {},
            CR: 0,
            Stats: {// Info is 
                // Initial Info
                XP: 0,
                Alignment: '',
                Size: '',
                Type: '',
                Init: 0,
                Senses: [],

                // Defense Info
                AC: [], // Includes Base, Touch, FF, etc.
                HP: 0,
                HPstring: '', // used for " 39 (6d8+18) " stuff
                Fort: 0,
                Ref: 0,
                Will: 0,
                Immunities: [],
                Resistances: [],

                // Offense Info
                Speed: [],
                Attacks: [],
                Space: '',
                Reach: '',
                SpecialAttacks: [],

                // Stats Info
                Str: 0,
                Dex: 0,
                Con: 0,
                Int: 0,
                Wis: 0,
                Cha: 0,
                BAB: 0,

                CMB: 0,
                CMBstring: '',
                CMD: 0,
                CMDstring: '',

                Feats: [],
                Skills: [],
                RacialModifiers: [],
                Languages: []
            },
            Abilities: [],
            Variants: [] //to be improved later
        };
        
        // At this point, the Directive loading the HTML and this controller will have already existing scope variables,
        // The monster itself.
        function init() {
            if (!!vm.MonsterPreParse) {
                vm.MonsterPreParse.Stats.forEach(function (stat) {
                    vm.Monster.Stats[stat.Name] = stat.Value;
                });

                console.log(vm.Monster.Stats.Size);
                console.log(vm.Monster.Stats.Type);
            }
        }

        init();
    });
})();
