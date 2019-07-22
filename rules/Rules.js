import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import RulesHeader from './RulesHeader';
import RulesHeader2 from './RulesHeader2';
import RulesTable from './RulesTable';
import BoldText from './BoldText';

export default function Rules() {
    return (
        <View style={{flex: 1, flexDirection: 'column', padding: 5 }}>
            <ScrollView style={{flex: 1}}>
                <RulesHeader>Knave</RulesHeader>
                <Text>
                    <BoldText>A rules toolkit created by Ben Milton for running old school fantasy RPGs without classes. - questingblog.com. </BoldText>
                    Original game licensed under Creative Commons Attribution 4.0 International License and has been modified by the creator of this document for formatting purposes.
                </Text>
                <Text>
                    <BoldText>Requirements: </BoldText>At least one set of dice (d4, d6, d8, d10, d12 and d20), two or more players (one Game Master and one or more players), pen and paper.
                </Text>
                <RulesTable
                    headers={['Feet','Meter','Square on map']}
                    rows={[
                        [5,1.5,1],
                        [10,3,2],
                        [25,7.5,5],
                        [50, 15, 10],
                    ]}
                />
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
                <RulesTable
                    headers={['Armor (Roll Once)']}
                    rows={[
                        ['1-3 No armor', '4-14 Gambeson', '15-19 Brigandine', '20 Chain',]
                    ]}
                />
                <RulesTable
                    headers={['Helmets and Shields (Roll Once)']}
                    rows={[
                        ['1-13 None', '14-16 Helmet', '17-19 Shield', '20 Helmet and Shield',]
                    ]}
                />
                <Text>More rules coming...</Text>
            </ScrollView>
        </View>
    )
}