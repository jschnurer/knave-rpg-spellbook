import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import RulesHeader from './RulesHeader';
import RulesHeader2 from './RulesHeader2';
import RulesTable from './RulesTable';
import BoldText from './BoldText';
import NumberCell from './NumberCell';
import CostCell from './CostCell';
import Buildings from './tables/Buildings';
import Henchmen from './tables/Henchmen';
import ToolsAndGear from './tables/ToolsAndGear';
import Light from './tables/Light';
import Food from './tables/Food';
import Clothing from './tables/Clothing';
import Animals from './tables/Animals';
import Lodging from './tables/Lodging';
import Ships from './tables/Ships';
import Transport from './tables/Transport';
import Alignment from './tables/Alignment';
import Traits from './tables/Traits';
import StartingEquipment from './tables/StartingEquipment';
import Distance from './tables/Distance';
import Weapons from './tables/Weapons';
import Armor from './tables/Armor';
import Reactions from './tables/Reactions';
import ItalicText from './ItalicText';
import ExampleMonsters from './tables/ExampleMonsters';

export default function Rules() {
    return (
        <View style={{ flex: 1, flexDirection: 'column', padding: 5 }}>
            <ScrollView style={{ flex: 1 }}>
                <RulesHeader>Knave</RulesHeader>
                <Text>
                    <BoldText>A rules toolkit created by Ben Milton for running old school fantasy RPGs without classes. - questingblog.com. </BoldText>
                    Original game licensed under Creative Commons Attribution 4.0 International License and has been modified by the creator of this document for formatting purposes.
                </Text>
                <Text>
                    <BoldText>Requirements: </BoldText>At least one set of dice (d4, d6, d8, d10, d12 and d20), two or more players (one Game Master and one or more players), pen and paper.
                </Text>
                <Distance />
                <RulesHeader2>Character Creation</RulesHeader2>
                <Text>
                    <BoldText>Abilities: </BoldText>
                    Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma. Each ability has a defense and a bonus value.
                </Text>
                <Text>
                    Roll 3d6 for each ability (in order). Lowest dice of each roll is your Ability’s Bonus. Ability’s defense is abbility’s bonus + 10.
                </Text>
                <Text>
                    Optionally: After rolling all abilities, swap the values of two abilities.
                </Text>
                <Text>
                    <BoldText>Starting Equipment: </BoldText>
                    2 days of rations, one weapon of choice, starting armor {'&'} equipment (Roll on the Starting Gear tables to determine starting armor and equipment).
                </Text>
                <StartingEquipment />
                <Text>
                    <BoldText>Item slots: </BoldText>
                    PCs have a number of item slots equal to their Constitution
                    defense. Items they carry must fit into available slots. (See Item Slots
                    section for more.)
                </Text>
                <Text>
                    Write down all your items in your item slots on your character sheet.
                </Text>
                <Text>
                    <BoldText>Armor: </BoldText>
                    Armor items have a defense and a bonus value. The defense
                    value is listed in the rules. Add up all values to find total Armor
                    Defense. Armor Bonus is Armor Defense – 10. If the PC is not
                    wearing any armor, their Armor Defense is 11 and their Bonus is +1.
                </Text>
                <Text>
                    <BoldText>HP: </BoldText>
                    Roll 1d8 to determine starting and maximum Hit Points.
                </Text>
                <Text>
                    <BoldText>Speed: </BoldText>
                    Exploration speed :120ft/turn. Combat speed: 40ft/turn.
                </Text>
                <Text>
                    <BoldText>Traits: </BoldText>
                    Roll or choose other traits:
                </Text>
                <Traits />
                <Alignment />
                <RulesHeader2>Abilities</RulesHeader2>
                <Text>
                    <BoldText>Strength: </BoldText>
                    Used for melee attacks and saves requiring physical
                    power, like lifting gates, bending bars, etc.
                </Text>
                <Text>
                    <BoldText>Dexterity: </BoldText>
                    Used for saves requiring poise, speed, and reflexes, like
                    dodging, climbing, sneaking, balancing, etc.
                </Text>
                <Text>
                    <BoldText>Constitution: </BoldText>
                    Used for saves to resist poison, sick-ness, cold, etc. The
                    Constitution bonus is added to healing rolls. A PC’s number of item
                    slots is always equal to their Constitution defense.
                </Text>
                <Text>
                    <BoldText>Intelligence: </BoldText>
                    Used for saves requiring concentration and precision,
                    such as wielding magic, resisting magical effects, recalling lore,
                    crafting objects, tinkering with machinery, picking pockets, etc.
                </Text>
                <Text>
                    <BoldText>Wisdom: </BoldText>
                    Used for ranged attacks and saves requiring perception
                    and intuition, such as tracking, navigating, searching for secret doors,
                    detecting illusions, etc.
                </Text>
                <Text>
                    <BoldText>Charisma: </BoldText>
                    Used for saves to persuade, deceive, interrogate,
                    intimidate, charm, provoke, etc. PCs may employ a number of
                    henchmen equal to their Charisma bonus.
                </Text>
                <RulesHeader2>Item Costs</RulesHeader2>
                <Text>
                    All prices are in copper pennies. Payment for things like ships, real
                    estate, and so on usually takes the form of trade goods, favors, or
                    oaths of fealty rather than coins.
                </Text>
                <ToolsAndGear />
                <Light />
                <Clothing />
                <Food />
                <Animals />
                <Lodging />
                <Ships />
                <Transport />
                <Henchmen />
                <Buildings />
                <Weapons />
                <Armor />

                <RulesHeader2>Item Slots</RulesHeader2>
                <Text>PCs have a number of item slots equal to their Constitution Defense.</Text>
                <Text>
                    <BoldText>Most items</BoldText>, including spell books, potions, a day’s rations, light
                    weapons, tools and so on <BoldText>take up 1 slot</BoldText>. Particularly heavy or bulky
                    items like armor or medium to heavy weapons may take up more
                    slots. Groups of small, identical items may be bundled into the same
                    slot. 100 coins can fit into 1slot. 1 slot can hold around 5 pounds.
                </Text>

                <RulesHeader2>Advancement</RulesHeader2>
                <Text>
                    <BoldText>Getting XP: </BoldText>
                    Whenever a PC accumulates 1000 XP, they gain a
                    level. As a guideline, PCs receive 50 XP for low-risk
                    accomplishments, 100 XP for moderate-risk accomplishments, and
                    200 XP for high-risk accomplishments. The referee should freely
                    notify the PCs of how much XP different objectives are worth when
                    asked.
                </Text>
                <Text>
                    <BoldText>Gain a level: </BoldText>
                    When gaining a level roll a number of d8s equal to
                    their new level to find their new HP maximum. If the result is less than
                    their previous maximum, their maximum HP increases by 1. They also
                    raise the defense and bonus scores of 3 different abilities of their
                    choice by 1 point. Abilities may never be raised higher than
                    20/+10.
                </Text>

                <RulesHeader2>Reactions</RulesHeader2>
                <Text>
                    When the PCs encounter an NPC whose reaction to the party is not
                    obvious, the referee may roll 2d6 and consult the following table.
                </Text>
                <Reactions />

                <RulesHeader2>Saving Throws</RulesHeader2>
                <Text>
                    If a character attempts something where the outcome is uncertain and
                    failure has consequences, they make a saving throw, or “save”.
                </Text>
                <Text>
                    <BoldText>To make a save: </BoldText>add the bonus of the relevant ability to a d20 roll.
                    If the total is <BoldText>greater than 15</BoldText>, the character succeeds. If not, they
                    fail.
                </Text>
                <Text>
                    <BoldText>To make an opposed save: </BoldText>If the save is opposed by another
                    character, then in-stead of aiming to exceed 15, the side doing the
                    rolling must get a total greater than the opposing character’s
                    relevant defense score in order to succeed. If they fail, the opposing
                    side succeeds. Note that it doesn’t matter which side does the rolling,
                    since the odds of success remain the same.
                </Text>
                <Text>
                    <BoldText>Advantage and disadvantage: </BoldText>If there are situational factors that
                    make a save significantly easier or harder, the referee may grant
                    the roll <ItalicText>advantage</ItalicText> or <ItalicText>disadvantage</ItalicText>. If a roll has advantage, roll
                    2d20 and use the better of the two dice. If it has disadvantage, roll
                    2d20 and use the worse of the two dice.
                </Text>

                <RulesHeader2>Combat</RulesHeader2>
                <Text><BoldText>Initiative: </BoldText>At the start of each combat round, determine initiative by rolling a d6. On a 1-3, all of the enemies will act first. On a 4-6 all of the PCs will act first. Reroll initiative each round.</Text>
                <Text><BoldText>Actions: </BoldText>On their turn, a character may move their speed (usually 40 ft) and take up to one combat action. This action may be casting a spell, making a second move, making an attack, attempting a stunt, or any other action deemed reasonable by the referee.</Text>
                <Text><BoldText>Range: </BoldText>Melee weapons can strike adjacent foes, but ranged weapons cannot be used if the shooting character is engaged in melee combat.</Text>
                <Text><BoldText>Make an attack: </BoldText>Roll a d20 and add the character’s Strength or Wisdom bonus, depending on whether they are using a melee or ranged weapon, respectively. If the attack total is greater than the defender’s Armor Defense, the attack hits. If not, the attack misses. Alternatively, an attack roll can also be resolved by the defender rolling a d20 and adding their armor bonus, hoping to roll a total greater than the Ability Defense (Strength or Wisdom +10) the attacker is using. If they succeed, the attack misses. If they fail, the attack hits.</Text>
                <Text><BoldText>Damage: </BoldText>On a hit, the attacker rolls their weapon’s damage die to determine how many Hit Points (HP) the defender loses. A bonus damage die of the weapon’s type may be added to the roll if the ideal weapon was used against an enemy type (for example, using a blunt weapon vs. a skeleton).</Text>
                <Text><BoldText>Death: </BoldText>When a character reaches 0 HP, they are unconscious. When they reach -1 HP or less, they are dead. Players should roll up a new level 1 PC when their old one dies, and should rejoin the party as soon as possible.</Text>
                <Text><BoldText>Stunts: </BoldText>Combat maneuvers such as stunning, shoving, disarming, tripping, sundering armor, and so on. They are resolved with an opposed save. They may not cause damage directly, but may do so indirectly (for example, pushing an enemy off a ledge). GM has final say in what stunts can be attempted in a given situation.</Text>
                <Text><BoldText>Advantage: </BoldText>When a character is attacking a target that is unaware, on lower ground, off balance, disarmed, distracted, or tactically disadvantaged in any significant way (GM has final say) they may either A.) Apply advantage to their attack roll or stunt against that opponent or B.) Make an attack and a stunt attempt in the same round against that opponent, without advantage.</Text>
                <Text><BoldText>Critical Hits {'&'} Quality: </BoldText>If the attacker rolls a natural 20 on their attack roll, or the defender rolls a natural 1, the defender’s armor loses 1 point of quality and they take an additional die of damage (of the weapon’s type). If the attacker rolls a natural 1 or the defender rolls a natural 20, the attacker’s weapon loses 1 point of quality. At 0 quality, the item is destroyed. Each point of quality costs 10% of the item’s cost to repair.</Text>
                <Text><BoldText>Morale: </BoldText>Monsters and NPCs all have a morale rating. When they face more danger than they were expecting, the referee will make a morale roll by rolling 2d6 and comparing the result to the NPC’s morale rating. If the roll is higher than the rating, the NPC will attempt to flee, retreat, or parley.</Text>
                <Text>Morale rolls can be triggered by defeating half of an enemy group, defeating a group’s leader, or reducing a lone enemy to half HP. Other effects may trigger a morale roll at the referee’s discretion. Hirelings also make morale rolls when they aren’t paid, their employer dies, or they face extraordinary danger. Morale may also be improved by paying hirelings more and treating them well.</Text>
                <Text><BoldText>Healing: </BoldText>After a meal and a full night’s rest, PCs regain lost hit points equal to a d8 plus their Constitution bonus. Resting at a safe haven restores all lost HP.</Text>

                <RulesHeader2>Converting OSR Monsters</RulesHeader2>
                <Text>All monsters from OSR bestiaries should work as-is in Knave with no major conversion needed. Here are some guidelines.</Text>
                <Text><BoldText>Hit Dice/Hit Points: </BoldText>All monster hit dice can be assumed to be d8s unless otherwise specified. To get the monster’s hit points, just multiply the number of hit dice they have by 4 (or 5 if you’re feeling mean.)</Text>
                <Text><BoldText>Armor Defense: </BoldText>Monster AC (if ascending) is identical to Armor Defense. If the AC is descending, subtract it from 19 (if it is from OD{'&'}D or B/X D{'&'}D) or from 20 (if it is from AD{'&'}D) to find its ascending equivalent.</Text>
                <Text><BoldText>Attack Bonus: </BoldText>Any attack bonus given is unchanged, and can be added to both melee and ranged attacks. If an attack bonus is not given, assume that it is the same as the monster’s number of hit dice.</Text>
                <Text><BoldText>Damage: </BoldText>Damage remains the same.</Text>
                <Text><BoldText>Morale: </BoldText>Morale rating remains the same.</Text>
                <Text><BoldText>Saves: </BoldText>Since OSR monsters usually don’t come with ability scores, assume that monsters have Ability Bonuses (for all abilities) equal to their level, with the corresponding Ability Defenses. Example: A typical 4 HD monster would have a bonus of +4 and a defense of 14 in all of its abilities by default, unless modified by the referee.</Text>
                <ExampleMonsters />

                <RulesHeader2>Magic</RulesHeader2>
                <Text>The spell lists from any old-school RPG will work perfectly well in Knave, provided that they go up to 9th level. There are many free lists of classic spells available online.</Text>
                <Text><BoldText>Casting spells: </BoldText>PCs may only cast spells of their level or less, so a level 3 PC could only cast spells of level 0 to 3. Spells are cast out of spell books, which must be held in both hands and read aloud. Each spell book can only be used once per day. Importantly, each spell book only holds a single spell, and each spell book takes up an item slot, so if a PC wants to be able to cast a wide variety of spells, they’ll have to fill most of their inventory with spell books.</Text>
                <Text><BoldText>Gaining spells: </BoldText>PCs are unable to create, copy or transcribe spell books. PCs can only get spells by recovering them from dungeons or looting them from other magicians. The higher the level of the spell book, the rarer and more valuable it is. PCs openly carrying high level spell books are likely to be hounded by bandits and wizards looking to “acquire” them.</Text>
                <Text><BoldText>Saves: </BoldText>When a spell allows for a save, make an opposed Intelligence save against the defender’s relevant ability, usually Dexterity for ranged attack spells, Constitution for life-draining spells, Intelligence for mind-altering spells, or Wisdom for Illusions.</Text>

            </ScrollView>
        </View>
    )
}