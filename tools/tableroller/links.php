<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Table Roller Links</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../../css/bootstrap.min.css" media="screen">
        <link rel="stylesheet" href="../../css/bootswatch.min.css">
        <style>
            .block {
                float: left;
                width: initial;
                margin-left: 5px;
            }
            .blockHolder {
                clear: left;
            }
        </style>
    </head>
    <body>
        <?php
            include_once('../../stats.php');
            include_once('../../header/header.php');
        ?>
        <div class="container">
            <h1>Table Roller Links</h1>

            <!-- Link to specific table sections -->
            <a href="#Encounters">Encounters</a><br/>
            <a href="#Magic-Items">Magic Items</a><br/>
            <a href="#Miscellaneous">Miscellaneous</a><br/>

            <!-- Begin the blocks of tables -->
            <div class="blockHolder">
                <h2 id="Encounters">Encounters</h2>
                <table class="table table-striped table-bordered block">
                    <tr><th>By Location</th><th>Average CR</th></tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1d6+dire+rats%0D%0A1d6+fire+beetles%0D%0A1d6+human+skeletons%0D%0A1d4+giant+centipedes%0D%0A1+spider+swarm%0D%0A1d6+human+zombies%0D%0A1+choker%0D%0A1+skeletal+champion%0D%0A2d6+goblins%0D%0A1d4+ghouls%0D%0A1d4+giant+spiders%0D%0A1+cockatrice%0D%0A1+gelatinous+cube%0D%0A1+rust+monster%0D%0A1+shadow%0D%0A1+wight%0D%0A2d4+stirges%0D%0A1d6+darkmantles%0D%0A1d6+troglodytes%0D%0A1d4+bugbears%0D%0A1d4+vargouilles%0D%0A1+gray+ooze%0D%0A1+mimic%0D%0A1+ogre">
                                Dungeon
                            </a>
                        </td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+gelatinous+cube%0D%0A1+rust+monster%0D%0A2d4+stirges%0D%0A1+gray+ooze%0D%0A1+mimic%0D%0A1+basilisk%0D%0A1+cloaker%0D%0A1+gibbering+mouther%0D%0A1+ochre+jelly%0D%0A1+wraith%0D%0A1+bearded+devil%0D%0A1d4+shadows%0D%0A1d4+wights%0D%0A1d8+skeletal+champions%0D%0A2d4+ghouls+plus+1+ghast%0D%0A1+ettin%0D%0A1+minotaur%0D%0A1d4+ogres%0D%0A1d4+trolls%0D%0A1+babau%0D%0A1+black+pudding%0D%0A1+medusa%0D%0A1+shadow+demon%0D%0A1d4+xills">
                                Dungeon
                            </a>
                        </td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+black+pudding%0D%0A1+dark+naga%0D%0A1+mohrg%0D%0A1+nabasu%0D%0A1d6+cloakers%0D%0A1d6+wraiths%0D%0A1d4+ettins%0D%0A1+bone+devil%0D%0A1+night+hag%0D%0A1+spirit+naga%0D%0A1+vampire%0D%0A1+vrock%0D%0A1d6+minotaurs%0D%0A2d4+trolls%0D%0A1d4+greater+shadows%0D%0A1+bebilith%0D%0A1+barbed+devil%0D%0A1+devourer%0D%0A1+hezrou%0D%0A1d4+rakshasas%0D%0A1+lich%0D%0A1+glabrezu%0D%0A1+ice+devil%0D%0A1+nalfeshnee">
                               Dungeon
                            </a>
                        </td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=2d6+duergar%0D%0A1d6+cave+fishers%0D%0A1+basidirond%0D%0A2d6+drow+and+1+drow+noble%0D%0A2d6+giant+spiders%0D%0A1d6+violet+fungi%0D%0A1d8+derros%0D%0A2d6+morlocks%0D%0A1+black+pudding%0D%0A1+giant+slug%0D%0A1d6+cloakers%0D%0A2d6+dark+creepers%2C+1+dark+stalker%0D%0A1d6+driders%0D%0A1d6+intellect+devourers%0D%0A1+purple+worm%0D%0A1d4+ropers%0D%0A1+neothelid%0D%0A1+shoggoth">
                                Underground
                            </a>
                        </td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+spider+swarm%0D%0A1+rat+swarm%0D%0A2d6+human+skeletons%0D%0A1d6+stirges%0D%0A1+assassin+vine%0D%0A1d6+ghouls%0D%0A1+barghest%0D%0A1d6+skeletal+champions%0D%0A1d4+yeth+hounds%0D%0A1d6+ogres%0D%0A1d6+shadows%0D%0A1d6+wights%0D%0A1+lamia%0D%0A1d6+harpies%0D%0A1+medusa%0D%0A1+nabasu%0D%0A1+dark+naga%0D%0A1d8+gargoyles%0D%0A1d6+cyclopes%0D%0A1d6+wraiths%0D%0A1+behir%0D%0A1+sphinx%0D%0A1+spirit+naga%0D%0A1d4+spectres">
                                Ruined City
                            </a>
                        </td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1d6+dogs%0D%0A1+rat+swarm%0D%0A1d6+riding+dogs%0D%0A1+werewolf%0D%0A3d6+dire+rats%0D%0A2d6+tengus%0D%0A2d6+tieflings%0D%0A1d6+ghouls%0D%0A1d6+doppelgangers%0D%0A2d6+wererats%0D%0A1+succubus%0D%0A1d6+jann%0D%0A1d8+gargoyles%0D%0A1+mohrg%0D%0A1+intellect+devourer+%28body+theft%29%0D%0A1+vampire%0D%0A1+night+hag%0D%0A1+rakshasa">
                                Urban/Dangerous City
                            </a>
                        </td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+giant+crab%0D%0A1+bunyip%0D%0A1+draugr+captain%0D%0A1+kelpie%0D%0A1d6+reefclaws%0D%0A1d6+draugr%0D%0A1+globster%0D%0A1d4+tidepool+dragons+%28Pathfinder+%2355+82%29%0D%0A1+saltwater+merrow%0D%0A2d4+jinx+eaters%0D%0A1d6+pteranodons%0D%0A1+shark-eating+crab%0D%0A1d4+sea+drakes%0D%0A1+coral+golem%0D%0A1d6+duppies%0D%0A1d4+giant+snapping+turtles">
                                Coastal
                            </a>
                        </td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1d4+dolphins%0D%0A1+incutilis%0D%0A1d4+hippocampi%0D%0A2d6+merfolk%0D%0A2d6+grindylows%0D%0A2d4+stingrays%0D%0A1d8+manta+rays%0D%0A2d4+sea+snakes%0D%0A1+grodair%0D%0A1d6+adaros%0D%0A1d4+cecaelias%0D%0A1+tylosaurus%0D%0A1d6+giant+moray+eels%0D%0A1d4+giant+sea+snakes%0D%0A1+dire+shark%0D%0A1+nereid">
                                Shallows
                            </a>
                        </td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+giant+sea+anemone%0D%0A1d4+death%27s+head+jellyfish%0D%0A1d4+sharks%0D%0A1d8+tritons%0D%0A1d4+ceratioidi%0D%0A1d4+weresharks%0D%0A1d4+devilfish%0D%0A1+sea+scourge%0D%0A1d6+jellyfish+swarms%0D%0A1d6+giant+jellyfish%0D%0A1+charybdis%0D%0A1+shipwrecker+crab%0D%0A1+great+white+whale%0D%0A1+lusca%0D%0A1+kraken%0D%0A1+deep+sea+serpent">
                                Deep Sea
                            </a>
                        </td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+monkey+swarm%0D%0A2d4+baboons%0D%0A1d4+garden+oozes%0D%0A2d6+kuru%0D%0A1d4+chickcharneys%0D%0A1d6+giant+chameleons%0D%0A1+elder+nirento%0D%0A1d4+archelons%0D%0A1d6+cyclopes%0D%0A1d4+soucouyants%0D%0A1+larabay%0D%0A1d4+jungle+giants%0D%0A1d4+gholdakos%0D%0A1+storm+giant%0D%0A1+jubjub+bird%0D%0A1d4+kongamatos">
                                Islands
                            </a>
                        </td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1d4+merfolk%0D%0A1+fuath%0D%0A1d4+grindylows%0D%0A1+squid%0D%0A1d6+dolphins%0D%0A1d6+locathahs%0D%0A1+adaro%0D%0A1+bunyip%0D%0A1+wereshark%0D%0A1d8+stingrays%0D%0A1d4+reefclaws%0D%0A2d6+grindylows%0D%0A1+sea+hag%0D%0A1+cecaelia%0D%0A1d4+draugr+pirates%0D%0A1+giant+moray+eel%0D%0A1+globster%0D%0A1d6+sahuagin%0D%0A1+jellyfish+swarm%0D%0A1d8+sharks">
                                Low-level Oceans
                            </a>
                        </td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+octopus%0D%0A2d6+dolphins%0D%0A2d6+merfolk%0D%0A1+sea+hag%0D%0A1d6+squid%0D%0A1d6+water+mephits%0D%0A1+aboleth%0D%0A1+giant+octopus%0D%0A2d6+sahuagin%0D%0A2d6+sharks%0D%0A2d6+skum%0D%0A1d6+giant+moray+eels%0D%0A1d6+Large+water+elementals%0D%0A1+dire+shark%0D%0A1+dragon+turtle%0D%0A1+giant+squid%0D%0A1d4+elasmosauruses%0D%0A2d4+orcas%0D%0A1+young+bronze+dragon%0D%0A1+marid%0D%0A1+elder+water+elemental%0D%0A1+sea+serpent%0D%0A1+kraken%0D%0A1+shoggoth">
                                Ocean
                            </a>
                        </td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+constrictor+snake%0D%0A1+hydra%0D%0A1+leech+swarm%0D%0A1+gray+ooze%0D%0A1+green+hag%0D%0A1+ochre+jelly%0D%0A2d6+stirges%0D%0A1d6+crocodiles%0D%0A2d6+giant+frogs%0D%0A2d6+goblin+dogs%0D%0A1d4+harpies%0D%0A2d6+lizardfolk%0D%0A2d6+boggards%0D%0A1+chuul%0D%0A1+dracolisk%0D%0A2d6+giant+leeches%0D%0A1+young+black+dragon%0D%0A1+giant+slug%0D%0A1d6+shambling+mounds%0D%0A1+spirit+naga%0D%0A1d6+will-o%27-wisps%0D%0A1+dire+crocodile%0D%0A1+giant+flytrap%0D%0A1+froghemoth">
                                Swamp
                            </a>
                        </td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+giant+spider%0D%0A1+skeletal+champion%0D%0A1d8+skeletons%0D%0A1+bat+swarm%0D%0A1+giant+scorpion%0D%0A1d3+dire+bats%0D%0A1d6+venomous+snakes%0D%0A1+basilisk%0D%0A1+mummy%0D%0A1d4+jann%0D%0A1+lamia%0D%0A2d6+giant+ants%0D%0A1+young+brass+dragon%0D%0A2d6+gnolls+and+1d4+hyenas%0D%0A1+remorhaz+%28cold+desert+only%29%0D%0A1+behir%0D%0A1+sphinx%0D%0A1+young+blue+dragon%0D%0A1+adult+brass+dragon%0D%0A1+adult+blue+dragon">
                                Desert
                            </a>
                        </td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+bat+swarm%0D%0A1+yellow+musk+creeper%0D%0A1d4+giant+spiders%0D%0A1+assassin+vine%0D%0A1+giant+mantis%0D%0A1+unicorn%0D%0A1d4+dire+bats%0D%0A1d4+boars%0D%0A1+dire+boar%0D%0A1+giant+stag+beetle%0D%0A1+owlbear%0D%0A1+tiger%0D%0A1d6+werewolves%0D%0A1d4+dire+wolves%0D%0A1+ettercap+and+1d6+giant+spiders%0D%0A2d6+goblins+and+1d4+goblin+dogs%0D%0A1+barghest+and+2d6+goblins%0D%0A1d6+centaurs%0D%0A2d6+wolves%0D%0A1+nymph%0D%0A1+dire+tiger%0D%0A1+young+green+dragon%0D%0A1d4+shambling+mounds%0D%0A1+treant">
                                Temperate Forest
                            </a>
                        </td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+bat+swarm%0D%0A1+yellow+musk+creeper%0D%0A1+constrictor+snake%0D%0A1d6+giant+centipedes%0D%0A1+leopard%0D%0A1d4+giant+spiders%0D%0A1d6+venomous+snakes%0D%0A1d4+boars%0D%0A1+dire+boar%0D%0A1+tiger%0D%0A1+giant+frilled+lizard%0D%0A1d6+monitor+lizards%0D%0A1+army+ant+swarm%0D%0A1+ankylosaurus%0D%0A1d6+dire+apes%0D%0A2d4+gorillas%0D%0A2d4+deinonychuses%0D%0A1+nymph%0D%0A1d4+girallons%0D%0A1+dire+tiger%0D%0A1d4+shambling+mounds%0D%0A1+treant%0D%0A1+tyrannosaurus%0D%0A1+brachiosaurus">
                                Warm Jungle
                            </a>
                        </td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1d6+eagles%0D%0A2d6+orcs%0D%0A2d6+tengus%0D%0A2d6+hobgoblins%0D%0A1d4+giant+eagles%0D%0A1d6+ogres%0D%0A1+young+white+dragon%0D%0A1+bulette%0D%0A1+chimera%0D%0A1d6+griffons%0D%0A2d4+bugbears%0D%0A1d6+cyclopes%0D%0A1+gorgon%0D%0A1d4+wyverns%0D%0A1d6+trolls%0D%0A1+ogre+mage%0D%0A1+roc%0D%0A1d6+hill+giants%0D%0A1+young+silver+dragon%0D%0A1+young+red+dragon%0D%0A1d4+frost+giants%0D%0A1d6+stone+giants%0D%0A1+cloud+giant%0D%0A1d4+fire+giants">
                                Hill/Mountains
                            </a>
                        </td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+cheetah%0D%0A1+cockatrice%0D%0A1+giant+scorpion%0D%0A1+dire+lion%0D%0A1+giant+frilled+lizard%0D%0A1d6+ankhegs%0D%0A1d6+pteranodons%0D%0A1d8+monitor+lizards%0D%0A1d6+dire+hyenas%0D%0A2d6+hyenas%0D%0A2d6+gnolls%0D%0A1d6+lions%0D%0A2d6+giant+ants%0D%0A2d4+pegasi%0D%0A2d6+centaurs%0D%0A1+dire+tiger%0D%0A1d6+ankylosauruses%0D%0A1d6+stegosauruses%0D%0A2d4+rhinoceroses%0D%0A1+young+gold+dragon%0D%0A2d4+elephants%0D%0A1d6+tyrannosauruses%0D%0A1d8+triceratops%0D%0A1d6+brachiosauruses">
                                Warm Plains/Savannah
                            </a>
                        </td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+ghoul%0D%0A1+skulk%0D%0A1+cave+fisher%0D%0A1+rat+swarm%0D%0A1d4+yellow+musk+zombies%0D%0A2d3+dire+rats%0D%0A1+ice+mephit%0D%0A2d4+raiders+%28human+rogue+2%29%0D%0A2d3+stirges%0D%0A1+yeth+hound%0D%0A1+decapus%0D%0A1d4+giant+spiders%0D%0A1+ogre%0D%0A1+yeti%0D%0A1+Huge+plague+zombie%0D%0AMiners%0D%0AColonists+or+pilgrims%0D%0A1+polar+bear">
                                Cold Mountains
                            </a>
                        </td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+dire+polar+bear%0D%0A1+hill+giant%0D%0A1+remorhaz%0D%0A1+crag+spider%0D%0A1+Denizen+of+Leng%0D%0A2d3+harpies%0D%0A2d4+raiders+%28CN+human+rogues+4%29%0D%0A2+shambling+mounds%0D%0AColonists+or+pilgrims%0D%0A3+xorn%0D%0A2d4+lamias%0D%0A1+roc%0D%0A3d4+ogres%0D%0A2+stone+giants%0D%0A2d4+winter+wolves%0D%0A3+frost+drakes%0D%0ASkulk+natives+%28N+skulk+cleric+5+and+2d6+skulks%29%0D%0AYeti+tribe+%28yeti+barbarian+8+and+2d4+yetis%29">
                                Cold Mountains
                            </a>
                        </td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=2d3+frost+giants%0D%0A2d3+crag+spiders%0D%0A2d4+Denizen+of+Leng%0D%0A2+cloud+giants%0D%0A2d6+hill+giants%0D%0A1+storm+giant%0D%0A2d4+stone+giants%0D%0A1+lamia+matriarch+sorcerer+5%0D%0A1+mountain+roper+%28advanced+roper%29%0D%0A1+advanced+ice+devil%0D%0A3d4+advanced+frost+drakes%0D%0A1+ancient+white+dragon%0D%0A1d4+taiga+giants%0D%0A1+rune+giant%0D%0A1+ice+linnorm%0D%0A1+wendigo%0D%0ACE+human+transmuter+19">
                                Cold Mountains
                            </a>
                        </td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=Denizen+of+Leng%0D%0AAvalanche%0D%0A1d4+remorhazes%0D%0A2d6+kuchrima%0D%0A1d6+crag+spiders%0D%0A1d4+rocs%0D%0AMature+adult+white+dragon%0D%0A1d4%2B1+frost+giants%0D%0AFrost+worm%0D%0AAbominable+snowman%0D%0A1d4+cloud+giants%0D%0A12-headed+cryohydra%0D%0AIce+devil%0D%0ARune+giant%0D%0AAdult+blue+dragon%0D%0AWendigo">
                                High Mountains
                            </a>
                        </td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=2d4+duergar%0D%0A1+cockroach+swarm%0D%0A2d6+drow%0D%0A1+gelatinous+cube%0D%0A1d4+svirfneblin+scouts%0D%0A1d6+vegepygmy%0D%0A1d3+morlock+scavengers%0D%0A1d6+jinkins+or+vexgits%0D%0A1d4+derro+scouts%0D%0A2d4+ghouls%0D%0A1+ochre+jelly%0D%0A2d4+troglodyte+raiders+plus+d3%E2%80%931+monitor+lizards%0D%0A1d2+basidironds%0D%0A1d4+id+oozes+%28see+gray+ooze%29%0D%0A1+lurker+above">
                                Underground City
                            </a>
                        </td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="http://localhost/tools/tableroller/tableroller.php?t=1+black+pudding%0D%0A2d4+drow+warrior+1+and+1d3+drow+noble+cleric+3%0D%0A2d4+morlocks%0D%0A3d4+derros+%28including+1+derro+sorcerer+4%29%0D%0A1+giant+slug%0D%0A1+intellect+devourer+%28in+a+host+body%29%0D%0A4d3+skum%0D%0A1+titan+centipede%0D%0A1d4%2B1+urdefhans+on+skavelings%0D%0A1d6+fungal+mounds+%28shambling+mounds+with+fungal+creature+template%29%0D%0A3d4+gargoyles%0D%0A1+young+roper%0D%0A2d4+seugathi%0D%0A1+purple+worm">
                                Underground City
                            </a>
                        </td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+purple+worm%0D%0A1d4+elder+earth+elementals%0D%0A2d4+vrocks%0D%0A1+adult+umbral+dragon%0D%0A2d6+intellect+devourers+%28in+host+bodies+of+CR+2%E2%80%938%2C+25%25+chance+leader+is+an+8th-level+sorcerer%29%0D%0A1+worm+that+walks%0D%0A1d10+gugs%0D%0A1d6+ropers%0D%0A4d3+advanced+seugathi+led+by+1+neothelid%0D%0A1+shoggoth">
                                Underground City
                            </a>
                        </td>
                        <td>14.5</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+venomous+snake%0D%0A1d4+hadi%0D%0A1+bat+swarm%0D%0A1+constrictor+snake%0D%0A1+Small+animated+object%0D%0A1+hadi+tafen%0D%0A1+shadow%0D%0A1d4+boars%0D%0A1+army+ant+swarm%0D%0A1+derhii%0D%0A1d4+dire+apes%0D%0A1+frothing+ooze+%28use+some+other+CR+5+ooze+that+can+be+in+a+ruined+city%29%0D%0A1d4+water+mephits%0D%0A1+girallon%0D%0A1+wyvern">
                                Ruined City
                            </a>
                        </td>
                        <td>3.6</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+hadi+tafen+and+1d6+rat+swarms%0D%0A1+umber+jelly+%28use+some+sort+of+CR+6+jelly%29%0D%0A1d6+monitor+lizards%0D%0A1d6+morlocks%0D%0A1d6+shadows%0D%0A2d6+hadi+rajwans%0D%0A1+crystal+xorn+%28xorn+with+crystal+creature+template%29%0D%0A1d4+manticores%0D%0A1d4+Large+animated+objects%0D%0A1d8+centipede+swarms%0D%0A1+deadfall+scorpion%0D%0A3d4+Medium+animated+objects%0D%0A1+leukodaemon%0D%0A1+marid+and+1d6+water+mephits%0D%0A1+marid+and+2+derhii%0D%0A1+greater+shadow+and+3d6+shadows">
                                Ruined City
                            </a>
                        </td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=2+leukodaemons+and+2d6+hadi+rajwans%0D%0A1+giant+stone+golem%0D%0A1+crystal+elder+xorn+and+1d8+crystal+xorn%0D%0A3d6+army+ant+swarms%0D%0A1+morlock+war+party+%281+morlock+cleric+8%2C+1d4+morlock+barbarians+5%2C+and+3d6+morlocks%29%0D%0A2+marids+and+2+elder+water+elementals%0D%0A1+marid+hunting+party+%281+noble+marid%2C+1d4+marids%2C+and+3d4+derhii+guards%29%0D%0A1+astradaemon">
                                Ruined City
                            </a>
                        </td>
                        <td>13</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=Important+person+%28noble+or+royal%29%0D%0AImportant+person+%28arbiter+or+magistrate%29%0D%0APeasants+blocking+path%0D%0APushy+vendor%0D%0APickpocket+%28rogue+1%3B+Sleight+of+Hand+%2B7%29%0D%0ABar+brawl+spreads+to+street+%282d6+commoner+1%29%0D%0A1d3+thugs%0D%0A1d3+Knights+%28fighter+4%29%0D%0A2d4+Heavy+cavalry%0D%0A1d3+Elite+marines">
                                City Streets
                            </a>
                        </td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=Beggar%0D%0APeasants+blocking+path%0D%0ARobbery+in+progress+%281d4+thugs%29%0D%0APickpocket+%28rogue+1%3B+Sleight+of+Hand+%2B7%29%0D%0A1d3+stirges%0D%0A1+rat+swarm%0D%0A2d4+Small+monstrous+spiders%0D%0A1d4+thugs%0D%0A2d4+Guards%0D%0A1d4+Knights+%28fighter+4%29">
                                Slums
                            </a>
                        </td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=Dead+body%0D%0AInteresting+flotsam%0D%0A1d4+wererats%0D%0A1d3+violet+fungi%0D%0A2d6+goblins%0D%0A1d3+will-%27o-wisp%0D%0A1d3+otyughs%0D%0A2d4+Guards%0D%0A1d3+Elite+marines%0D%0A2d4+thugs">
                                Sewers
                            </a>
                        </td>
                        <td>5.5</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+lacedon%0D%0A1d3+mining+beetles%0D%0A1+plague+steed+%28war+horse+with+plague+template%29%0D%0A1d3+yellow+musk+zombies%0D%0A1+abyssal+tick+swarm%0D%0A1d6+grindylows%0D%0A1+dretch%0D%0A2d3+stirges%0D%0A1+fiendish+werewolf%0D%0A1+lacedon%0D%0A1+cairn+wight%0D%0A1+centipede+swarm%0D%0A1+advanced+freshwater+merrow%0D%0A1+fiendish+dryad%0D%0A1+leech+swarm%0D%0A1d3+assassin+vines%0D%0A1+giant+moray+eel%0D%0A1+green+hag%0D%0A1+scrag">
                                Overgrown Fallen City
                            </a>
                        </td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+swamp+skulker%0D%0A2d3+fiendish+giant+frogs%0D%0A1+shambling+mound%0D%0A1+wood+golem%0D%0A2+half-fiend+dryads%0D%0A1+chuul%0D%0A2+fiendish+dire+wolverines%0D%0A1+freshwater+merrow+rogue%0D%0A2d3+frost+wights%0D%0A1+giant+slug%0D%0A2d3+giant+stag+beetles%0D%0A2d3+plague+aurochs+%28aurochs+with+plague+template%29%0D%0A1+fiendish+treant%0D%0A1d4%2B1+will-o%27-wisps%0D%0A2+fiendish+nymphs">
                                Overgrown Fallen City
                            </a>
                        </td>
                        <td>7.5</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+hezrou%0D%0A1+fiendish+giant+flytrap%0D%0A1+hezrou+and+1d6+scrags%0D%0A1+fiendish+elder+water+elemental%0D%0A2d3+chuuls%2C+1+advanced+giant+chuul%0D%0A1d3%2B1+giant+fiendish+treants%0D%0A1+green+hag+witch%0D%0A1+ancient+black+dragon%0D%0AAdvanced+dretch+ranger+2+on+yeth+hound">
                                Overgrown Fallen City
                            </a>
                        </td>
                        <td>13</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+reefclaw%0D%0A2d4+fire+beetles%0D%0A1d4+Small+fire+elementals%0D%0A1d4+giant+crabs%0D%0A2d4+burning+skeletons%0D%0A1+cult+raiding+party+%281d6+ooze-possessed+human+adepts%29%0D%0A1+phase+spider%0D%0A1d6+Medium+fire+elementals%0D%0A1+tear+of+Nuruu%27gal">
                                Ruined City Risen from the Sea
                            </a>
                        </td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+ghost%0D%0A2d6+ooze-possessed+human+adepts+3%2C+with+1+tear+of+Nuruu%27gal%0D%0A1d6+black+puddings+%28gibbering+hosts%29%0D%0A1d4+chuuls%0D%0A1d4+black+puddings+%28fire+puddings%29%0D%0A1d4+greater+fire+elementals%0D%0A1+shining+child%0D%0A3d6+will-o%27-wisps">
                                Ruined City Risen from the Sea
                            </a>
                        </td>
                        <td>9.5</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="http://localhost/tools/tableroller/tableroller.php?t=2d6+vrocks%0D%0A1d4+shining+children%0D%0A1d4+ooze-possessed+clerics%0D%0A2d6+salamanders+and+1d6+elder+fire+elementals%0D%0A1d4+nalfeshnees%0D%0ANuruu%27gal+%28Nurgal+Godling%29">
                                Ruined City Risen from the Sea
                            </a>
                        </td>
                        <td>15.6</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1d6+fire+beetles%0D%0A1+venomous+snake%0D%0A1+skeletal+champion%0D%0A1+vargouille%0D%0A1+giant+mantis%0D%0A1+shadow%0D%0A1+an-hetkoshu%0D%0A1+mithral+cobra%0D%0A1d6+gnoll+raiders%0D%0A1+fast+zombie+bulette%0D%0A1+mummy%0D%0A1d6+morlocks%0D%0A1+basilisk%0D%0A1d6+human+cultists%0D%0A1+will-o%27-wisp%0D%0A1+wyvern">
                                Ruined City in the Desert
                            </a>
                        </td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1d4+army+ant+swarms%0D%0A1+chimera%0D%0A1d6+fast+zombie+bulettes%0D%0ADark+stalker+ranger+4%0D%0A1+behir%0D%0A2d8+LE+human+clerics+3%0D%0A1d4+medusas%0D%0A1+couatl%0D%0A2+dark+nagas%0D%0A1+elder+air+elemental%0D%0A1+elder+earth+elemental">
                                Ruined City in the Desert
                            </a>
                        </td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="http://localhost/tools/tableroller/tableroller.php?t=1d6+panthereons+%28see+clay+golems%29%0D%0AThe+Enumerator%0D%0A1+phoenix%0D%0A1+xacarba%0D%0A2+black+scorpions%0D%0A1+ancient+blue+dragon">
                                Ruined City in the Desert
                            </a>
                        </td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="http://localhost/tools/tableroller/tableroller.php?t=2d6+monkeys%0D%0A1+leopard%0D%0A1d4+giant+spiders%0D%0A2d6+biloko%0D%0A1+botfly+swarm%0D%0A1+chemosit%0D%0A1d4+gorillas%0D%0A1d6+rangers%0D%0A1d6+venomous+snakes%0D%0A1+army+ant+swarm%0D%0A1d6+charau-ka%0D%0A1d4+deinonychuses%0D%0A1+giant+frilled+lizard%0D%0A1+hippopotamus%0D%0A1d8+tribesfolk%0D%0A1d4+rival+adventurers%0D%0A1+ankylosaurus%0D%0A1+bloodhaze+mosquito+swarm%0D%0A1d6+Eloko%0D%0A1+girallon%0D%0A1+dire+tiger%0D%0A1+tyrannosaurus">
                                Jungle
                            </a>
                        </td>
                        <td>5.5</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+cheetah+%28or+other+large+cat+%29%0D%0A1+cockatrice%0D%0A1+giant+scorpion%0D%0A1d4+bat+swarms%0D%0A1+botfly+swarm%0D%0A1d4+monitor+lizards%0D%0A1+rhinoceros%0D%0A1d6+venomous+snakes%0D%0A1d4+ankhegs%0D%0A1+dire+lion%0D%0A1d8+hyenas%0D%0A1d8+tribesfolk%0D%0A1d6+lions%0D%0A1d6+pteranodons%0D%0A1d6+rival+adventurers%0D%0A1d6+vultures%0D%0A2d4+ankhegs%0D%0A1+elephant%0D%0A2d6+giant+ants%0D%0A1+stegosaurus%0D%0A1+dire+tiger%0D%0A1+triceratops">
                                Plains
                            </a>
                        </td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1d4+dire+bats%0D%0A1d4+leopards%0D%0A1+tiger%0D%0A1+basilisk%0D%0A1d6+boars%0D%0A1d6+crocodiles%0D%0A1d4+dire+apes%0D%0A1+gibbering+mouther%0D%0A1+mummy%0D%0ARival+adventurers%0D%0A2d4+boggards%0D%0A1d6+keches%0D%0A1d6+pteranodons%0D%0A1d6+shadows%0D%0A2d6+troglodytes%0D%0A1d6+wights%0D%0A1+chimera%0D%0AGuard+patrol%0D%0A1d6+venomous+snake+swarm%0D%0A2d4+charau-ka+thugs%0D%0A1d8+degenerate+serpentfolk%0D%0A1d8+deinonychus%0D%0A1d4+girallons%0D%0A1d4+jungle+mantises%0D%0A1d4+camulatz%0D%0AMokele-mbembe%0D%0ASarcosuchus%0D%0A1d8+megapiranha+swarms%0D%0AYog%27oltha%0D%0AGreen+God">
                                Jungle City
                            </a>
                        </td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+cloaker%0D%0A4d6+morlocks%0D%0A1+bebilith%0D%0A6d6+morlocks%0D%0A2d6+skavelings%0D%0A1d4+urdefhan+guards%0D%0A1d4+black+puddings%0D%0A1+vagabond+spider%0D%0A2+morlock+vessels%0D%0A1+roper%0D%0A1+iron+golem%0D%0AUrdefhan+air+patrol+%284+members%29%0D%0A1d8+gugs%0D%0A1d8+giant+morlocks%0D%0AUrdefhan+air+patrol+%286+members%29%0D%0A6+serpentfolk+guards%0D%0A1+vemerak%0D%0A1+neothelid">
                                Ruined Underground City
                            </a>
                        </td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+giant+fire+beetle%0D%0A1+human+skeleton%0D%0A1+pugwampi%0D%0A1d4+baboons%0D%0A1+camel%0D%0A1d2+eagles%0D%0A1+Medium+viper%0D%0A1+choker%0D%0A1+dire+bat%0D%0A1+doru%0D%0A2d4+goblins%0D%0A1+jackalwere%0D%0A1d4+krenshar%0D%0A1+ankheg%0D%0A1d4+blink+dogs%0D%0A1+chupacabra%0D%0A1+giant+eagle%0D%0A1d2+hippogriffs%0D%0A1+Giant+scorpion%0D%0A1d2+lions%0D%0A1d4+Large+vipers%0D%0A1+centipede+swarm%0D%0A2d6+stirges%0D%0A1d2+griffons%0D%0A1d4+giant+eagles%0D%0A1+dire+lion%0D%0A2d6+gnolls%0D%0A1d4+harpies%0D%0A2d8+hyenas%0D%0A1+lamia%0D%0A1+dragonne%0D%0A1d6+gargoyles%0D%0A1+shedu%0D%0A1+juvenile+blue+dragon">
                                Ruined Desert Village
                            </a>
                        </td>
                        <td>3.5</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+monkey%0D%0A1+con+artist%0D%0A1+leper%0D%0A1+pickpocket%0D%0A1+prostitute%0D%0A1+zealous+merchant%0D%0A1d4+drunkards%0D%0A1+goblin+snake%0D%0A1+reefclaw%0D%0A1+Small+viper%0D%0A1d4+Small+monstrous+%3F%3F%3F%0D%0A1d4+stirges%0D%0A1d6+stray+dogs%0D%0A1d4+thugs%0D%0A1d4+goblin+dogs%0D%0A1d6+Giant+cockroaches%0D%0A1d8+pirates%0D%0A1d8+press+gangers%0D%0A1+rat+swarm%0D%0A1+barracuda%0D%0A1+wererat%0D%0A1d4+cockroach+swarms">
                                Lawless Port City
                            </a>
                        </td>
                        <td>1.26</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1d8+drain+spiders%0D%0A1d6+dire+rats%0D%0A2d8+rats%0D%0A1+reefclaw%0D%0A1d6+stray+dogs%0D%0A1d4+sewer+dwellers%0D%0A1+bat+swarm%0D%0A1d4+goblin+snakes%0D%0A1+tunnel+terror%0D%0A1d4+shriekers%0D%0A1d6+stirges%0D%0A1d6+thugs%0D%0A1d6+goblins%0D%0A1d4+rat+swarms%0D%0A1+violet+fungus%0D%0A1d4+alligators%0D%0A1+otyugh%0D%0A1d4+wererats%0D%0A1d4+derro%0D%0A1+ochre+jelly%0D%0A1+will-o%27-wisp">
                                Sewers
                            </a>
                        </td>
                        <td>2.62</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+caryatid+column%0D%0A1d6+spider+swarms%0D%0A1d10+giant+maggots%0D%0ARot+grubs%0D%0A1d12+zombies%0D%0A1+crypt+thing%0D%0AGhouls%0D%0A1d6+imps%0D%0A1d6+derro%0D%0A1+revenant%0D%0A1d6+wights%0D%0AYellow+mold%0D%0A1+spectre%0D%0A1d4+wraiths%0D%0A1d6+vampire+spawn%0D%0A1+mohrg%0D%0AHaunting%0D%0APriests">
                                Crypt
                            </a>
                        </td>
                        <td>5.44</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+shambling+mound%0D%0A1+tendriculos%0D%0AHungry+fungus%0D%0A1+black+pudding%0D%0A1+yellow+musk+creeper+and+2d4+yellow+musk+zombies%0D%0AFiendish+Vermin%0D%0A1d6%2B6+dretches%0D%0A2d4+ettercaps%0D%0A2d6+boggards%0D%0A1+witchfire%0D%0A1d6+babaus%0D%0A1d6+will-o%27-wisps%0D%0A1+bebilith%0D%0A1d12+leucrottas%0D%0A2d4+trolls%0D%0A2d6+mandragoras%0D%0AGreen+hag+covey%0D%0A2d6+satyrs%0D%0A2d6+Soldiers%0D%0A1d4+mobogos%0D%0A1d6+vrocks%0D%0A1+banshee%0D%0A1+froghemoth%0D%0A1+glabrezu%0D%0A1d4+hezrous%0D%0A2d4+marsh+giants%0D%0A1+adult+green+dragon%0D%0ADemonic+host%0D%0ATreerazer">
                                Dark and Twisted Swamp
                            </a>
                        </td>
                        <td>10.55</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+fire+snake%0D%0A1d4+horned+spirestalkers%0D%0A1+fire+scorpion%0D%0AEmberstorm%0D%0A1d4+rattlesnakes%0D%0A1d6+hippogriffs%0D%0A1+basilisk%0D%0A1d6+bush+tigers%0D%0A1+bulette%0D%0A1d12+cinderwolves%0D%0A1d12+ankhegs%0D%0A2d12+aurochs%0D%0A1d4+chimeras%0D%0A1d6+wyverns%0D%0A2d6+gargoyles%0D%0A1d4+stone+giants%0D%0A1+bonestorm%0D%0A1d4+storm+rocs%0D%0A1+purple+worm%0D%0A1d6+dragonnes%0D%0A1+red+render%0D%0AOrcs%0D%0APrimitive+warriors%0D%0ADangerous+lands%0D%0A1+adult+red+dragon">
                                Scorched Land
                            </a>
                        </td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/tools/tableroller/tableroller.php?t=1+bat+swarm%0D%0A2d6+goblins%0D%0A1d4+land+lampreys%0D%0A1+Large+monstrous+spider%0D%0A1d4+bonesnappers%0D%0A1d6+giant+geckos%0D%0A1d4+assassin+vines%0D%0A1+bunyip%0D%0A1+devilfish%0D%0A1d12+giant+flies%0D%0A1d12+human+zombies%0D%0A1d4+wild+pigs+%28use+boar%29%0D%0A1+kelpie%0D%0A1d6+giant+leeches%0D%0A2d6+goblin+dogs%0D%0A1+forester%27s+bane%0D%0A1d4+mosquito+swarms%0D%0A1+giant+constrictor+snake%0D%0A2d12+stirges%0D%0A1d4+amphisbaenas%0D%0A1d4+otyughs%0D%0A1+shambling+mound%0D%0A1d4+tentamorts%0D%0A1d12+alligators+or+crocodiles+%28as+appropriate%2C+by+terrain%29%0D%0A1+black+pudding%0D%0A1d6+faceless+stalkers%0D%0A1d4+scrags%0D%0A1d12+shocker+lizards%0D%0A1+giant+slug%0D%0A3+green+hags%0D%0A1d4+tendriculoses%0D%0A1d6+trolls%0D%0A1d4+will-o%27-wisps%0D%0A1+wolf-in-sheep%27s-clothing%0D%0A1d12+giant+alligators+%28or+crocodiles%2C+as+appropriate+for+terrain%29%0D%0A1d12+giant+dire+frogs%0D%0A1d12+harpies%0D%0A1d4+dark+nagas%0D%0A1d6+dracolisks%0D%0A1+mobogo%0D%0A1d6+marsh+giants%0D%0A1+elder+black+pudding%0D%0A1+froghemoth%0D%0A1d4+ten-headed+hydras%0D%0AQuicksand%0D%0ABoggards%0D%0ADragon">
                                Dark Bog
                            </a>
                        </td>
                        <td>6.5</td>
                    </tr>
                </table>
                <table class="table table-striped table-bordered block">
                    <tr><th>By CR</th></tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Bat%2C+Common%0D%0ACentipede%2C+House%0D%0AHedgehog%0D%0AIsopod%2C+Giant%0D%0ASkunk%0D%0AToad">
                            1/8
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Lizard%0D%0ARaven%0D%0ATurtle">
                            1/6
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Botfly%2C+Giant%0D%0ACat%0D%0ACrab%2C+King%0D%0ADodo%0D%0ADonkey+Rat%0D%0AFox%09Kobold%0D%0AMite%0D%0AMonkey%0D%0AOtter%0D%0APorcupine%0D%0ARat%09Scorpion%2C+Greensting%0D%0ASkunk%0D%0ASpider%2C+Scarlet%0D%0AZombie%2C+Kobold">
                            1/4
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Beetle%2C+Fire%0D%0ADog%0D%0ADrow%0D%0ADuergar%0D%0ADwarf+Caiman%0D%0AEurypterid%2C+Ochre%0D%0AGillman%0D%0AGoat%0D%0AGoblin%0D%0AHawk%0D%0AMerfolk%0D%0AOoze+Swarm%2C+Alchemical+%28Sanguine%29%0D%0AOrc%2C+Common%09Owl%0D%0APig%0D%0APterosaur%2C+Rhamphorhynchus%0D%0ARatfolk%0D%0ARat%2C+Dire%0D%0ASeal%0D%0ASquirrel%2C+Flying%0D%0ASevered+Head%0D%0ASkeleton%2C+Medium+Humanoid%0D%0ASprite%0D%0AThrush">
                            1/3
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Aasimar%0D%0AAnimated+Object+%28Tiny%29%0D%0AAntelope%0D%0ABaboon%0D%0ABadger%0D%0ABiloko%0D%0ACatfolk%0D%0ACentipede%2C+Giant%0D%0AChangeling%0D%0AClockwork+Spy%0D%0ACrawling+Hand%0D%0ADhampir%0D%0ADog%2C+Riding%0D%0ADolphin%0D%0AEagle%0D%0AFetchling%0D%0AFlaming+Skull%0D%0AFrog%2C+Poison%0D%0AGremlin%2C+Pugwampi%0D%0AGrindylow%0D%0AGrippli%0D%0AHobgoblin%0D%0AIfrit%0D%0AKangaroo%0D%0AKuru%0D%0ALeshy%2C+Leaf%0D%0ALocathah%0D%0AMaggot%2C+Giant%0D%0AOctopus%2C+Blue-Ringed%0D%0AOoze+Swarm%2C+Alchemical+%28Phlegmatic%29%09Oread%0D%0AOwl%2C+Great+Horned%0D%0APony%0D%0ARaccoon%0D%0ASagari%0D%0AScorpion%2C+Ghost%0D%0ASkeleton%2C+Four-Armed+Mudra%0D%0ASnake%2C+Viper%0D%0ASpider%2C+Dream%0D%0ASpider%2C+Giant+Crab%0D%0AStingray%0D%0AStirge%0D%0ASuli%0D%0ASylph%0D%0ATengu%0D%0AThylacine%0D%0ATiefling%0D%0ATurtle%2C+Snapping%0D%0AUndine%0D%0AVegepygmy%0D%0AVishkanya%0D%0AVulture%0D%0AWeasel%0D%0AXtabay%0D%0AZombie%2C+Medium+Humanoid%0D%0AZombie%2C+Unhallowed%0D%0AZoog">
                            1/2
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Akata%0D%0AAmoeba%2C+Giant%0D%0AAmoeba+Swarm%0D%0AAtomie%0D%0AAxe+Beak%2C+Diatryma%0D%0ABee%2C+Giant%0D%0ABrownie%0D%0ACamel%0D%0ACarbuncle%0D%0AClawbat%0D%0ADarkmantle%0D%0ADinosaur%2C+Compsognathus%0D%0ADire+Corby%0D%0AElemental%2C+Air+%28Small%29%0D%0AElemental%2C+Earth+%28Small%29%0D%0AElemental%2C+Fire+%28Small%29%0D%0AElemental%2C+Ice+%28Small%29%0D%0AElemental%2C+Lightning+%28Small%29%0D%0AElemental%2C+Magma+%28Small%29%0D%0AElemental%2C+Mud+%28Small%29%0D%0AElemental%2C+Water+%28Small%29%0D%0AElk%0D%0AEurypterid%2C+Common%0D%0AFast+Zombie%2C+Flapping+Head%0D%0AFaun%0D%0AFestrog%0D%0AFly%2C+Giant%0D%0AFlumph%0D%0AFrog%2C+Giant%0D%0AGremlin%2C+Fuath%0D%0AGar%0D%0AGhoul%0D%0AGnoll%0D%0AGoblin+Dog%0D%0AGoblin+Snake%0D%0AGremlin%2C+Jinkin%0D%0AGremlin%2C+Vexgit%0D%0AGrig%0D%0AGryph%0D%0AHippocampus%0D%0AHomunculus%0D%0AHorse%0D%0AHyena%0D%0AJellyfish%2C+Death%27s+Head%0D%0AKrenshar%0D%0ALemure%0D%0ALeshy%2C+Gourd%0D%0ALizardfolk%0D%0ALizard%2C+Giant+Gecko%0D%0AMongrelman%0D%0ANingyo%0D%0ANingyo+%28Undead%29%0D%0ANixie%0D%0AOctopus%0D%0AOoze+Swarm%2C+Alchemical+%28Melancholic%29%0D%0APhantom+Armor%2C+Hollow+Helm%0D%0APseudodragon%0D%0APterosaur%2C+Dimorphodon%0D%0ARam%0D%0ARay%2C+Manta%0D%0AReefclaw%0D%0ARune+Guardian%0D%0AScorpion%2C+Cave%0D%0ASea+Urchin%2C+Hunter%0D%0ASkeleton%2C+Golden%0D%0ASkeletal+Mount%0D%0ASkulk%0D%0ASkull+Swarm%0D%0ASnake%2C+Sea%0D%0ASnake%2C+Venomous%0D%0ASpider%2C+Giant%0D%0ASpider+Swarm%0D%0ASolifugid%2C+Giant%0D%0ASquid%0D%0AStrix%0D%0ASvirfneblin%0D%0ATerror+Wolf%0D%0ATick%2C+Giant%0D%0ATroglodyte%0D%0AVanara%0D%0AWater+Strider+Swarm%0D%0AWolf%0D%0AZombie+Wolf">
                            1
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Aeon%2C+Paracletus%0D%0AAgathion%2C+Silvanshee%0D%0AAnemone%2C+Great+Sea%0D%0AAngel%2C+Cassisian%0D%0AAnimated+Object+%28Small%29%0D%0AAnt%2C+Giant%0D%0AArbiter%0D%0AArchon%2C+Harbinger%0D%0AArchon%2C+Lantern%0D%0AAsura%2C+Tripurasura%0D%0AAurochs%0D%0AAxe+Beak%0D%0AAzer%0D%0ABadger%2C+Dire%0D%0ABat%2C+Dire%0D%0ABat+Swarm%0D%0ABeheaded%2C+Giant%0D%0ABlindheim%0D%0ABlink+Dog%0D%0ABoar%0D%0ABoggard%0D%0ABog+Strider%0D%0ABugbear%0D%0ACave+Fisher%0D%0ACharau-ka%0D%0ACheetah%0D%0AChoker%0D%0AClockwork+Servant%0D%0ACobra+Construct%2C+Iron%0D%0ACockroach+Swarm%0D%0AContemplative+of+Ashok%0D%0ACrab%2C+Giant%0D%0ACrocodile%0D%0ADaemon%2C+Cacodaemon%0D%0ADark+Creeper%0D%0ADemon%2C+Dretch%0D%0ADiv%2C+Doru%0D%0ADoll%2C+Soulbound%0D%0ADragon%2C+Faerie%0D%0ADragon%2C+Chromatic+%28White%2C+Wyrmling%29%0D%0ADragon%2C+Primal+%28Crystal%2C+Wyrmling%29%0D%0ADraugr%0D%0ADweomercat%2C+Cub%0D%0AEel%2C+Electric%0D%0AElk%2C+River%0D%0AExecutioner%27s+Hood%0D%0AFoo+Dog%0D%0AForlarren%0D%0AGorilla%0D%0AHippogriff%0D%0AHomunculus%2C+Snapjaw%0D%0AImp%0D%0AIncutilis%0D%0AJackalwere%0D%0AKami%2C+Shikigami%0D%0AKappa%0D%0AKyton%2C+Augur%0D%0ALeech%2C+Giant%0D%0ALeopard%0D%0ALeprechaun%0D%0ALeshy%2C+Fungus%0D%0ALizard%2C+Monitor%0D%0ALocust+Swarm%0D%0ALycanthrope%2C+Wereboar%0D%0ALycanthrope%2C+Wererat%0D%0ALycanthrope%2C+Werewolf%0D%0AMechanical+Viper%0D%0AMonkey+Swarm%0D%0AMorlock%0D%0AMudman%0D%0ANecrophidius%2C+Lesser%0D%0ANuglub%0D%0AOgrekin%0D%0AOni%2C+Spirit%0D%0AOoze%2C+Garden%0D%0AOoze+Swarm%2C+Alchemical+%28Choleric%29%0D%0APhantom+Armor%2C+Guardian%0D%0APorcupine%2C+Giant%0D%0AProtean%2C+Voidworm%0D%0APsychopomp%2C+Nosoi%0D%0AQlippoth%2C+Cythnigot%0D%0AQuasit%0D%0ARakshasa%2C+Raktavarna%0D%0ARatling%0D%0ARat+Swarm%0D%0ASahuagin%0D%0ASasquatch%0D%0AShark%0D%0AShocker+Lizard%0D%0ASinspawn%0D%0ASkeleton%2C+Owlbear%0D%0ASkin+Stealer%0D%0ASkum%0D%0ASlime+Mold%0D%0ASlurk%0D%0ASnake%2C+Constrictor%0D%0ASnake+Swarm%0D%0AStirge%2C+Giant%0D%0ATatzlwyrm%0D%0AThawn%0D%0AThoqqua%0D%0AThylacine%2C+Brush%0D%0AToad%2C+Giant%0D%0ATriton%0D%0AVargouille%0D%0AWolverine%0D%0AWorg%0D%0AYellow+Musk+Creeper%0D%0AZombie%2C+Apocalypse%0D%0AZombie%2C+Juju">
                            2
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Ape%2C+Dire%0D%0AAdaro%0D%0AAdherer%0D%0AAllip%0D%0AAnimated+Object+%28Medium%29%0D%0AAnkheg%0D%0AAssassin+Vine%0D%0ABelostomatid%0D%0ABunyip%0D%0ACaryatid+Column%0D%0ACentaur%0D%0ACentipede%2C+Giant+Whiptail%0D%0ACeratioidi%0D%0ACerebric+Fungus%0D%0AChickcharney%0D%0AChupacabra%0D%0ACockatrice%0D%0ACrysmal%0D%0ADaemon%2C+Lacridaemon%0D%0ADark+Slayer%0D%0ADemon%2C+Vermlek%0D%0ADerro%0D%0ADevil%2C+Accuser%0D%0ADinosaur%2C+Deinonychus%0D%0ADinosaur%2C+Dimetrodon%0D%0ADinosaur%2C+Pteranodon%0D%0ADisenchanter%0D%0ADoppelganger%0D%0ADragonfly+Nymph%2C+Giant%0D%0ADragon%2C+Tidepool%0D%0ADragon%2C+Chromatic+%28Black%2C+Wyrmling%29%0D%0ADragon%2C+Metallic+%28Brass%2C+Wyrmling%29%0D%0ADragon%2C+Primal+%28Brine%2C+Wyrmling%29%0D%0ADrake%2C+River%0D%0ADraugr+%28Advanced%29%0D%0ADrekavac%0D%0ADrow%2C+Noble%0D%0ADryad%0D%0AD%27ziriak%0D%0AElemental%2C+Air+%28Medium%29%0D%0AElemental%2C+Earth+%28Medium%29%0D%0AElemental%2C+Fire+%28Medium%29%0D%0AElemental%2C+Ice+%28Medium%29%0D%0AElemental%2C+Lightning+%28Medium%29%0D%0AElemental%2C+Magma+%28Medium%29%0D%0AElemental%2C+Mud+%28Medium%29%0D%0AElemental%2C+Water+%28Medium%29%0D%0AEttercap%0D%0AFey+Giant+Toad%0D%0AFey+Wolverine%0D%0AFungal+Crawler%0D%0AGelatinous+Cube%0D%0AGolem%2C+Wax%0D%0AGiant+Eagle%0D%0AGrick%0D%0AHell+Hound%0D%0AHowler%0D%0AHyena%2C+Dire%0D%0AKech%0D%0ALava+Child%0D%0ALeshy%2C+Seaweed%0D%0ALion%0D%0ALizard%2C+Giant+Chameleon%0D%0ALycanthrope%2C+Werebat%0D%0ALycanthrope%2C+Wereshark%0D%0AMagmin%0D%0AMantis%2C+Giant%0D%0AMedusa+Head%0D%0AMephit%2C+Air%0D%0AMephit%2C+Dust%0D%0AMephit%2C+Earth%0D%0AMephit%2C+Fire%0D%0AMephit%2C+Ice%0D%0AMephit%2C+Magma%0D%0AMephit%2C+Ooze%0D%0AMephit%2C+Salt%0D%0AMephit%2C+Steam%0D%0AMephit%2C+Water%0D%0AMerrow%2C+Freshwater%0D%0AMindslaver+Mold%0D%0AMobat%0D%0AMosquito+Swarm%0D%0AMurder+of+Crows%0D%0ANecrophidius%0D%0ANixie%2C+Bog%0D%0AOgre%0D%0APech%0D%0APegasus%0D%0APhantom+Fungus%0D%0AQuickling%0D%0ARot+Grub%2C+Giant%0D%0ARust+Monster%0D%0ASalamander%2C+Flamebrother%0D%0ASandman%0D%0AScorpion%2C+Giant%0D%0AShadow%0D%0ASkeleton%2C+Megaraptor+%28Advanced%29%0D%0ASkunk%2C+Giant%0D%0ASpider%2C+Giant+Black+Widow%0D%0ASpriggan%0D%0ASpring-heeled+Jack%0D%0ATroll%2C+Moss%0D%0ATrollhound%0D%0ATwigjack%0D%0AUnicorn%0D%0AUrdefhan%0D%0AVampiric+Mist%0D%0AViolet+Fungus%0D%0AVargouille%2C+Giant%0D%0AWasp%2C+Giant%0D%0AWasp+Swarm%0D%0AWight%0D%0AWolf%2C+Dire%0D%0AYeth+Hound">
                            3
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Amphisbaena%0D%0AAranea%0D%0AArchon%2C+Hound%0D%0AAttic+Whisperer%0D%0AAxe+Beak%2C+Terror+Bird%0D%0ABarghest%0D%0ABear%2C+Brown+or+Grizzly%0D%0ABeheaded%2C+Medusa+Head+%28Shrieking%29%0D%0ABeetle%2C+Giant+Stag%0D%0ABeetle%2C+Slicer%0D%0ABison%0D%0ABoar%2C+Dire%0D%0ABotfly+Swarm%0D%0ACalathgar%0D%0ACaryatid+Column%2C+Shining+Sentinel%0D%0ACentipede+Swarm%0D%0AChemosit%0D%0AChoker+Brute%0D%0ACrab+Swarm%0D%0ADaemon%2C+Vulnudaemon%0D%0ADark+Stalker%0D%0ADecapus%0D%0ADemon%2C+Hala%0D%0ADemon%2C+Schir%0D%0ADevilfish%0D%0ADinosaur%2C+Pacycephalosaurus%0D%0ADinosaur%2C+Parasaurolophus%0D%0ADiv%2C+Agash%0D%0ADragon%2C+Chromatic+%28Green%2C+Wyrmling%29%0D%0ADragon%2C+Chromatic+%28White%2C+Very+Young%29%0D%0ADragon%2C+Imperial+%28Sea%2C+Wyrmling%29%0D%0ADragon%2C+Metallic+%28Copper%2C+Wyrmling%29%0D%0ADragon%2C+Primal+%28Crystal%2C+Very+Young%29%0D%0ADragon%2C+Primal+%28Magma%2C+Wyrmling%29%0D%0ADragonfly%2C+Giant%0D%0ADrake%2C+Forest%0D%0ADust+Digger%0D%0AElk%2C+Megaloceros%0D%0AElk%2C+Megaloceros%0D%0AErcinee%0D%0AFaceless+Stalker%0D%0AFestrog%2C+Menadoran%0D%0AFlail+Snail%0D%0AFoo+Dog%0D%0AGargoyle%0D%0AGloomwing%0D%0AGolem%2C+Carrion%0D%0AGolem%2C+Wax+%28Sentient%29%0D%0AGriffon%0D%0AHag%2C+Sea%0D%0AHalf-Celestial+Unicorn%0D%0AHarpy%0D%0AHuldra%0D%0AHydra%0D%0AJanni%0D%0AKamadan%0D%0AKelpie%0D%0AKorred%0D%0ALeech+Swarm%0D%0ALiving+Topiary%0D%0ALycanthrope%2C+Werebear%0D%0ALycanthrope%2C+Weretiger%0D%0AMachine+Soldier%0D%0AMandragora%0D%0AMask+Golem%0D%0AMimic%0D%0AMinotaur%0D%0AMyceloid%0D%0ANirento%0D%0AOni%2C+Kuwa%0D%0AOoze%2C+Gray%0D%0AOtyugh%0D%0AOwlbear%0D%0APeryton%0D%0APhantom+Armor%2C+Giant%0D%0APhycomid%0D%0APixie%0D%0APoltergeist%0D%0ARhinoceros%0D%0ASatyr%0D%0AScarecrow%0D%0ASea+Urchin%2C+Spear%0D%0ASerpentfolk%0D%0AShae%0D%0AShobhad%0D%0AShriezyx%0D%0ASlithering+Tracker%0D%0ASnake%2C+Venomous+Swarm%0D%0ASolifugid%2C+Albino+Cave%0D%0ASpriggan%2C+Fellnight%0D%0ATanuki%0D%0ATentamort%0D%0AThraie+Soldier%0D%0ATiger%0D%0ATroll%2C+Ice%0D%0AVoonith%0D%0AVulture%2C+Giant%0D%0AWolverine%2C+Dire%0D%0AWraith+Spawn%0D%0AYeti%0D%0AZuvembie">
                            4
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Achaierai%0D%0AAnimated+Object+%28Large%29%0D%0AAnt+Lion%2C+Giant%0D%0AArchelon%0D%0AArmy+Ant+Swarm%0D%0AAscomoid%0D%0ABasidirond%0D%0ABasilisk%2C+Common%0D%0ABee%2C+Giant+Queen%0D%0ABeetle%2C+Azlanti+Chariot%0D%0ABrethedan%0D%0ABuraq%0D%0ACecaelia%0D%0ACloaker%0D%0AChupacabra%2C+Giant+Winged%0D%0ACrab%2C+Giant+Hermit%0D%0ACrawling+Hand%2C+Giant%0D%0ACrypt+Thing%0D%0ACyclops%0D%0ADaemon%2C+Venedaemon%0D%0ADemon%2C+Brimorack%0D%0ADerhii%0D%0ADevil%2C+Bearded%0D%0ADinosaur%2C+Megaraptor%0D%0ADragon%2C+Chromatic+%28Black%2C+Very+Young%29%0D%0ADragon%2C+Chromatic+%28Blue%2C+Wyrmling%29%0D%0ADragon%2C+Imperial+%28Sky%2C+Wyrmling%29%0D%0ADragon%2C+Metallic+%28Brass%2C+Very+Young%29%0D%0ADragon%2C+Metallic+%28Bronze%2C+Wyrmling%29%0D%0ADragon%2C+Primal+%28Brine%2C+Very+Young%29%0D%0ADragon%2C+Primal+%28Cloud%2C+Wyrmling%29%0D%0ADrake%2C+Flame%0D%0AEel%2C+Giant+Moray%0D%0AElder+Thing%0D%0AElemental%2C+Air+%28Large%29%0D%0AElemental%2C+Earth+%28Large%29%0D%0AElemental%2C+Fire+%28Large%29%0D%0AElemental%2C+Ice+%28Large%29%0D%0AElemental%2C+Lightning+%28Large%29%0D%0AElemental%2C+Magma+%28Large%29%0D%0AElemental%2C+Mud+%28Large%29%0D%0AElemental%2C+Water+%28Large%29%0D%0AEnslaved+Spawn%0D%0AEurypterid%2C+Bluetip%0D%0AGhoul+Bat%2C+Skaveling%0D%0AGhul%0D%0AGibbering+Mouther%0D%0AGlobster%0D%0AGolem%2C+Ice%0D%0AGraven+Guardian%0D%0AGrimstalker%0D%0AGrodair%0D%0AHag%2C+Green%0D%0AHeiracosphinx%0D%0AHellgrammite%2C+Giant%0D%0AHippopotamus%0D%0AKami%2C+Kodama%0D%0ALeucrotta%0D%0ALion%2C+Dire%0D%0ALizard%2C+Giant+Frilled%0D%0ALurker+in+Light%0D%0AManticore%0D%0AMegatherium%0D%0AMercane%0D%0AMummy%0D%0AMummy%2C+Bog%0D%0AMummy%2C+Unhallowed%0D%0ANightmare%0D%0AOchre+Jelly%0D%0AOrca%0D%0APhase+Spider%0D%0ARakshasa%2C+Dandasuka%0D%0ARast%0D%0ARot+Grub%2C+Giant%0D%0ASabosan%0D%0ASelkie%0D%0ASiren%0D%0AShadow%2C+Blast%0D%0AShadow+Mastiff%0D%0ASkeletal+Mage%0D%0ASnake%2C+Giant+Anaconda%0D%0ASnake%2C+Emperor+Cobra%0D%0ASpider%2C+Ogre%0D%0ASpider+Eater%0D%0ATojanida%0D%0ATroll%0D%0AVodyanoi%0D%0AWinter+Wolf%0D%0AWraith">
                            5
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Agathion%2C+Vulpinal%0D%0AAhuizotl%0D%0AAnt+Lion%2C+Giant+Adult%0D%0AAzata%2C+Bralani%0D%0ABasilisk%2C+Slime-Infected%0D%0ABelker%0D%0ABerbalang%0D%0ABlodeuwedd%0D%0ACerberi%0D%0AClockwork+Soldier%0D%0ACryohydra+%285-headed%29%0D%0ADaemon%2C+Ceustodaemon%0D%0ADeathweb%0D%0ADeath+Worm%0D%0ADemon%2C+Babau%0D%0ADemon%2C+Incubus%0D%0ADinosaur%2C+Ankylosaurus%0D%0ADinosaur%2C+Iguanodon%0D%0ADjinni%0D%0ADragon%2C+Chromatic+%28Green%2C+Very+Young%29%0D%0ADragon%2C+Chromatic+%28Red%2C+Wyrmling%29%0D%0ADragon%2C+Chromatic+%28White%2C+Young%29%0D%0ADragon%2C+Imperial+%28Forest%2C+Wyrmling%0D%0ADragon%2C+Imperial+%28Sea%2C+Young%29%0D%0ADragon%2C+Metallic+%28Copper%2C+Very+Young%29%0D%0ADragon%2C+Metallic+%28Silver%2C+Wyrmling%29%0D%0ADragon%2C+Primal+%28Crystal%2C+Young%29%0D%0ADragon%2C+Primal+%28Magma%2C+Very+Young%29%0D%0ADragon%2C+Primal+%28Umbral%2C+Wyrmling%29%0D%0ADrake%2C+Sea%0D%0AEttin%0D%0AGar%2C+Giant%0D%0AGargoyle%2C+Gemstone%0D%0AGiant+Owl%0D%0AGiant%2C+Cave%0D%0AGiant%2C+Wood%0D%0AGirallon%0D%0AGlacier+Toad%0D%0AGolden+Guardian%0D%0AGolem%2C+Flesh+Hound%0D%0AGolem%2C+Wood%0D%0AGlyptodon%0D%0AHag%2C+Annis%0D%0AHalf-fiend+Minotaur%0D%0AHodag%0D%0AHungry+Fog%0D%0AJellyfish+Swarm%09%0D%0AKyton%2C+Evangelist%0D%0ALamia%0D%0AMaftet%0D%0AMerrow%2C+Saltwater%0D%0AMi-go%0D%0AMosquito%2C+Giant%0D%0AMosquito+Swarm%2C+Bloodhaze%0D%0AMothman%0D%0ANaga%2C+Lunar%0D%0ANirento%2C+Elder%0D%0AOoze%2C+Verdurous%0D%0APhantom+Armor%2C+Phantom+Lancer%0D%0APyrohydra+%285-headed%29%0D%0ARedcap%0D%0ARevenant%0D%0ARhinoceros%2C+Woolly%0D%0ARorkoun%0D%0ASalamander%0D%0AScythe+Tree%0D%0ASea+Scourge%0D%0ASeugathi%0D%0AShambling+Mound%0D%0ASkrik+Nettle%0D%0AStymphalides+Swarm%0D%0ATear+of+Nuruu%27gal%0D%0ATendriculos%0D%0ATerra-Cotta+Soldier%0D%0ATroll+%28Advanced%29%0D%0ATroll%2C+Rock%0D%0AWill-o%27-Wisp%0D%0AWitchwyrd%0D%0AWyvern%0D%0AXill%0D%0AXorn">
                            6
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Aballonian%0D%0AAboleth%0D%0AAeon%2C+Theletos%0D%0AAnimated+Object+%28Huge%29%0D%0AArchon%2C+Legion%0D%0AArsinotherium%0D%0AAsura%2C+Adhukait%0D%0AAzata%2C+Lillend%0D%0ABarghest%2C+Greater%0D%0ABear%2C+Dire%0D%0ABlack+Pudding%0D%0ABulette%0D%0ACaulborn%0D%0AChaos+Beast%0D%0ACharda%0D%0AChimera%0D%0AChuul%0D%0ACrab%2C+Shark-Eating%0D%0ACriosphinx%0D%0ACryohydra+%286-headed%29%0D%0ADaemon%2C+Suspiridaemon%0D%0ADemon%2C+Shadow%0D%0ADemon%2C+Succubus%0D%0ADevil%2C+Salikotal%0D%0ADinosaur%2C+Allosaurus%0D%0ADinosaur%2C+Elasmosaurus%0D%0ADinosaur%2C+Stegosaurus%0D%0ADiv%2C+Pairaka%0D%0ADracolisk+%28Black%29%0D%0ADragon%2C+Chromatic+%28Black%2C+Young%29%0D%0ADragon%2C+Chromatic+%28Blue%2C+Very+Young%29%0D%0ADragon%2C+Chromatic+%28White%2C+Juvenile%29%0D%0ADragon%2C+Imperial+%28Sky%2C+Very+Young%29%0D%0ADragon%2C+Imperial+%28Underworld%2C+Young%29%0D%0ADragon%2C+Imperial+%28Sovereign%2C+Wyrmling%29%0D%0ADragon%2C+Metallic+%28Brass%2C+Young%29%0D%0ADragon%2C+Metallic+%28Bronze%2C+Very+Young%29%0D%0ADragon%2C+Metallic+%28Gold%2C+Wyrmling%29%0D%0ADragon%2C+Primal+%28Brine%2C+Young%29%0D%0ADragon%2C+Primal+%28Cloud%2C+Very+Young%29%0D%0ADragon%2C+Primal+%28Crystal%2C+Juvenile%29%0D%0ADragonne%0D%0ADrake%2C+Frost%0D%0ADrider%0D%0ADullahan%0D%0ADuppy%0D%0ADweomercat%0D%0AElephant%0D%0AElemental%2C+Air+%28Huge%29%0D%0AElemental%2C+Earth+%28Huge%29%0D%0AElemental%2C+Fire+%28Huge%29%0D%0AElemental%2C+Ice+%28Huge%29%0D%0AElemental%2C+Lightning+%28Huge%29%0D%0AElemental%2C+Magma+%28Huge%29%0D%0AElemental%2C+Mud+%28Huge%29%0D%0AElemental%2C+Water+%28Huge%29%0D%0AGhost%0D%0AGiant%2C+Hill%0D%0AGolem%2C+Flesh%0D%0AGolem%2C+Flesh+%28Faceless%29%0D%0AHangman+Tree%0D%0AHellcat%0D%0AHound+of+Tindalos%0D%0AInvisible+Stalker%0D%0AJellyfish%2C+Giant%0D%0AKirin%0D%0ALurker+Above%09%0D%0AManananggal%0D%0AMedusa%0D%0AMegalania%0D%0AMummy%2C+Bog+%28Corpsewater%29%0D%0ANaga%2C+Water%0D%0ANogitsune%0D%0ANymph%0D%0AOoze%2C+Brain%0D%0AOoze%2C+Magma%0D%0AOtyugh%2C+Plaguebearer%0D%0AProtean%2C+Naunet%0D%0APsychopomp%2C+Vanth%0D%0APterosaur%2C+Quetzalcoatlus%0D%0APukwudgie%0D%0APyrohydra+%286-headed%29%0D%0AQlippoth%2C+Shoggti%0D%0ARajput+Ambari%0D%0ARemorhaz%0D%0ARot+Grub+Swarm%0D%0ASceaduinar%0D%0AShaitan%0D%0ASnake%2C+Sea+%28Giant%29%0D%0ASoul+Eater%0D%0ASpectre%0D%0AStygira%0D%0ATotenmaske%0D%0ATupilaq%0D%0AVilkacis">
                            7
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Animate+Dream%0D%0AAxiomite%0D%0ABaku%0D%0ABaluchitherium%0D%0ABeetle%2C+Goliath+Stag%0D%0ABehir%0D%0ABodak%0D%0ACold+Rider%0D%0ACryohydra+%287-headed%29%0D%0ADaemon%2C+Hydrodaemon%0D%0ADaughter+of+Urgothoa%0D%0ADemon%2C+Nabasu+%28Mature%29%0D%0ADenizen+of+Leng%0D%0ADestrachan%0D%0ADevil%2C+Erinyes%0D%0ADimensional+Shambler%0D%0ADinosaur%2C+Triceratops%0D%0ADinosaur%2C+Tylosaurus%0D%0ADragon%2C+Chromatic+%28Black%2C+Juvenile%29%0D%0ADragon%2C+Chromatic+%28Green%2C+Young%29%0D%0ADragon%2C+Chromatic+%28Red%2C+Very+Young%29%0D%0ADragon%2C+Imperial+%28Forest%2C+Very+Young%29%0D%0ADragon%2C+Imperial+%28Sea%2C+Young%29%0D%0ADragon%2C+Metallic+%28Brass%2C+Juvenile%29%0D%0ADragon%2C+Metallic+%28Copper%2C+Young%29%0D%0ADragon%2C+Metallic+%28Silver%2C+Very+Young%29%0D%0ADragon%2C+Primal+%28Brine%2C+Juvenile%29%0D%0ADragon%2C+Primal+%28Magma%2C+Young%29%0D%0ADragon%2C+Primal+%28Umbral%2C+Very+Young%29%0D%0ADrake%2C+Desert%0D%0A%09Efreeti%0D%0AGargoyle+Guardian%0D%0AGiant%2C+Marsh%0D%0AGiant%2C+Stone%0D%0AGirtablilu%0D%0AGolem%2C+Bone%0D%0AGolem%2C+Flesh+%28Girallon%29%0D%0AGolem%2C+Glass%0D%0AGorgon%0D%0AGray+Render%0D%0AGynosphinx%0D%0AHangman+Tree+%28Advanced%29%0D%0AHellwasp+Swarm%0D%0AIku-Turso%0D%0AIntellect+Devourer%0D%0ALamia+Matriarch%0D%0ALammasu%0D%0AMihstu%0D%0AMohrg%0D%0AMohrg%2C+Unhallowed%0D%0AMoonflower%0D%0ANaga%2C+Dark%0D%0ANeh-thalggu%0D%0ANephilim%0D%0AOctopus%2C+Giant%09%0D%0AOni%2C+Ogre+Mage%0D%0AOoze%2C+Deathtrap%0D%0APyrohydra+%287-headed%29%0D%0AQuickwood%0D%0ARakshasa%2C+Marai%0D%0ASandpoint+Devil%0D%0AScorpion%2C+Deadfall%0D%0AShadow%2C+Greater%0D%0AShadow%2C+Greater+%28Unhallowed%29%0D%0AShantak%0D%0ASlug%2C+Giant%0D%0ASoucouyant%0D%0ASpider%2C+Giant+Tarantula%0D%0AStymphalides%0D%0ATiger%2C+Dire%0D%0AUnfettered+Eidolon+%28Small%29%0D%0ATenebrous+Worm%0D%0ATrapper%0D%0ATreant%0D%0ATroll%2C+Two-Headed%0D%0AUnfettered+Eidolon%0D%0AVizier+%28Noble+Djinn%29%0D%0AWeaverworm%0D%0AWolf-in-Sheep%27s-Clothing%0D%0AWyvern%2C+Aashaq%27s%0D%0AYuki-onna%0D%0AZombie%2C+Giant">
                            8
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Agathion%2C+Avoral%0D%0AAndrosphinx%0D%0AAnimated+Object+%28gargantuan%29%0D%0AAsura%2C+Upasunda%0D%0AAurumvorax%0D%0ABaykok%0D%0ABodak%2C+Unhallowed+%28Advanced%29%0D%0ABoruta%0D%0ACentipede%2C+Titan%0D%0ACrocodile%2C+Dire%0D%0ACryohydra+%288-headed%29%0D%0ADaemon%2C+Leukodaemon%0D%0ADaemon%2C+Sangudaemon%0D%0ADelver%0D%0ADevil%2C+Bone%0D%0ADinosaur%2C+Tyrannosaurus%0D%0ADragon%2C+Chromatic+%28Blue%2C+Young%29%0D%0ADragon%2C+Chromatic+%28Green%2C+Juvenile%29%0D%0ADragon%2C+Chromatic+%28White%2C+Young+Adult%29%0D%0ADragon%2C+Imperial+%28Sea%2C+Juvenile%29%0D%0ADragon%2C+Imperial+%28Sky%2C+Young%29%0D%0ADragon%2C+Imperial+%28Sovereign%2C+Very+Young%29%0D%0ADragon%2C+Metallic+%28Bronze%2C+Young%29%0D%0ADragon%2C+Metallic+%28Gold%2C+Very+Young%29%0D%0ADragon%2C+Metallic+%28Copper%2C+Juvenile%29%0D%0ADragon%2C+Primal+%28Cloud%2C+Young%29%0D%0ADragon%2C+Primal+%28Crystal%2C+Young+Adult%29%0D%0ADragon%2C+Primal+%28Magma%2C+Juvenile%29%0D%0ADragon+Horse%0D%0ADragonkin%0D%0ADragon+Turtle%0D%0ADrake%2C+Rift%0D%0AElemental%2C+Air+%28Greater%29%0D%0AElemental%2C+Earth+%28Greater%29%0D%0AElemental%2C+Fire+%28Greater%29%0D%0AElemental%2C+Ice+%28Greater%29%0D%0AElemental%2C+Lightning+%28Greater%29%0D%0AElemental%2C+Magma+%28Greater%29%0D%0AElemental%2C+Mud+%28Greater%29%0D%0AElemental%2C+Water+%28Greater%29%0D%0AEmkrah%0D%0AEurypterid%2C+Spiny%0D%0AGargoyle%2C+Four-Armed%0D%0AGaruda%0D%0AGiant%2C+Frost%0D%0AGiant%2C+Desert%0D%0AGolem%2C+Alchemical%0D%0AGolem%2C+Alchemical+Embalming%0D%0ACoral+Golem%0D%0AGuecubu%0D%0AHag%2C+Night%0D%0AHell+Hound%2C+Nessian+Warhound%0D%0AInevitable%2C+Zelekhut%09%0D%0AJyoti%0D%0AMarid%0D%0AMastodon%0D%0ANaga%2C+Spirit%0D%0ANuckelavee%0D%0APyrohydra+%288-headed%29%0D%0ARoc%0D%0ASargassum+Fiend%0D%0ASea+Urchin%2C+Glass%0D%0AShark%2C+Dire+%28Megalodon%29%0D%0ASkeleton%2C+Tyrannosaurus+Rex+%28Multiplying%29%0D%0ASpore+Mound%2C+Fetid%0D%0AShedu%0D%0ASpawning+Canker%0D%0ASquid%2C+Giant%0D%0ATick+Swarm%0D%0ATurtle%2C+Giant+Snapping%0D%0AVampire%0D%0AVrock%0D%0AWitchfire%0D%0AYithian%0D%0AYrthak">
                            9
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Adlet%0D%0AAluum%0D%0AAngel%2C+Movanic+Deva%0D%0AArchon%2C+Shield%0D%0ABebilith%0D%0ABogeyman%0D%0AColour+Out+of+Space%0D%0ACouatl%0D%0ACryohydra+%289-headed%29%0D%0ADaemon%2C+Piscodaemon%0D%0ADemon%2C+Kalavakus%0D%0ADemon%2C+Xenarth+%28Ichor+Shark%29%0D%0ADevil%2C+Contract%0D%0ADinosaur%2C+Brachiosaurus%0D%0ADiv%2C+Ghawwas%0D%0ADragon%2C+Chromatic+%28Black%2C+Young+Adult%29%0D%0ADragon%2C+Chromatic+%28Blue%2C+Juvenile%29%0D%0ADragon%2C+Chromatic+%28Red%2C+Young%29%0D%0ADragon%2C+Chromatic+%28White%2C+Adult%29%0D%0ADragon%2C+Imperial+%28Forest%2C+Young%29%0D%0ADragon%2C+Imperial+%28Sky%2C+Juvenile%29%0D%0ADragon%2C+Metallic+%28Brass%2C+Young+Adult%29%0D%0ADragon%2C+Metallic+%28Bronze%2C+Juvenile%29%0D%0ADragon%2C+Metallic+%28Silver%2C+Young%29%0D%0ADragon%2C+Primal+%28Brine%2C+Young+Adult%29%0D%0ADragon%2C+Primal+%28Cloud%2C+Juvenile%29%0D%0ADragon%2C+Primal+%28Crystal%2C+Adult%29%0D%0ADragon%2C+Primal+%28Umbral%2C+Young%29%0D%0AFlytrap%2C+Giant%0D%0AGaripan%0D%0AGholdako%0D%0AGiant%2C+Fire%0D%0AGiant%2C+Jungle%0D%0AGiant%2C+Taiga%0D%0AGolem%2C+Clay%0D%0AGug%0D%0AHippopotamus%2C+Behemoth%0D%0AKami%2C+Zuishin%0D%0ANaga%2C+Guardian%0D%0AProtean%2C+Imentesh%0D%0AMalik+%28Noble+Efreet%29%0D%0APyrohydra+%289-headed%29%0D%0AReaper%2C+Minor%0D%0AMobogo%0D%0ANereid%0D%0ANue%0D%0AOctopus%2C+Giant+Lake%0D%0APale+Stranger%0D%0APeluda%0D%0AQlippoth%2C+Nyogoth%0D%0ARakshasa%0D%0ASiyokoy%0D%0ASnake%2C+Giant+Anaconda%0D%0ATophet%0D%0AVrykolakas%0D%0AWater+Orm%0D%0AWhale">
                            10
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=%0D%0AAnimated+Object+%28Colossal%29%0D%0AAsura%2C+Aghasura%0D%0ABhuta%0D%0ACarnivorous+Crystal%0D%0ACryohydra+%2810-headed%29%0D%0ADaemon%2C+Erodaemon%0D%0ADaemon%2C+Meladaemon%0D%0ADemon%2C+Hezrou%0D%0ADevil%2C+Barbed%0D%0ADevourer%0D%0ADinosaur%2C+Spinosaurus%09%0D%0ADragon%2C+Chromatic+%28Black%2C+Adult%29%0D%0ADragon%2C+Chromatic+%28Green%2C+Young+Adult%29%0D%0ADragon%2C+Chromatic+%28Red%2C+Juvenile%29%0D%0ADragon%2C+Chromatic+%28White%2C+Mature+Adult%29%0D%0ADragon%2C+Imperial+%28Forest%2C+Juvenile%29%0D%0ADragon%2C+Imperial+%28Sea%2C+Young+Adult%29%0D%0ADragon%2C+Imperial+%28Sovereign%2C+Young%29%0D%0ADragon%2C+Imperial+%28Underworld%2C+Adult%29%0D%0ADragon%2C+Metallic+%28Brass%2C+Adult%29%0D%0ADragon%2C+Metallic+%28Copper%2C+Young+Adult%29%0D%0ADragon%2C+Metallic+%28Gold%2C+Young%29%0D%0ADragon%2C+Metallic+%28Silver%2C+Juvenile%29%0D%0ADragon%2C+Primal+%28Brine%2C+Adult%29%0D%0ADragon%2C+Primal+%28Crystal%2C+Mature+Adult%29%0D%0ADragon%2C+Primal+%28Magma%2C+Young+Adult%29%0D%0ADragon%2C+Primal+%28Umbral%2C+Juvenile%29%0D%0AElemental%2C+Air+%28Elder%29%0D%0AElemental%2C+Earth+%28Elder%29%0D%0AElemental%2C+Fire+%28Elder%29%0D%0AElemental%2C+Ice+%28Elder%29%0D%0AElemental%2C+Lightning+%28Elder%29%0D%0AElemental%2C+Magma+%28Elder%29%0D%0AElemental%2C+Mud+%28Colossal%29%0D%0AElemental%2C+Water+%28Elder%29%0D%0AGiant%2C+Ash%0D%0AGiant%2C+Cloud%0D%0AGnoph-keh%0D%0AGolem%2C+Stone%0D%0AHag%2C+Mute%0D%0ALarabay%0D%0ALukwata%0D%0AMoon-Beast%0D%0ANaga%2C+Royal%0D%0ANightmare%2C+Cauchemar%0D%0AOoze%2C+Greater+Verdurous%0D%0APyrohydra+%2810-headed%29%0D%0ARetriever%0D%0AJellyfish%2C+Sapphire%0D%0ASleipnir%0D%0ATaotieh%0D%0AThraie+Seer%0D%0AThunderbird%0D%0ATreant%2C+Lightning">
                            11
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Aeon%2C+Akhana%0D%0AAgathion%2C+Leonal%0D%0AAngel%2C+Monadic+Deva%0D%0AAthach%0D%0ABaregara%0D%0ABasilosaurus%0D%0ACalikang%0D%0ACatoblepas%0D%0AClockwork+Leviathan%0D%0ACryohydra+%2811-headed%29%0D%0ACyclops%2C+Great%0D%0ADaemon%2C+Derghodaemon%0D%0ADark+Young+of+Shug-Niggurath%0D%0ADemon%2C+Coloxus%0D%0ADemon%2C+Omox%0D%0ADiv%2C+Shir%09%0D%0ADragon%2C+Chromatic+%28Black%2C+Mature+Adult%29%0D%0ADragon%2C+Chromatic+%28Blue%2C+Young+Adult%29%0D%0ADragon%2C+Chromatic+%28Green%2C+Adult%29%0D%0ADragon%2C+Imperial+%28Sea%2C+Adult%29%0D%0ADragon%2C+Imperial+%28Sky%2C+Young+Adult%29%0D%0ADragon%2C+Imperial+%28Sovereign%2C+Juvenile%29%0D%0ADragon%2C+Metallic+%28Brass%2C+Mature+Adult%29%0D%0ADragon%2C+Metallic+%28Bronze%2C+Young+Adult%29%0D%0ADragon%2C+Metallic+%28Copper%2C+Adult%29%0D%0ADragon%2C+Metallic+%28Gold%2C+Juvenile%29%0D%0ADragon%2C+Primal+%28Brine%2C+Mature+Adult%29%0D%0ADragon%2C+Primal+%28Cloud%2C+Young+Adult%29%0D%0ADragon%2C+Primal+%28Magma%2C+Adult%29%0D%0AEurypterid%2C+Spitting%0D%0AFrost+Worm%0D%0AGiant%2C+Taiga%0D%0AGolem%2C+Clockwork%0D%0AGolem%2C+Fossil%0D%0AInevitable%2C+Kolyarut%0D%0AJorogumo%0D%0AKyton%2C+Interlocutor%0D%0ALeviathan+Clockwork%0D%0ALich%0D%0AMohrg%2C+Demonic%0D%0ANightshade%2C+Nightskitter%0D%0APurple+Worm%0D%0APyrohydra+%2811-headed%29%0D%0AQlippoth%2C+Chernobue%0D%0ARoper%0D%0ARusalka%0D%0ASea+Serpent%0D%0AShining+Child%0D%0ATobongo%0D%0AValkyrie">
                            12
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=%0D%0AAkhlut%0D%0AAlraune%0D%0AAzata%2C+Ghaele%0D%0AAzruverda%0D%0ABandersnatch%2C+Lesser%0D%0ABanshee%0D%0ACarnivorous+Blob%0D%0ACharybdis%0D%0ACrab%2C+Shipwrecker%0D%0ACryohydra+%2812-headed%29%0D%0ADaemon%2C+Thanadaemon%0D%0ADemodand%2C+Tarry%0D%0ADemon%2C+Glabrezu+%0D%0ADevil%2C+Ice%09%0D%0ADragon%2C+Chromatic+%28Blue%2C+Adult%29%0D%0ADragon%2C+Chromatic+%28Green%2C+Mature+Adult%29%0D%0ADragon%2C+Chromatic+%28Red%2C+Young+Adult%29%0D%0ADragon%2C+Chromatic+%28White%2C+Old%29%0D%0ADragon%2C+Imperial+%28Forest%2C+Young+Adult%29%0D%0ADragon%2C+Imperial+%28Sea%2C+Adult%29%0D%0ADragon%2C+Imperial+%28Sky%2C+Adult%29%0D%0ADragon%2C+Metallic+%28Bronze%2C+Adult%29%0D%0ADragon%2C+Metallic+%28Copper%2C+Mature+Adult%29%0D%0ADragon%2C+Metallic+%28Silver%2C+Young+Adult%29%0D%0ADragon%2C+Primal+%28Cloud%2C+Adult%29%0D%0ADragon%2C+Primal+%28Crystal%2C+Old%29%0D%0ADragon%2C+Primal+%28Magma%2C+Mature+Adult%29%0D%0ADragon%2C+Primal+%28Umbral%2C+Young+Adult%29%0D%0AFroghemoth%0D%0AGhorazagh%0D%0AGiant%2C+Storm%0D%0AGolem%2C+Iron%0D%0AIrlgaunt%0D%0AMandragora+Swarm%0D%0APsychopomp%2C+Morrigna%0D%0APyrohydra+%2812-headed%29%0D%0AViper+Vine%0D%0AWraith%2C+Dread">
                            13
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Akaruzug%0D%0AAngel%2C+Astral+Deva%0D%0AAnkou%0D%0AArchon%2C+Trumpet%0D%0ADaemon%2C+Temerdaemon%0D%0ADemon%2C+Nalfeshnee%0D%0ADevil%2C+Handmaiden%0D%0ADiv%2C+Sepid%09%0D%0ADragon%2C+Chromatic+%28Black%2C+Old%29%0D%0ADragon%2C+Chromatic+%28Blue%2C+Mature+Adult%29%0D%0ADragon%2C+Chromatic+%28Red%2C+Adult%29%0D%0ADragon%2C+Chromatic+%28White%2C+Very+Old%29%0D%0ADragon%2C+Imperial+%28Forest%2C+Adult%29%0D%0ADragon%2C+Imperial+%28Sky%2C+Mature+Adult%29%0D%0ADragon%2C+Imperial+%28Sovereign%2C+Young+Adult%29%0D%0ADragon%2C+Metallic+%28Brass%2C+Old%29%0D%0ADragon%2C+Metallic+%28Bronze%2C+Mature+Adult%29%0D%0ADragon%2C+Metallic+%28Gold%2C+Young+Adult%29%0D%0ADragon%2C+Metallic+%28Silver%2C+Adult%29%0D%0ADragon%2C+Primal+%28Brine%2C+Old%29%0D%0ADragon%2C+Primal+%28Cloud%2C+Mature+Adult%29%0D%0ADragon%2C+Primal+%28Crystal%2C+Very+Old%29%0D%0ADragon%2C+Primal+%28Umbral%2C+Adult%29%0D%0ADemilich%0D%0AGolem%2C+Brass%0D%0ALeng+Spider%0D%0ALinnorm%2C+Crag%0D%0ANightshade%2C+Nightwing%0D%0AOni%2C+Ice+Yai%0D%0APeri%0D%0AQlippoth%2C+Augnagar%0D%0ATroll%2C+Mountain%0D%0AVemerak%0D%0AWhale%2C+Great+White">
                            14
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Agathion%2C+Cetaceal%0D%0ADaemon%2C+Crucidaemon%0D%0ADemon%2C+Seraptis%0D%0ADybbuk%0D%0ADragon%2C+Chromatic+%28Black%2C+Very+Old%29%0D%0ADragon%2C+Chromatic+%28Green%2C+Old%29%0D%0ADragon%2C+Chromatic+%28Red%2C+Mature+Adult%29%0D%0ADragon%2C+Chromatic+%28White%2C+Ancient%29%0D%0ADragon%2C+Imperial+%28Sea%2C+Old%29%0D%0ADragon%2C+Imperial+%28Forest%2C+Mature+Adult%29%0D%0ADragon%2C+Imperial+%28Sovereign%2C+Adult%29%0D%0ADragon%2C+Imperial+%28Underworld%2C+Very+Old%29%0D%0ADragon%2C+Metallic+%28Brass%2C+Very+Old%29%0D%0ADragon%2C+Metallic+%28Copper%2C+Old%29%0D%0ADragon%2C+Metallic+%28Gold%2C+Adult%29%0D%0ADragon%2C+Metallic+%28Silver%2C+Mature+Adult%29%0D%0ADragon%2C+Primal+%28Brine%2C+Very+Old%29%0D%0ADragon%2C+Primal+%28Crystal%2C+Ancient%29%0D%0ADragon%2C+Primal+%28Magma%2C+Old%29%0D%0ADragon%2C+Primal+%28Umbral%2C+Mature+Adult%29%0D%0AGolem%2C+Cannon%0D%0AGorynych%0D%0AHerald%2C+Arcanotheign%0D%0AHerald%2C+Basileus%0D%0AHerald%2C+Emperor+of+Scales%0D%0AHerald%2C+First+Blade%0D%0AHerald%2C+Hand+of+the+Inheritor%0D%0AHerald%2C+Kelpie%27s+Wrath%0D%0AHerald%2C+Mother%27s+Maw%0D%0AHerald%2C+Personification+of+Fury%0D%0AHerald%2C+Spirit+of+Adoration%0D%0AHerald%2C+Steward+of+the+Skein%0D%0AHerald%2C+The+Grim+White+Stag%0D%0AInevitable%2C+Marut%0D%0AJubjub+Bird%0D%0AKami%2C+Toshigami%0D%0AKongamato%0D%0ALinnorm%2C+Gare%0D%0AMandragora%2C+Immense%0D%0ANemhain%0D%0ANeothelid%0D%0AOni%2C+Fire+Yai%0D%0APhoenix%0D%0APopobala%0D%0ARakshasa%2C+Tataka%0D%0AScorpion%2C+Colossal+Black%0D%0ASea+Bonze%0D%0ATroll%2C+Jotund%0D%0AWyvern%2C+Barbed-Tongued%0D%0AXacarba">
                            15
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Aeon%2C+Bythos%0D%0AAngel%2C+Planetar%0D%0ADaemon%2C+Astradaemon%0D%0ADemilich+%28Advanced%29%0D%0ADemodand%2C+Slimy%0D%0ADemon%2C+Shemhazian%0D%0ADevil%2C+Belier%0D%0ADevil%2C+Horned%0D%0ADragon%2C+Chromatic+%28Black%2C+Ancient%29%0D%0ADragon%2C+Chromatic+%28Blue%2C+Old%29%0D%0ADragon%2C+Chromatic+%28Green%2C+Very+Old%29%0D%0ADragon%2C+Chromatic+%28White%2C+Wyrm%29%0D%0ADragon%2C+Imperial+%28Sea%2C+Very+Old%29%0D%0ADragon%2C+Imperial+%28Sky%2C+Old%29%0D%0ADragon%2C+Imperial+%28Sovereign%2C+Mature+Adult%29%0D%0ADragon%2C+Imperial+%28Underworld%2C+Ancient%29%0D%0ADragon%2C+Metallic+%28Brass%2C+Ancient%29%0D%0ADragon%2C+Metallic+%28Bronze%2C+Old%29%0D%0ADragon%2C+Metallic+%28Copper%2C+Very+Old%29%0D%0ADragon%2C+Metallic+%28Gold%2C+Mature+Adult%29%0D%0ADragon%2C+Primal+%28Brine%2C+Ancient%29%0D%0ADragon%2C+Primal+%28Cloud%2C+Old%29%0D%0ADragon%2C+Primal+%28Crystal%2C+Wyrm%29%0D%0ADragon%2C+Primal+%28Magma%2C+Very+Old%29%0D%0ADragon%2C+Spine%0D%0A%09Ecorche%0D%0AGolemm%2C+Mithral%0D%0AGrootslang%0D%0AHollow+Serpent%0D%0ALinnorm%2C+Fjord%0D%0ANightshade%2C+Nightwalker%0D%0AOma%0D%0AOoze%2C+Plasma%0D%0AScylla%0D%0AWarsworn%0D%0AZomok">
                            16
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Azata%2C+Brijidine%0D%0ABandersnatch%0D%0ADaemon%2C+Phasmadaemon%0D%0ADemon%2C+Marilith%09%0D%0ADragon%2C+Chromatic+%28Black%2C+Wyrm%29%0D%0ADragon%2C+Chromatic+%28Blue%2C+Very+Old%29%0D%0ADragon%2C+Chromatic+%28Green%2C+Ancient%29%0D%0ADragon%2C+Chromatic+%28Red%2C+Old%29%0D%0ADragon%2C+Imperial+%28Forest%2C+Old%29%0D%0ADragon%2C+Imperial+%28Sea%2C+Ancient%29%0D%0ADragon%2C+Imperial+%28Sky%2C+Very+Old%29%0D%0ADragon%2C+Imperial+%28Underworld%2C+Wyrm%29%0D%0ADragon%2C+Metallic+%28Brass%2C+Wyrm%29%0D%0ADragon%2C+Metallic+%28Copper%2C+Ancient%29%0D%0ADragon%2C+Metallic+%28Silver%2C+Old%29%0D%0ADragon%2C+Metallic+%28Bronze%2C+Very+Old%29%0D%0ADragon%2C+Primal+%28Brine%2C+Wyrm%29%0D%0ADragon%2C+Primal+%28Cloud%2C+Very+Old%29%0D%0ADragon%2C+Primal+%28Magma%2C+Ancient%29%0D%0ADragon%2C+Primal+%28Umbral%2C+Old%29%0D%0AGiant%2C+Rune%0D%0AKeketar%0D%0ALinnorm%2C+Ice%0D%0ALusca%0D%0AShinigami%0D%0AThrasfyr%0D%0AWendigo%0D%0AWinterwight">
                            17
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Behemoth%2C+Thunder%0D%0ABandersnatch%2C+Confounding%0D%0ADaemon%2C+Purrodaemon%0D%0ADemodand%2C+Shaggy%0D%0ADemon%2C+Vavakia%0D%0ADragon%2C+Chromatic+%28Blue%2C+Ancient%29%0D%0ADragon%2C+Chromatic+%28Green%2C+Wyrm%29%0D%0ADragon%2C+Chromatic+%28Red%2C+Very+Old%29%0D%0ADragon%2C+Chromatic+%28White%2C+Great+Wyrm%29%0D%0ADragon%2C+Imperial+%28Forest%2C+Very+Old%29%0D%0ADragon%2C+Imperial+%28Sea%2C+Wyrm%29%0D%0ADragon%2C+Imperial+%28Sky%2C+Ancient%29%0D%0ADragon%2C+Imperial+%28Sovereign%2C+Old%29%0D%0ADragon%2C+Metallic+%28Bronze%2C+Ancient%29%0D%0ADragon%2C+Metallic+%28Copper%2C+Wyrm%29%0D%0ADragon%2C+Metallic+%28Gold%2C+Old%29%0D%0ADragon%2C+Metallic+%28Silver%2C+Very+Old%29%0D%0ADragon%2C+Primal+%28Cloud%2C+Ancient%29%0D%0ADragon%2C+Primal+%28Crystal%2C+Great+Wyrm%29%0D%0ADragon%2C+Primal+%28Magma%2C+Wyrm%29%0D%0ADragon%2C+Primal+%28Umbral%2C+Very+Old%29%0D%0AKraken%0D%0ALinnorm%2C+Cairn%0D%0ANightshade%2C+Nightcrawler%0D%0ANorn%0D%0AOni%2C+Water+Yai%0D%0AQlippoth%2C+Thulgant%0D%0ASimurgh%0D%0AThraie+Queen">
                            18
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=%0D%0ABandersnatch%2C+Frumious%0D%0ABandersnatch%2C+Primal%0D%0AClockwork+Goliath%0D%0ADaemon%2C+Obsicidaemon%0D%0ADemon%2C+Vrolikai%0D%0ADevil%2C+Immolation%09%0D%0ADragon%2C+Chromatic+%28Black%2C+Great+Wyrm%29%0D%0ADragon%2C+Chromatic+%28Blue%2C+Wyrm%29%0D%0ADragon%2C+Chromatic+%28Red%2C+Ancient%29%0D%0ADragon%2C+Imperial+%28Forest%2C+Ancient%29%0D%0ADragon%2C+Imperial+%28Sky%2C+Wyrm%29%0D%0ADragon%2C+Imperial+%28Sovereign%2C+Very+Old%29%0D%0ADragon%2C+Imperial+%28Underworld%2C+Great+Wyrm%29%0D%0ADragon%2C+Metallic+%28Brass%2C+Great+Wyrm%29%0D%0ADragon%2C+Metallic+%28Bronze%2C+Wyrm%29%0D%0ADragon%2C+Metallic+%28Gold%2C+Very+Old%29%0D%0ADragon%2C+Metallic+%28Silver%2C+Ancient%29%0D%0ADragon%2C+Primal+%28Brine%2C+Great+Wyrm%29%0D%0ADragon%2C+Primal+%28Cloud%2C+Wyrm%29%0D%0ADragon%2C+Primal+%28Umbral%2C+Ancient%29%0D%0AGolem%2C+Adamantine%0D%0AHumbaba%0D%0ALinnorm%2C+Taiga%0D%0ARavener+Green+Dragon+%28Ancient%29%0D%0ASard%0D%0ASea+Serpent%2C+Deep%0D%0AShoggoth%0D%0ATzitzimitl">
                            19
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Aeon%2C+Pleroma%0D%0AAsura%2C+Asurendra%0D%0ABandersnatch%2C+Magicbane%0D%0ABehemoth%2C+Thalassic%0D%0ADaemon%2C+Olethrodaemon%0D%0ADemon%2C+Balor%0D%0ADevil%2C+Pit+Fiend%0D%0ADiv%2C+Akvan%0D%0ADraconal%0D%0ADragon%2C+Chromatic+%28Green%2C+Great+Wyrm%29%0D%0ADragon%2C+Chromatic+%28Red%2C+Wyrm%29%0D%0ADragon%2C+Imperial+%28Forest%2C+Wyrm%29%0D%0ADragon%2C+Imperial+%28Sea%2C+Great+Wyrm%29%0D%0ADragon%2C+Imperial+%28Sovereign%2C+Ancient%29%0D%0ADragon%2C+Metallic+%28Copper%2C+Great+Wyrm%29%0D%0ADragon%2C+Metallic+%28Gold%2C+Ancient%29%0D%0ADragon%2C+Metallic+%28Silver%2C+Wyrm%29%0D%0ADragon%2C+Primal+%28Magma%2C+Great+Wyrm%29%0D%0ADragon%2C+Primal+%28Umbral%2C+Wyrm%29%0D%0AGrim+Reaper%0D%0AInevitable%2C+Lhaksharut%0D%0AKami%2C+Jinushigami%0D%0AKyton%2C+Eremite%0D%0ALinnorm%2C+Tarn%0D%0ANightshade%2C+Nightwave%0D%0AOni%2C+Void+Yai%0D%0APsychopomp%2C+Yamaraj%0D%0AQlippoth%2C+Iathavos%0D%0ARakshasa%2C+Maharaja%0D%0AStar+Spawn+of+Cthulhu">
                            20
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Dragon%2C+Chromatic+%28Blue%2C+Great+Wrym%29%0D%0ADragon%2C+Imperial+%28Sky%2C+Great+Wyrm%29%0D%0ADragon%2C+Imperial+%28Sovereign%2C+Wyrm%29%09%0D%0ADragon%2C+Metallic+%28Bronze%2C+Great+Wyrm%29%0D%0ADragon%2C+Metallic+%28Gold%2C+Wyrm%29%0D%0ADragon%2C+Primal+%28Cloud%2C+Great+Wyrm%29%0D%0ALinnorm%2C+Tor%0D%0AMu+Spore%0D%0ATitan%2C+Elysian">
                            21
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=%0D%0ABehemoth%2C+Tempest%0D%0ADragon%2C+Chromatic+%28Red%2C+Great+Wyrm%29%0D%0ADragon%2C+Imperial+%28Forest%2C+Great+Wyrm%29%0D%0ADragon%2C+Metallic+%28Silver%2C+Great+Wyrm%29%0D%0ADragon%2C+Primal+%28Umbral%2C+Great+Wyrm%29%0D%0ARavener+Red+Dragon+%28Wyrm%29%0D%0ATitan%2C+Thanatotic">
                            22
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=%0D%0AAngel%2C+Solar%0D%0ABlood+Queen%0D%0ADragon%2C+Metallic+%28Gold%2C+Great+Wyrm%29%0D%0ADragon%2C+Imperial+%28Sovereign%2C+Wyrm%29%0D%0AJabberwock">
                            23
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Titan%2C+Hekatonkhieres">
                            24
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Tarrasque">
                            25
                        </a></td>
                    </tr>
                </table>
            </div>
            <div class="blockHolder">
                <h2 id="Magic-Items">Magic Items</h2>
                <table class="table table-striped table-bordered block">
                    <tr><th>Weapon Abilities</th><th>Bonus</th></tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Impervious%0D%0AGlamered%0D%0AAllying%0D%0ABane%0D%0ABenevolent%0D%0ACalled%0D%0AConductive%0D%0ACorrosive%0D%0ACountering%0D%0ACourageous%0D%0ACruel%0D%0ACunning%0D%0ADeadly%0D%0ADefending%0D%0ADispelling%0D%0AFlaming%0D%0AFrost%0D%0AFurious%0D%0AGhost+touch%0D%0AGrayflame%0D%0AGrounding%0D%0AGuardian%0D%0AHeartseeker%0D%0AHuntsman%0D%0AJurist%0D%0AKeen%0D%0AKi+focus%0D%0ALimning%0D%0AMenacing%0D%0AMerciful%0D%0AMighty+cleaving%0D%0AMimetic%0D%0ANeutralizing%0D%0AOminous%0D%0APlanar%0D%0AQuenching%0D%0ASeaborne%0D%0AShock%0D%0ASpell+storing%0D%0AThawing%0D%0AThrowing%0D%0AThundering%0D%0AValiant%0D%0AVicious">
                            Melee
                        </a></td>
                        <td>+1</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Advancing%0D%0AAnarchic%0D%0AAnchoring%0D%0AAxiomatic%0D%0ACorrosive+burst%0D%0ADefiant%0D%0ADispelling+burst%0D%0ADisruption%0D%0AFlaming+burst%0D%0AFuryborn%0D%0AGlorious%0D%0AHoly%0D%0AIcy+burst%0D%0AIgniting%0D%0AImpact4%0D%0AInvigorating%0D%0AKi+intensifying%0D%0ALifesurge%0D%0ANegating%0D%0APhase+locking%0D%0AShocking+burst%0D%0AStalking%0D%0AUnholy%0D%0AWounding">
                            Melee
                        </a></td>
                        <td>+2</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Nullifying%0D%0ARepositioning%0D%0ASpeed%0D%0ASpell+stealing">
                            Melee
                        </a></td>
                        <td>+3</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Brilliant+energy%0D%0ADancing%0D%0AVorpal%0D%0ATransformative%0D%0ADueling">
                            Melee
                        </a></td>
                        <td>+4 or +5</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Adaptive%0D%0AImpervious%0D%0AGlamered%0D%0AAllying%0D%0ABane%0D%0ACalled%0D%0AConductive%0D%0AConserving%0D%0ACorrosive%0D%0ACruel%0D%0ACunning%0D%0ADistance%0D%0AFlaming%0D%0AFrost%0D%0AHuntsman%0D%0AJurist%0D%0ALimning%0D%0ALucky%0D%0AMerciful%0D%0APlanar%0D%0AReliable%0D%0AReturning%0D%0ASeeking%0D%0AShock%0D%0AThundering">
                            Ranged
                        </a></td>
                        <td>+1</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Anarchic%0D%0AAnchoring%0D%0AAxiomatic%0D%0ACorrosive+burst%0D%0ADesignating%2C+lesser%0D%0AEndless+ammunition%0D%0AFlaming+burst%0D%0AHoly%0D%0AIcy+burst%0D%0AIgniting%0D%0APhase+locking%0D%0AShocking+burst%0D%0AStalking%0D%0AUnholy">
                            Ranged
                        </a></td>
                        <td>+2</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Lucky%2C+greater%0D%0AReliable%2C+greater%0D%0ASpeed%0D%0ABrilliant+energy%0D%0ADesignating%2C+greater%0D%0ANimble+shot%0D%0ASecond+chance">
                            Ranged
                        </a></td>
                        <td>+3 or +4</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Dry+load%0D%0ABane%0D%0AConductive%0D%0ACorrosive%0D%0ACruel%0D%0ACunning%0D%0AFlaming%0D%0AFrost%0D%0AGhost+touch%0D%0ALimning%0D%0AMerciful%0D%0APlanar%0D%0ASeeking%0D%0AShock%0D%0AThundering">
                            Ammunition
                        </a></td>
                        <td>+1</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Anarchic%0D%0AAxiomatic%0D%0ACorrosive+burst%0D%0ADesignating%2C+lesser%0D%0AFlaming+burst%0D%0AHoly%0D%0AIcy+burst%0D%0AIgniting%0D%0APhase+locking%0D%0AShocking+burst%0D%0AUnholy">
                            Ammunition
                        </a></td>
                        <td>+2</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Brilliant+energy%0D%0ADesignating%2C+greater">
                            Ammunition
                        </a></td>
                        <td>+4</td>
                    </tr>
                </table>
                <table class="table table-striped table-bordered block">
                    <tr><th>Armor & Shield Abilities</th><th>Bonus</th></tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Benevolent%0D%0APoison-resistant%0D%0ABalanced%0D%0ABitter%0D%0ABolstering%0D%0ABrawling%0D%0AChampion%0D%0ADastard%0D%0ADeathless%0D%0ADefiant%0D%0AFortification%28light%29%0D%0AGrinding%0D%0AImpervious%0D%0AMirrored%0D%0ASpell+storing%0D%0AStanching%0D%0AWarding">
                            Armor
                        </a></td>
                        <td>+1</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Glamered%0D%0AJousting%0D%0AShadow%0D%0ASlick%0D%0AExpeditious%0D%0ACreeping%0D%0ARallying%0D%0ASpell+resistance%2813%29">
                            Armor
                        </a></td>
                        <td>+2</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Adhesive%0D%0AHosteling%0D%0ARadiant%0D%0ADelving%0D%0APutrid%0D%0AFortification%28moderate%29%0D%0AGhost+touch%0D%0AInvulnerability%0D%0ASpell+resistance%2815%29%0D%0ATitanic%0D%0AWild">
                            Armor
                        </a></td>
                        <td>+3</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Harmonizing%0D%0AShadow%2C+improved%0D%0ASlick%2C+improved%0D%0AEnergy+resistance%0D%0AMartyring%0D%0ASpell+resistance%2817%29">
                            Armor
                        </a></td>
                        <td>+4</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Righteous%0D%0AUnbound%0D%0AUnrighteous%0D%0AVigilant%0D%0ADetermination%0D%0AShadow%2C+greater%0D%0ASlick%2C+greater%0D%0AEnergy+resistance%2C+improved%0D%0AEtherealness%0D%0AUndead+controlling%0D%0AEnergy+resistance%2C+greater%0D%0AFortification%28heavy%29%0D%0ASpell+resistance%2819%29">
                            Armor
                        </a></td>
                        <td>+5</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Poison-resistant%0D%0AArrow+catching%0D%0ABashing%0D%0ABlinding%0D%0AClangorous%0D%0ADefiant%0D%0AFortification%28light%29%0D%0AGrinding%0D%0AImpervious%0D%0AMirrored%0D%0ARamming">
                            Shield
                        </a></td>
                        <td>+1</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Rallying%0D%0AWyrmsbreath%0D%0AAnimated%0D%0AArrow+deflection%0D%0AMerging%0D%0ASpell+resistance%2813%29">
                            Shield
                        </a></td>
                        <td>+2</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Hosteling%0D%0ARadiant%0D%0AFortification%28moderate%29%0D%0AGhost+touch%0D%0ASpell+resistance%2815%29%0D%0AWild">
                            Shield
                        </a></td>
                        <td>+3</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Energy+resistance%0D%0ASpell+resistance%2817%29">
                            Shield
                        </a></td>
                        <td>+4</td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Determination%0D%0AEnergy+resistance%2C+improved%0D%0AUndead+controlling%0D%0AEnergy+resistance%2C+greater%0D%0AFortification%28heavy%29%0D%0AReflecting%0D%0ASpell+resistance%2819%29">
                            Shield
                        </a></td>
                        <td>+5</td>
                    </tr>
                </table>
                <table class="table table-striped table-bordered block">
                    <tr><th>Armor</th><th>Shields</th><th>Weapons</th></tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Mithral+shirt%0D%0AMasterwork+armor+or+non-magical+armor+made+with+special+material">
                            Lesser Minor
                        </a></td>
                        <td><a href="/tools/tableroller/tableroller.php?t=Living+steel+heavy+shield%0D%0ADarkwood+Buckler%0D%0ADarkwood+shield%0D%0AMithral+heavy+shield">
                            Lesser Minor
                        </a></td>
                        <td><a href="/tools/tableroller/tableroller.php?t=Tracer+bullet%0D%0ASleep+arrow%0D%0ADustburst+bullet%0D%0ATangle+bolt%0D%0AScreaming+bolt%0D%0AMasterwork+silver+dagger%0D%0AAlchemist%27s+bullet%0D%0ACold+iron+masterwork+longsword%0D%0AHushing+arrow%0D%0AHushing+arrow%2C+greater%0D%0AJavelin+of+lightning%0D%0ASearing+arrow%0D%0ASizzling+arrow%0D%0ABurrowing+bullet%2C+lesser%0D%0ADust+bolt%0D%0ASlaying+arrow">
                            Lesser Minor
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Mistmail%0D%0AOtyugh+hide%0D%0ADragonhide+plate">
                            Greater Minor
                        </a></td>
                        <td><a href="/tools/tableroller/tableroller.php?t=Zombie+skin+shield%0D%0ACaster%27s+shield%0D%0ABurglar%27s+Buckler%0D%0AMithral+heavy+shield">
                            Greater Minor
                        </a></td>
                        <td><a href="/tools/tableroller/tableroller.php?t=Adamantine+dagger%0D%0AAdamantine+battleaxe%0D%0ABurrowing+bullet%2C+greater%0D%0ASlaying+arrow%2C+greater%0D%0ALance+of+jousting%0D%0AShatterspike">
                            Greater Minor
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Elven+chain%0D%0ARhino+hide%0D%0AMorlock+hide">
                            Lesser Medium
                        </a></td>
                        <td><a href="/tools/tableroller/tableroller.php?t=Spined+shield%0D%0ADragonslayer%27s+shield%0D%0ACollapsible+tower%0D%0ALion%27s+shield">
                            Lesser Medium
                        </a></td>
                        <td><a href="/tools/tableroller/tableroller.php?t=Bloodletting+kukri%0D%0ABoulderhead+mace%0D%0ABeaststrike+club%0D%0AFighter%27s+fork%0D%0AEverflowing+aspergillum%0D%0AHurricane+quarterstaff%0D%0ADagger+of+venom%0D%0AGloom+blade%0D%0ATrident+of+stability%0D%0ATrident+of+warning%0D%0AAssassin%27s+dagger%0D%0ADagger+of+doubling%0D%0AEarthenflail%0D%0ASwift+obsidian+greataxe%0D%0APolarity+hammer%0D%0ABlade+of+binding%0D%0AShifter%27s+sorrow">
                            Lesser Medium
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Adamantine+breastplate%0D%0ASoothsayer%27s+raiment%0D%0AEquestrian+plate%0D%0AEnchanted+eelskin%0D%0ABoneless+leather%0D%0AMurderer%27s+blackcloth%0D%0AFolding+plate%0D%0ABreastplate+of+vanishing">
                            Greater Medium
                        </a></td>
                        <td><a href="/tools/tableroller/tableroller.php?t=Caster%27s+shield%2C+greater%0D%0ACelestial+shield%0D%0AMaelstrom+shield%0D%0AVolcanic+shield%0D%0ATempest+shield">
                            Greater Medium
                        </a></td>
                        <td><a href="/tools/tableroller/tableroller.php?t=Dragoncatch+guisarme%0D%0ATen-ring+sword%0D%0ATriton%27s+trident%0D%0AMace+of+smiting%2C+lesser%0D%0ADisarming+blade%0D%0ALash+of+the+howler%0D%0AShieldsplitter+lance%0D%0ATrident+of+fish+command%0D%0AQuarterstaff+of+vaulting%0D%0AFiredrake+pistol%0D%0ARicochet+hammer%0D%0AFlame+tongue%0D%0ASparkwake+starknife%0D%0ALuck+blade+%280+wishes%29%0D%0ASword+of+subtlety%0D%0ASword+of+the+planes">
                            Greater Medium
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Armor+of+insults%0D%0ADwarven+plate%0D%0ABanded+mail+of+luck%0D%0ACatskin+leather%0D%0ACelestial+armor%0D%0ABuccaneer%27s+breastplate%0D%0APlate+armor+of+the+deep">
                            Lesser Major
                        </a></td>
                        <td><a href="/tools/tableroller/tableroller.php?t=Battlement+shield%0D%0AWinged+shield%0D%0AAvalanche+shield%0D%0AFortress+shield%0D%0AWyrmslayer%27s+shield">
                            Lesser Major
                        </a></td>
                        <td><a href="/tools/tableroller/tableroller.php?t=Nine+lives+stealer%0D%0AUndercutting+axe%0D%0ASpirit+caller%0D%0ADwarfbond+hammer%0D%0AOathbow%0D%0ASword+of+life+stealing%0D%0ACutthroat%27s+apprentice">
                            Lesser Major
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Breastplate+of+command%0D%0AForsaken+banded+mail%0D%0AMithral+full+plate+of+speed%0D%0AWarden+of+the+woods%0D%0AScarab+breastplate%0D%0AGiant-hide+armor+%28ogre%29%0D%0AHamatula+hide%0D%0AGiant-hide+armor+%28hill+giant%29%0D%0ADemon+armor%0D%0AGiant-hide+armor%28stone%2C+fire%2C+or+frost+giant%29%0D%0AGiant-hide+armor+%28troll%29%0D%0AMail+of+malevolence%0D%0AGiant-hide+armor%28cloud+giant%29%0D%0AGiant-hide+armor%28storm+giant%29%0D%0ADaystar+half-plate%0D%0AInvincible+armor%0D%0APrismatic+plate">
                            Greater Major
                        </a></td>
                        <td><a href="/tools/tableroller/tableroller.php?t=Spell+ward+tower+shield%0D%0AQuick+block+buckler%0D%0ABelligerent+shield%0D%0AForce+tower%0D%0AAbsorbing+shield%0D%0AElysian+shield">
                            Greater Major
                        </a></td>
                        <td><a href="/tools/tableroller/tableroller.php?t=Ghoul%27s+lament%0D%0AMace+of+terror%0D%0AHellscourge%0D%0ADragon%27s+doom%0D%0ALife-drinker%0D%0AValor%27s+minion%0D%0ASummoner%27s+sorrow%0D%0ASylvan+scimitar%0D%0ASpirit+blade%0D%0AHeartswood+spear%0D%0ARapier+of+puncturing%0D%0ASun+blade%0D%0ABlade+of+the+rising+sun%0D%0AFrost+brand%0D%0ADwarven+thrower%0D%0ABloodthirst+dagger%0D%0AWarbringer%0D%0ALuck+blade+%281+wish%29%0D%0AGuarding+blade%0D%0APistol+of+the+infinite+sky%0D%0AMace+of+smiting%0D%0ABlade+of+the+sword-saint%0D%0AScimitar+of+the+spellthief%0D%0ASpider%27s+fang%0D%0ADemonsorrow+curve+blade%0D%0AVoid+scythe%0D%0ALuck+blade+%282+wishes%29%0D%0AHoly+avenger%0D%0ABastard%27s+sting%0D%0ALuck+blade+%283+wishes%29">
                            Greater Major
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Adamantine+Breastplate%0D%0AAdvocate%27s+Armor%0D%0AAlchemist%27s+Suit%0D%0AAll-Seeing+Armor%0D%0AArboreal+Armor%0D%0AArmiger%27s+Armor%0D%0AArmor+of+Fragmenting+Stone%0D%0AArmor+of+Insults%0D%0AArmor+of+the+Sands%0D%0AArmor+of+the+Unquenchable+Fire%0D%0ABackbreaker+Mail%0D%0ABanded+Mail+of+Luck%0D%0ABlackfingers+Apron%0D%0ABoneless+Leather%0D%0ABreastplate+of+Command%0D%0ABreastplate+of+Vanishing%0D%0ABuccaneer%27s+Breastplate%0D%0ACatskin+Leather%0D%0ACelestial+Armor%0D%0ACelestial+Plate+Armor%0D%0AChain+Vest+of+Dawn%0D%0ACrag+Linnorm+Plate%0D%0ADaystar+Half-Plate%0D%0ADeath%27s+Preservation+Banded+Mail%0D%0ADemon+Armor%0D%0ADragonform+Armor%0D%0ADragonhide+Plate%0D%0ADwarven+Plate%0D%0AElven+Chain%0D%0AEmpyreal+Armor%0D%0AEnchanted+Eelskin%0D%0AEquestrian+Plate%0D%0AEternal+Iron+Breastplate%0D%0AFangtide+Scale+Mail%0D%0AField+Medic%27s+Breastplate%0D%0AFlashguard+Plate%0D%0AFolding+Plate%0D%0AForgemaster%27s+Half-Plate%0D%0AForsaken+Banded+Mail%0D%0AFull+Plate+of+the+Corpse%0D%0AGelugon+Armor%0D%0AGelugon+Plate%0D%0AGhoul+Hide%0D%0AGiant-Hide+Armor%0D%0AGloom+Mail%0D%0AGossamer+Shrouds+of+the+Clairvoyant%0D%0AGravewatcher+Chainmail%0D%0AGray+Master%27s+Leathers%0D%0AHalf-Plate+of+the+Dark+Prince%0D%0AHamatula+Hide%0D%0AHellwasp+Corset%0D%0AHero%27s+Hauberk%0D%0AHunter%27s+Leather%0D%0AInfiltrator%27s+Mail%0D%0AInheritor%27s+Breastplate%0D%0AInvincible+Armor%0D%0AJudge%27s+Breastplate%0D%0AJungle+Armor%0D%0ALifecollar+Coat%0D%0ALuck+Mail%2C+Greater%0D%0ALuck+Mail%2C+Lesser%0D%0AMail+of+Malevolence%0D%0AMammoth+Hide+%28ISC%29%0D%0AMammoth+Hide+%28MTT%29%0D%0AMan+Mountain+Armor%0D%0AMistmail%0D%0AMithral+Full+Plate+of+Speed%0D%0AMithral+Shirt%0D%0AMorlock+Hide%0D%0AMosswater+Stained+Leather%0D%0AMurderer%27s+Blackcloth%0D%0AOtyugh+Hide%0D%0APainspike+Armor%0D%0APallid+Chain%0D%0APelt+of+the+Demon+Mother%0D%0APerfection+Leather%0D%0APhoenix+Armor%0D%0APlate+Armor+of+the+Deep%0D%0APrismatic+Plate%0D%0ARed+Stalker+Armor%0D%0ARhino+Hide%0D%0ARosy+Hauberk%0D%0AScarab+Breastplate%0D%0AScouting+Leather%0D%0ASea+Banshee+Coat%0D%0ASea+Coat%0D%0ASkullduster%0D%0ASky+Knight+Dress+Uniform%0D%0ASnailplate%0D%0ASnakescale+Armor%0D%0ASoothsayer%27s+Raiment%0D%0AStalking+Armor%0D%0AStarfaring+Robes%0D%0AStarsong+Mail%0D%0ATiger%27s+Hide%0D%0ATireless+Tracking+Hide%0D%0AToiler%27s+Armor%0D%0ATunnel+Defender+Stoneplate%0D%0AVeiled+Chain%0D%0AWar+Commander%27s+Field+Plate%0D%0AWarden+of+the+Woods%0D%0AWaverider+Breastplate%0D%0AWizard%27s+Mail%0D%0AWorkman%27s+Armor%0D%0AWrithing+Armor%0D%0AXill+Carapace+Armor">
                            All Piazo
                        </a></td>
                        <td><a href="/tools/tableroller/tableroller.php?t=Absorbing+Shield%0D%0AAvalanche+Shield%0D%0ABattlement+Shield%0D%0ABelligerent+Shield%0D%0ABloodfeast+Shield%0D%0ABroadside+Bulwark%0D%0ABronze+Whisperer%27s+Shield%0D%0ABurglar%27s+Buckler%0D%0ACaster%27s+Shield%0D%0ACelestial+Shield%0D%0ACollapsible+Tower%0D%0ADarkwood+Buckler%0D%0ADarkwood+Shield%0D%0ADragonslayer%27s+Shield%0D%0ADriftwood+Shield%0D%0AElephant+Shield%0D%0AElysian+Shield%0D%0AEqualizer+Shield%0D%0AForce+Tower%0D%0AFortress+Shield%0D%0AGuard+of+Man%0D%0AHowling+Skull+Armor%0D%0ALion%27s+Shield%0D%0ALion-Skull+Klar%0D%0ALiving+Steel+Heavy+Shield%0D%0AMaelstrom+Shield%0D%0AMithral+Heavy+Shield%0D%0AQuick+Block+Buckler%0D%0AShield+of+Covered+Retreat%0D%0AShield+of+Hags%0D%0AShield+of+Sunrise%0D%0AShield+of+the+Mazeborn%0D%0ASlaver%27s+Madu%0D%0ASpell+Ward+Tower+Shield%0D%0ASpellbane+Shield%0D%0ASpined+Shield%0D%0ASpirit+Shield%0D%0ATempest+Shield%0D%0AVolcanic+Shield%0D%0AWinged+Shield%0D%0AWyrmslayer%27s+Shield%0D%0AZombie+Skin+Shield">
                            All Piazo
                        </a></td>
                        <td><a href="/tools/tableroller/tableroller.php?t=Alchemist%27s+Bullet%0D%0AArachnid%27s+Fang%0D%0AArrow+of+Charming%0D%0AArrow+Splitter%0D%0AAssassin%27s+Blade%0D%0AAssassin%27s+Dagger%0D%0AAvalanche+Sling+Staff%0D%0AAxe+of+Felling%0D%0AAxe+of+Forced+Life%0D%0ABastard%27s+Sting%0D%0ABattleaxe%2C+Adamantine%0D%0ABeast+Wrestler%27s+Gauntlets%0D%0ABeaststrike+Club%0D%0ABlade+of+Binding%0D%0ABlade+of+the+Rising+Sun%0D%0ABlade+of+the+Sword-Saint%0D%0ABloatstrike+Tail%0D%0ABloodletting+Kukri%0D%0ABloodstone+Impaler%0D%0ABloodthirst+Dagger%0D%0ABlood%E2%80%99s+Edge%0D%0ABoarding+Pike+of+Repelling%0D%0ABoulder+Bullet%0D%0ABoulderhead+Mace%0D%0ABow+of+Ashes%0D%0ABrine%27s+Sting%0D%0ABurrowing+Bullet%0D%0ACavalryman%27s+Bow%0D%0AChanneler%27s+Aspergillum%0D%0AConstrictor%27s+Gauntlets%0D%0ACrimson+Bluff%0D%0ACutthroat%27s+Apprentice%0D%0ADagger+of+Doubling%0D%0ADagger+of+Venom%0D%0ADagger%2C+Adamantine%0D%0ADancing+Wasp%0D%0ADeadflesh+Waraxe%0D%0ADeck+of+Slivering+Fate%0D%0ADemonsorrow+Curve+Blade%0D%0ADevil%27s+Key%0D%0ADisarming+Blade%0D%0ADizzying+Bullet%0D%0ADoppelganger%27s+Sword%0D%0ADragon%27s+Doom%0D%0ADragon%27s+Tail%0D%0ADragonbleeder%0D%0ADragoncatch+Guisarme%0D%0ADuel+Master%27s+Edge%0D%0ADuelist%27s+Comate%0D%0ADust+Bolt%0D%0ADustburst+Bullet%0D%0ADwarf+Smasher%0D%0ADwarfbond+Hammer%0D%0ADwarven+Thrower%0D%0ADwindling+Bullet%0D%0AEagle%27s+Blade%0D%0AEarth+Breaker+of+Righted+Injustice%0D%0AEarthenflail%0D%0AEffortless+Lace%0D%0AEverflowing+Aspergillum%0D%0AFanged+Falchion%0D%0AFighter%27s+Fork%0D%0AFinal+Word%0D%0AFiredrake+Pistol%0D%0AFlame+Tongue%0D%0AFleshwarped+Scorpion%27s+Tail%0D%0AFrost+Brand%0D%0AFrostbite+Sling%0D%0AFrozen+Crossbow%0D%0AGhoul%27s+Lament%0D%0AGlaive-Guisarme+of+The+Vanguard%0D%0AGloom+Blade%0D%0AGrasping+Bolas%0D%0AGreenblood+Scourge%0D%0AGrudge+Blade%0D%0AGuarding+Blade%0D%0AHeadsman%27s+Blade%0D%0AHeartripper+Blade%0D%0AHeartswood+Spear%0D%0AHellcaller%27s+Edge%0D%0AHellscourge%0D%0AHero%E2%80%99s+Blade%0D%0AHoly+Avenger%0D%0AHorseshoes+of+Sacred+Silver%0D%0AHunter%27s+Starknife%0D%0AHurricane+Quarterstaff%0D%0AHushing+Arrow%0D%0AImpaler+of+Thorns%0D%0AIrradiating+Tail%0D%0AJavelin+of+Lightning%0D%0AJudicial+Hammer%0D%0AKnight-Captain%27s+Lance%0D%0AKyton+Scourge%0D%0ALacerating+Rapier%0D%0ALady%27s+Spiral%0D%0ALance+of+Jousting%0D%0ALash+of+the+Howler%0D%0ALegbreaker%0D%0ALife-Drinker%0D%0ALizardmarked+Blade%0D%0ALongsword%2C+Cold+Iron+Masterwork%0D%0ALuck+Blade%0D%0AMace+of+Smiting%0D%0AMace+of+Terror%0D%0AMachete+of+Clearing%0D%0AMage%27s+Crossbow%0D%0AManchiller%0D%0AMarrowcracker%0D%0AMaster%27s+Woe+Stiletto%0D%0AMaul+of+the+Titans%0D%0AMonastic+Warden%0D%0AMute+Dart%0D%0ANimble+Whip%0D%0ANine+Lives+Stealer%0D%0AOaken+Staff%0D%0AOathbow%0D%0AOnyx+Spear%0D%0APeacekeeping+Pistol%0D%0APhase+Arrow%0D%0APistol+of+the+Infinite+Sky%0D%0APistol%2C+Loudshot%0D%0APolarity+Hammer%0D%0APurging+Falcata%0D%0AQuarterstaff+of+Contemplation%0D%0AQuarterstaff+of+Vaulting%0D%0ARabbit%27s+Blade%0D%0ARapier+of+Battlefield+Movement%0D%0ARapier+of+Puncturing%0D%0AReaver%E2%80%99s+Scythe%0D%0ARending+Claw+Blade%0D%0AReporting+Cartridge%0D%0ARicochet+Hammer%0D%0ARisen+Blade%0D%0ARotblade%0D%0ARunefrost+Hatchet%0D%0ASacrificial+Sword%0D%0ASadist%27s+Lash%0D%0AScimitar+of+the+Spellthief%0D%0AScouting+Cartridge%0D%0AScreaming+Bolt%0D%0ASearing+Arrow%0D%0ASecret+Crossbow%0D%0ASeraphic+Pistol%0D%0AShade+Bow%0D%0AShadowbound+Chains%0D%0AShatterspike%0D%0AShatterstone+Hammer%0D%0AShearing+Sword%0D%0AShieldsplitter+Lance%0D%0AShifter%27s+Sorrow%0D%0AShockwave+Blunderbuss%0D%0AShrivelblade%0D%0ASignifer%27s+Fist%0D%0ASilver+Dagger%2C+Masterwork%0D%0ASizzling+Arrow%0D%0ASkulking+Sniper%27s+Blowgun%0D%0ASkyrocket+Crossbow%0D%0ASlaver%27s+Cane%0D%0ASlaying+Arrow%0D%0ASleep+Arrow%0D%0ASmuggler%27s+Sling%0D%0ASnakebite%0D%0ASnakebite+Dagger%0D%0ASparkwake+Starknife%0D%0ASpider%27s+Fang%0D%0ASpirit+Blade%0D%0ASpirit+Bolas%0D%0ASpirit+Caller%0D%0ASplitting+Bolt%0D%0AStarbow%0D%0AStarknife+of+the+Void%0D%0ASteadfast+Urumi%0D%0AStirge+Dart%0D%0ASummoner%27s+Sorrow%0D%0ASun+Blade%0D%0ASwashbuckler%27s+Rapier%0D%0ASwift+Obsidian+Greataxe%0D%0ASword+of+Life+Stealing%0D%0ASword+of+Subtlety%0D%0ASword+of+Tempests%0D%0ASword+of+the+Planes%0D%0ASword+of+Vengeance%0D%0ASylvan+Scimitar%0D%0ATalons+of+Leng%0D%0ATamer%27s+Whip%0D%0ATangle+Bolt%0D%0ATen-ring+sword%0D%0ATenacious+Atlatl+Dart%0D%0AThorn+Bow%0D%0ATidewater+Cutlass%0D%0ATracer+Bullet%0D%0ATrailblazer%27s+Spade%0D%0ATraitor%27s+Blade%0D%0ATraitorous+Blaster%0D%0ATrident+of+Fish+Command%0D%0ATrident+of+Stability%0D%0ATrident+of+the+Storm+Captain%0D%0ATrident+of+Warning%0D%0ATriple-Stinging+Blade%0D%0ATriton%27s+Trident%0D%0AUndercutting+Axe%0D%0AValor%27s+Minion%0D%0AVenomous+Whisper+Dart%0D%0AVindictive+Harpoon%0D%0AVoid+Scythe%0D%0AVulnerability+Bolt%0D%0AWanderer%27s+Scarf%0D%0AWar+Lance%0D%0AWarbringer%0D%0AWasp%27s+Kiss%0D%0AWhispering+Shrike%0D%0AWizard+Hook">
                            All Piazo
                        </a></td>
                    </tr>
                </table>
                <table class="table table-striped table-bordered block">
                    <tr><th>Artifacts</th></tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Anathema+Archive%0D%0AAxe+of+the+Dwarvish+Lords%0D%0ABlackaxe%0D%0ABook+of+the+Damned+%28Original%29%0D%0ABook+of+the+Damned%3A+Daemonic%0D%0ABook+of+the+Damned%3A+Demonic%0D%0ABottle+of+the+Bound%0D%0ABrazen+Egg%0D%0ACelestial+Lens%0D%0AChronicle+of+the+Righteous%0D%0ACloud+Castle+of+the+Storm+King%0D%0ACodex+of+the+Infinite+Planes%0D%0ADancing+Hut+of+Baba+Yaga%0D%0ADemon+Prince+Armor%0D%0AFlame+of+Guidance%0D%0AFork+of+the+Forgotten+One%0D%0AGem+of+Dreams%0D%0AJar+of+Dragon%27s+Teeth%0D%0AMoaning+Diamond%0D%0ARandom+Orb+of+Dragonkind%0D%0AOrb+of+Dragon+Mastery%0D%0AOrb+of+Dragonkin%0D%0AOrb+of+Dragonshape%0D%0APerfection%27s+Key%0D%0ARing+of+Nine+Facets%0D%0ARunewell+of+Greed%0D%0ASaint+Cuthbert%27s+Mace%0D%0AScepter+of+Ages%0D%0AShadowstaff%0D%0AShield+of+the+Sun%0D%0AShield+of+the+Winged+Eye%0D%0ASkull+of+the+Viper+God%0D%0ASkullsoul%0D%0ASong+of+Extinction+%28Music+Box%29%0D%0ASword+of+Greed%0D%0AThe+Briar+Blade%0D%0AThe+Jewel+of+Everlasting+Gold%0D%0AThorncrown+of+Blasting">
                            Major
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Argental+Font%0D%0ABeacon+of+True+Faith%0D%0ABell+of+Mercy%0D%0ABone+House%0D%0ABook+of+Infinite+Spells%0D%0ABranch+of+Life%0D%0ACrown+of+the+Iron+King%0D%0ACrown+of+the+Simurgh%0D%0ADeck+of+Harrowed+Tales%0D%0ADeck+of+Many+Things%0D%0ADeck+of+Many+Things%2C+Harrow%0D%0ADragon+Seal%0D%0ADragon+Slayer%0D%0AEnemy+of+All+Enemies%0D%0AHammer+of+Thunderbolts%0D%0AHourglass+of+Shadows%0D%0AId+Portrait%0D%0AKnucklebone+of+Fickle+Fortune%0D%0AMaleficus+Spike%0D%0AMantis+Blade%0D%0AMonkey%27s+Paw%0D%0APerfect+Golden+Lute%0D%0APhilosopher%27s+Stone%0D%0APhylactery+of+the+Failed%0D%0ARaven’s+Head%0D%0ARevelation+Quill%0D%0ARunescarred+Dragonship%0D%0ARuneslave+Cauldron%0D%0ARunewell+Amulet%0D%0ARunewell%2C+Minor%0D%0ASphere+of+Annihilation%0D%0ASpindle+of+Perfect+Knowledge%0D%0AStaff+of+the+Magi%0D%0ATalisman+of+Pure+Good%0D%0ATalisman+of+Reluctant+Wishes%0D%0ATalisman+of+the+Sphere%0D%0ATalisman+of+Ultimate+Evil%0D%0AUnending+Tome%0D%0AVernal+Key%0D%0AVisionary+Lens%0D%0AWarding+Box%0D%0AWeird+Queen%27s+Magpie">
                            Minor
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Black%0D%0ABlue%0D%0ABrass%0D%0ABronze%0D%0ACopper%0D%0AGold%0D%0AGreen%0D%0ARed%0D%0ASilver%0D%0AWhite%0D%0AForest%0D%0ASea%0D%0ASky%0D%0ASovereign%0D%0AUnderworld%0D%0ABrine%0D%0ACloud%0D%0ACrystal%0D%0AMagma%0D%0AUmbral">
                            Orbs of Dragonkind
                        </a></td>
                    </tr>
                </table>
            </div>
            <div class="blockHolder">
                <h2 id="Miscellaneous">Miscellaneous</h2>
                <table class="table table-striped table-bordered block">
                    <tr><th>Other</th></tr>
                    <tr>
                        <td><a href="/tools/tableroller/tableroller.php?t=Eya-Doh%09The+character+gains+1+permanent+negative+level.%0D%0ABvu%09The+character+is+subject+to+a+powerful+compulsion+never+to+roll+the+knucklebone+of+fickle+fortune+again.+He+can+shake+thiscompulsion+only+by+succeeding+a+DC+25+Will+saving+throw.+He+can+attempt+this+saving+throw+only+once+per+day.%0D%0AEij%09The+character+is+affected+by+a+harm+spell+%28caster+level+15th%29.%0D%0AHor%09The+character+is+subject+to+a+powerful+compulsion+to+roll+the+knucklebone+three+more+times+immediately+%28Will+DC+25+negates%29.+All+three+of+these+rolls+are+made+with+a+%E2%80%945+penalty+on+the+knucklebone%27s+die+roll+%28minimum+1%29.%0D%0AVeh%09The+character+is+blinded+as+with+blindness%2Fdeafness+%28no+saving+throw%29.%0D%0AChu%09The+character+takes+5d10+points+of+cold+damage+%28DC+25+Fort+save+for+half%29+and+moves+at+half+speed+for+the+next+hour+%28a+successful+saving+throw+does+not+negate+the+reduced+speed%29.%0D%0ARoh%09For+the+next+24+hours%2C+the+character+suffers+a+%E2%80%942+penalty+on+all+skill+and+ability+checks.%0D%0ASeh%09The+character+is+paralyzed+for+2d12+hours%2C+as+with+hold+monster%2C+except+he+cannot+attempt+new+saving+throws+to+overcome+the+effect.%0D%0AKog%09For+the+next+week%2C+the+character+emits+a+horrible+smell.+He+suffers+a+%E2%80%944+penalty+on+Diplomacy+and+Stealth+checks.%0D%0AVis%09Once%2C+during+the+next+24+hours%2C+the+character+can+reroll+a+single+die+roll+he+has+just+made+and+take+the+second+result%2C+as+if+using+the+good+fortune+ability+from+the+Luck+domain.%0D%0AFyeh%09The+character+gains+100+points+of+fire+immunity%2C+as+if+using+protection+from+energy.%0D%0AXal%09The+character+gains+the+benefits+of+a+heroism+spell+for+the+next+200+minutes.%0D%0AYaq%09For+the+next+24+hours%2C+when+the+character+hits+a+target+he+is+flanking+with+a+melee+weapon%2C+the+attack+does+%2B1d6+points+of+precision+damage.%0D%0AGib%09Once+in+the+next+24+hours%2C+the+character+can+cast+faerie+fire+%28caster+level+equal+to+his+character+level%29.+This+ability+is+lost+if+the+character+rolls+this+result+again+with+the+knucklebone+of+fickle+fortune+before+the+24+hours+is+concluded.%0D%0AXku%09The+character+is+immune+to+fear+for+the+next+24+hours.%0D%0ALev%09Once+in+the+next+24+hours%2C+the+character+can+cast+a+lightning+bolt+%28caster+level+equal+to+his+character+level%29.+This+ability+is+lost+if+the+character+rolls+this+result+again+with+the+knucklebone+of+fickle+fortune+before+the+24+hours+is+concluded.%0D%0ANhi%09For+the+next+7+days%2C+when+the+character+is+the+target+of+healing+magic%2C+he+heals+an+additional+2d8+hit+points.+This+effect+is+lost+if+the+character+rolls+the+knucklebone+of+fickle+fortune+again+before+the+7+days+are+concluded.%0D%0AZmi%09For+the+next+24+hours%2C+whenever+the+character+succeeds+on+a+saving+throw+against+a+harmful+effect+that+does+half+damage+or+partial+effect+on+a+failed+save%2C+the+knucklebone%27s+character+takes+no+damage+or+suffers+no+effect.%0D%0ATem%09For+the+next+24+hours%2C+the+character+automatically+confirms+all+critical+hits.%0D%0AEha-Zah%09The+next+time+the+character+dies%2C+he+comes+back+from+the+dead+the+very+next+morning+as+if+the+subject+of+a+resurrection+spell.+This+effect+is+negated+if+the+character+rolls+the+knucklebone+of+fickle+fortune+again+before+he+dies.">
                            Knucklebone of Fickle Fortune
                        </a></td>
                    </tr>
                </table>
            </div>
        </div>
    </body>
</html>
