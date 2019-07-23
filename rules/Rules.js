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
                <Text>More rules coming...</Text>
            </ScrollView>
        </View>
    )
}