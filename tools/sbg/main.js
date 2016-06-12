window.onload = function()
{
    var creatureFormInputs = [
        StatInputFactory.createSmallTextInput("creatureName", "Name", "Shedu"),
        StatInputFactory.createLargeTextInput("FlavorText", "Flavor Text", "This noble creature stands strong and tall with the body of a powerful bull and the head of a wise-looking human."),
        StatInputFactory.createNumberInput("challengeRating", "CR"),
        StatInputFactory.createNumberInput("experiencePoints", "XP"),
        StatInputFactory.createListInput("Alignment", PATHFINDER_ALIGNMENTS),
        StatInputFactory.createListInput("SizeCategory", PATHFINDER_SIZE_CATEGORIES),
        StatInputFactory.createListInput("CreatureType", PATHFINDER_CREATURE_TYPES),
        StatInputFactory.createListInput("Subtype", PATHFINDER_CREATURE_SUB_TYPES),
        StatInputFactory.createNumberInput("Initiative", "Init"),
        StatInputFactory.createListInput("Senses", PATHFINDER_SENSES, "Senses (ft)", true, true, true),
        StatInputFactory.createNumberInput("ac", "AC"),
        StatInputFactory.createNumberInput("touch", "Touch"),
        StatInputFactory.createNumberInput("flatFooted", "Flat Footed"),
        StatInputFactory.createNumberInput("hp", "HP"),
        // TODO defensive monster abilities (regeneration, fast heal, special monster abilities)
        StatInputFactory.createNumberInput("fortitude", "Fortitude"),
        StatInputFactory.createNumberInput("reflex", "Reflex"),
        StatInputFactory.createNumberInput("will", "Will"),
        StatInputFactory.createListInput("dr", PATHFINDER_DAMAGE_REDUCTION_TYPES, "Damage Reduction", true, true, true),
        StatInputFactory.createListInput("energyResistance", PATHFINDER_ENERGY_TYPES, "Resistance", true, false, true),
        StatInputFactory.createNumberInput("spellResistance", "Spell Resistance"),
        StatInputFactory.createListInput("speed", PATHFINDER_MOVEMENT_TYPES, "Speed (feet/round)", true, false, true),
        // TODO attack input
        StatInputFactory.createNumberInput("space", "Space (ft)"),
        StatInputFactory.createNumberInput("reach", "Reach (ft)"),
        // TODO offensive monster abilities
        StatInputFactory.createNumberInput("casterLevel", "Caster Level"),
        StatInputFactory.createNumberInput("Concentration"),
        StatInputFactory.createListInput("spellLikeAbilitiesConstant", PATHFINDER_SPELLS, "Spell-Like Abilites - Constant", true, true),
        StatInputFactory.createListInput("spellLikeAbilities", PATHFINDER_SPELLS, "Spell-Like Abilites (with amount per day)", true, true, true),
        StatInputFactory.createNumberInput("Strength", null, 0),
        StatInputFactory.createNumberInput("Dexterity", null, 0),
        StatInputFactory.createNumberInput("Constitution", null, 0),
        StatInputFactory.createNumberInput("Intelligence", null, 0),
        StatInputFactory.createNumberInput("Wisdom", null, 0),
        StatInputFactory.createNumberInput("Charisma", null, 0),
        StatInputFactory.createNumberInput("bab", "Base Attack Bonus"),
        StatInputFactory.createNumberInput("cmb", "Combat Maneuver Bonus"),
        StatInputFactory.createNumberInput("cmd", "Combat Maneuver Defense"),
        StatInputFactory.createListInput("feats", PATHFINDER_FEATS, "Feats", true, true),
        StatInputFactory.createListInput("skills", PATHFINDER_SKILLS, "Skills", true, true, true),
        StatInputFactory.createListInput("languages", PATHFINDER_LANGUAGES, "Languages", true, true)
        // TODO special abilities
        // TODO environment
        // TODO organization
        // TODO treasure
        // TODO ecology description
    ];

    var $mainForm = $("#mainForm");
    creatureFormInputs.forEach(function(input)
    {
        var $inputDom = input.createInputDom();
        $mainForm.append($inputDom);
    });

};