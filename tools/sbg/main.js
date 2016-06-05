window.onload = function()
{
    var creatureFormInputs = [
        StatInputFactory.createSmallTextInput("creatureName", "Name", "Richmond"),
        StatInputFactory.createLargeTextInput("FlavorText", "Flavor Text", "This noble creature stands strong and tall with the body of a powerful bull and the head of a wise-looking human."),
        StatInputFactory.createNumberInput("challengeRating", "CR"),
        StatInputFactory.createNumberInput("experiencePoints", "XP"),
        StatInputFactory.createListInput("Alignment", [
            "LG",
            "LN",
            "LE",
            "NG",
            "N",
            "NE",
            "CG",
            "CN",
            "CE"
        ]),
        StatInputFactory.createListInput("SizeCategory", [
            "Fine",
            "Diminutive",
            "Tiny",
            "Small",
            "Medium",
            "Large",
            "Huge",
            "Gargantuan",
            "Colossal"
        ]),
        StatInputFactory.createListInput("CreatureType", [
            "Aberration",
            "Animal",
            "Construct",
            "Dragon",
            "Fey",
            "Humanoid",
            "Magical Beast",
            "Monstrous Humanoid",
            "Ooze",
            "Outsider",
            "Plant",
            "Undead",
            "Vermin"
        ]),
        StatInputFactory.createListInput("Subtype", [
            "adlet",
            "aeon",
            "agathion",
            "air",
            "angel",
            "aquatic",
            "archon",
            "asura",
            "augmented",
            "azata",
            "behemoth",
            "catfolk",
            "chaotic",
            "clockwork",
            "cold",
            "colossus",
            "daemon",
            "dark folk",
            "deep one",
            "demodand",
            "demon",
            "devil",
            "div",
            "dwarf",
            "earth",
            "elemental",
            "elf",
            "evil",
            "extraplanar",
            "fire",
            "giant",
            "gnome",
            "goblinoid",
            "godspawn",
            "good",
            "great old one",
            "halfling",
            "herald",
            "human",
            "incorporeal",
            "inevitable",
            "kaiju",
            "kami",
            "kasatha",
            "kitsune",
            "kyton",
            "lawful",
            "leshy",
            "mythic",
            "native",
            "nightshade",
            "oni",
            "orc",
            "protean",
            "psychopomp",
            "qlippoth",
            "rakshasa",
            "ratfolk",
            "reptilian",
            "robot",
            "samsaran",
            "sasquatch",
            "shapechanger",
            "swarm",
            "troop",
            "udaeus",
            "unbreathing",
            "vanara",
            "vishkanya",
            "water"
        ]),
        StatInputFactory.createNumberInput("Initiative", "Init"),
        StatInputFactory.createListInput("Senses", [
            "Blindsight",
            "Blindsense",
            "Darkvision 60ft",
            "Darkvision 120ft",
            "Detect Chaos",
            "Detect Evil",
            "Detect Good",
            "Detect Law",
            "Low-light Vision",
            "Scent",
            "True Seeing"
        ], null, true, true),
        StatInputFactory.createNumberInput("armorClass", "AC"),
        StatInputFactory.createNumberInput("touch", "Touch"),
        StatInputFactory.createNumberInput("flatFooted", "Flat Footed"),
        StatInputFactory.createNumberInput("healthPoints", "HP"),
        // TODO defensive monster abilities (regeneration, fast heal, special monster abilities)
        StatInputFactory.createNumberInput("fortitude", "Fortitude"),
        StatInputFactory.createNumberInput("reflex", "Reflex"),
        StatInputFactory.createNumberInput("will", "Will"),
        StatInputFactory.createListInput("damageReduction", [
            "Adamantine",
            "Bludgeoning",
            "Chaos",
            "Cold Iron",
            "Epic",
            "Evil",
            "Good",
            "Law",
            "Magic",
            "Piercing",
            "Silver",
            "Slashing"
        ], "DR", false, true, true),
        StatInputFactory.createListInput("energyResistance", [
            "Acid",
            "Cold",
            "Electricity",
            "Fire",
            "Sonic"
        ], "Resistance", true, false, true),
        StatInputFactory.createNumberInput("spellResistance", "Spell Resistance"),
        StatInputFactory.createListInput("speed", [
            "Burrow",
            "Climb",
            "Fly (Clumsy)",
            "Fly (Poor)",
            "Fly (Average)",
            "Fly (Good)",
            "Fly (Perfect)",
            "Land",
            "Swim"
        ], "Speed (feet/round)", true, false, true),
        // TODO attack input
        StatInputFactory.createNumberInput("space", "Space (ft)"),
        StatInputFactory.createNumberInput("reach", "Reach (ft)"),
        // TODO offensive monster abilities
        StatInputFactory.createNumberInput("casterLevel", "Caster Level"),
        StatInputFactory.createNumberInput("Concentration"),
        StatInputFactory.createListInput("spellLikeAbilitiesConstant", ALL_PATHFINDER_SPELLS, "Spell-Like Abilites - Constant", true, true)
    ];

    var $mainForm = $("#mainForm");
    creatureFormInputs.forEach(function(input)
    {
        var $inputDom = input.createInputDom();
        $mainForm.append($inputDom);
    });

};