(function () {
// Responsible for keeping track of the Core Monster Types
myApp.service('MonsterService', function () {
    var service = this;
        
    // Make the following funciton publicly accesible
    service.GetCoreTypes = GetCoreTypes;

    // Where we cache the types after calling them from some resource
    service.CoreTypes = [
        {
            Name: "Goblin",
            CR: 0.33,
            Description: "This creature stands barely three feet tall, its scrawny, humanoid body dwarfed by its wide, ungainly head.",
            Stats: [
                {
                    Name: "AC",
                    Value: {
                        AC: 16,
                        TouchAC: 16,
                        FlatFootedAC: 14
                    }
                },
                {
                    Name: "ACstring",
                    Value: '+2 armor, +2 Dex, +1 shield, +1 size'
                },

                { Name: "Alignment", Value: 'NE' },
                { Name: "Size", Value: 'Small' },
                { Name: "Type", Value: 'Humanoid (Goblinoid)' },
                { Name: "HP", Value: 6 },
                { Name: "HPstring", Value: '(1d10+1)' },
                { Name: "Senses", Value: [ 'darkvision 60ft', 'Perception -1' ] },

                { Name: "Fort", Value: 3 },
                { Name: "Ref", Value: 3 },
                { Name: "Will", Value: -3 },

                { Name: "Speed", Value: ['30ft'] },
                { Name: "Attacks", Value: ['short sword +2 (1d4/19-20)', 'short bow +4 (1d4/x3)'] },

                { Name: "Str", Value: 11 },
                { Name: "Dex", Value: 15 },
                { Name: "Con", Value: 12 },
                { Name: "Int", Value: 10 },
                { Name: "Wis", Value: 9 },
                { Name: "Cha", Value: 6 },

                { Name: "BAB", Value: 1 },
                { Name: "CMB", Value: 0 },
                { Name: "CMD", Value: 12 },

                { Name: "Feats", Value: ['Improved Initiative'] },
                {
                    Name: "Skills", Value: [
                        { Name: 'Ride', Value: 10 },
                        { Name: 'Stealth', Value: 10 },
                        { Name: 'Swim', Value: 4 }
                    ]
                },
                {
                    Name: "RacialMods", Value: [
                        { Name: 'Ride', Value: 10 },
                        { Name: 'Stealth', Value: 10 },
                    ]
                },
                { Name: "Languages", Value: ['Goblin'] }
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

})();