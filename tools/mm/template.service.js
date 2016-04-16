(function () {    
    // Responsible for keeping track of the Monster Templates
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

})();