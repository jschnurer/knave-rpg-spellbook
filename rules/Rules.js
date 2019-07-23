import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import RulesHeader from './RulesHeader';
import RulesHeader2 from './RulesHeader2';
import RulesTable from './RulesTable';
import BoldText from './BoldText';
import NumberCell from './NumberCell';

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
                <RulesTable
                    headers={['Feet', 'Meter', 'Square on map']}
                    rows={[
                        [5, 1.5, 1],
                        [10, 3, 2],
                        [25, 7.5, 5],
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
                        [
                            <NumberCell number={'1-3'} text='No armor' lineBreak />,
                            <NumberCell number={'4-14'} text='Gambeson' lineBreak />,
                            <NumberCell number={'15-19'} text='Brigandine' lineBreak />,
                            <NumberCell number={'20'} text='Chain' lineBreak />,
                        ]
                    ]}
                />
                <RulesTable
                    headers={['Helmets and Shields (Roll Once)']}
                    rows={[
                        [
                            <NumberCell number="1-13" text="None" />,
                            <NumberCell number="14-16" text="Helmet" />,
                        ], [
                            <NumberCell number="17-19" text="Shield" />,
                            <NumberCell number="20" text="Helmet and Shield" />,
                        ]
                    ]}
                />
                <RulesTable
                    headers={['Dungeoneering Gear (Roll Twice)']}
                    rows={[
                        [
                            <NumberCell number="1" text="Rope" />,
                            <NumberCell number="8" text="Gapp. hook" />,
                            <NumberCell number="15" text="Mirror" />,
                        ], [
                            <NumberCell number="2" text="Pulleys" />,
                            <NumberCell number="9" text="Hammer" />,
                            <NumberCell number="16" text="Pole, 10ft" />,
                        ], [
                            <NumberCell number="3" text="Candles, 5" />,
                            <NumberCell number="10" text="Waterskin" />,
                            <NumberCell number="17" text="Sack" />,
                        ], [
                            <NumberCell number="4" text="Chain, 10ft" />,
                            <NumberCell number="11" text="Lantern" />,
                            <NumberCell number="18" text="Tent" />,
                        ], [
                            <NumberCell number="5" text="Chalk, 10" />,
                            <NumberCell number="12" text="Lamp oil" />,
                            <NumberCell number="19" text="Spikes, 5" />,
                        ], [
                            <NumberCell number="6" text="Crowbar" />,
                            <NumberCell number="13" text="Padlock" />,
                            <NumberCell number="20" text="Torches, 5" />,
                        ], [
                            <NumberCell number="7" text="Tinderbox" />,
                            <NumberCell number="14" text="Manacles" />,
                        ],
                    ]}
                />
                <RulesTable
                    headers={['General Gear (Roll Once)']}
                    rows={[
                        [
                            <NumberCell number="1" text="Airbladder" />,
                            <NumberCell number="8" text="Caltrops" />,
                            <NumberCell number="15" text="Hourglass" />,
                        ], [
                            <NumberCell number="2" text="Bear trap" />,
                            <NumberCell number="9" text="Chisel" />,
                            <NumberCell number="16" text="Net" />,
                        ], [
                            <NumberCell number="3" text="Shovel" />,
                            <NumberCell number="10" text="Drill" />,
                            <NumberCell number="17" text="Tongs" />,
                        ], [
                            <NumberCell number="4" text="Bellows" />,
                            <NumberCell number="11" text="Fishing rod" />,
                            <NumberCell number="18" text="Lockpicks" />,
                        ], [
                            <NumberCell number="5" text="Grease" />,
                            <NumberCell number="12" text="Marbles" />,
                            <NumberCell number="19" text="Metal file" />,
                        ], [
                            <NumberCell number="6" text="Saw" />,
                            <NumberCell number="13" text="Glue" />,
                            <NumberCell number="20" text="Nails" />,
                        ], [
                            <NumberCell number="7" text="Bucket" />,
                            <NumberCell number="14" text="Pick" />,
                        ],
                    ]}
                />
                <RulesTable
                    headers={['General Gear 2 (Roll Once)']}
                    rows={[
                        [
                            <NumberCell number="1" text="Incense" />,
                            <NumberCell number="8" text="Spyglass" />,
                            <NumberCell number="15" text="Cook pots" />,
                        ], [
                            <NumberCell number="2" text="Sponge" />,
                            <NumberCell number="9" text="Tar pot" />,
                            <NumberCell number="16" text="Face paint" />,
                        ], [
                            <NumberCell number="3" text="Lens" />,
                            <NumberCell number="10" text="Twine" />,
                            <NumberCell number="17" text="Whistle" />,
                        ], [
                            <NumberCell number="4" text="Perfume" />,
                            <NumberCell number="11" text="Fake jewels" />,
                            <NumberCell number="18" text="Instrument" />,
                        ], [
                            <NumberCell number="5" text="Horn" />,
                            <NumberCell number="12" text="Blank book" />,
                            <NumberCell number="19" text={"Quill & ink"} />,
                        ], [
                            <NumberCell number="6" text="Bottle" />,
                            <NumberCell number="13" text="Card deck" />,
                            <NumberCell number="20" text="Small bell" />,
                        ], [
                            <NumberCell number="7" text="Soap" />,
                            <NumberCell number="14" text="Dice set" />,
                        ],
                    ]}
                />
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
                <RulesTable
                    headers={['Physique']}
                    rows={[
                        [
                            <NumberCell number="1" text="Athletic" />,
                            <NumberCell number="8" text="Ripped" />,
                            <NumberCell number="15" text="Statuesque" />,
                        ], [
                            <NumberCell number="2" text="Brawny" />,
                            <NumberCell number="9" text="Rugged" />,
                            <NumberCell number="16" text="Stout" />,
                        ], [
                            <NumberCell number="3" text="Corpulent" />,
                            <NumberCell number="10" text="Scrawny" />,
                            <NumberCell number="17" text="Tiny" />,
                        ], [
                            <NumberCell number="4" text="Delicate" />,
                            <NumberCell number="11" text="Short" />,
                            <NumberCell number="18" text="Towering" />,
                        ], [
                            <NumberCell number="5" text="Gaunt" />,
                            <NumberCell number="12" text="Sinewy" />,
                            <NumberCell number="19" text="Willowy" />,
                        ], [
                            <NumberCell number="6" text="Hulking" />,
                            <NumberCell number="13" text="Slender" />,
                            <NumberCell number="20" text="Wiry" />,
                        ], [
                            <NumberCell number="7" text="Lanky" />,
                            <NumberCell number="14" text="Flabby" />,
                        ],
                    ]}
                />
                <RulesTable
                    headers={['Face']}
                    rows={[
                        [
                            <NumberCell number="1" text="Bloated" />,
                            <NumberCell number="8" text="Pinched" />,
                            <NumberCell number="15" text="Sunken" />,
                        ], [
                            <NumberCell number="2" text="Blunt" />,
                            <NumberCell number="9" text="Hawkish" />,
                            <NumberCell number="16" text="Sharp" />,
                        ], [
                            <NumberCell number="3" text="Bony" />,
                            <NumberCell number="10" text="Broken" />,
                            <NumberCell number="17" text="Soft" />,
                        ], [
                            <NumberCell number="4" text="Chiseled" />,
                            <NumberCell number="11" text="Impish" />,
                            <NumberCell number="18" text="Square" />,
                        ], [
                            <NumberCell number="5" text="Delicate" />,
                            <NumberCell number="12" text="Narrow" />,
                            <NumberCell number="19" text="Wide" />,
                        ], [
                            <NumberCell number="6" text="Elongated" />,
                            <NumberCell number="13" text="Ratlike" />,
                            <NumberCell number="20" text="Wolfish" />,
                        ], [
                            <NumberCell number="7" text="Patrician" />,
                            <NumberCell number="14" text="Round" />,
                        ],
                    ]}
                />
                <RulesTable
                    headers={['Skin']}
                    rows={[
                        [
                            <NumberCell number="1" text="Battle Scar" />,
                            <NumberCell number="8" text="Perfect" />,
                            <NumberCell number="15" text="Sallow" />,
                        ], [
                            <NumberCell number="2" text="Birthmark" />,
                            <NumberCell number="9" text="Pierced" />,
                            <NumberCell number="16" text="Sunburned" />,
                        ], [
                            <NumberCell number="3" text="Burn Scar" />,
                            <NumberCell number="10" text="Pockmarked" />,
                            <NumberCell number="17" text="Tanned" />,
                        ], [
                            <NumberCell number="4" text="Dark" />,
                            <NumberCell number="11" text="Reeking" />,
                            <NumberCell number="18" text="War Paint" />,
                        ], [
                            <NumberCell number="5" text="Makeup" />,
                            <NumberCell number="12" text="Tattooed" />,
                            <NumberCell number="19" text="Weathered" />,
                        ], [
                            <NumberCell number="6" text="Oily" />,
                            <NumberCell number="13" text="Rosy" />,
                            <NumberCell number="20" text="Whip Scar" />,
                        ], [
                            <NumberCell number="7" text="Pale" />,
                            <NumberCell number="14" text="Rough" />,
                        ],
                    ]}
                />
                <RulesTable
                    headers={['Hair']}
                    rows={[
                        [
                            <NumberCell number="1" text="Bald" />,
                            <NumberCell number="8" text="Filthy" />,
                            <NumberCell number="15" text="Oily" />,
                        ], [
                            <NumberCell number="2" text="Braided" />,
                            <NumberCell number="9" text="Frizzy" />,
                            <NumberCell number="16" text="Ponytail" />,
                        ], [
                            <NumberCell number="3" text="Bristly" />,
                            <NumberCell number="10" text="Greased" />,
                            <NumberCell number="17" text="Silky" />,
                        ], [
                            <NumberCell number="4" text="Cropped" />,
                            <NumberCell number="11" text="Limp" />,
                            <NumberCell number="18" text="Topknot" />,
                        ], [
                            <NumberCell number="5" text="Curly" />,
                            <NumberCell number="12" text="Long" />,
                            <NumberCell number="19" text="Wavy" />,
                        ], [
                            <NumberCell number="6" text="Disheveled" />,
                            <NumberCell number="13" text="Luxurious" />,
                            <NumberCell number="20" text="Wispy" />,
                        ], [
                            <NumberCell number="7" text="Deadlocks" />,
                            <NumberCell number="14" text="Mohawk" />,
                        ],
                    ]}
                />
                <RulesTable
                    headers={['Clothing']}
                    rows={[
                        [
                            <NumberCell number="1" text="Antique" />,
                            <NumberCell number="8" text="Filthy" />,
                            <NumberCell number="15" text="Oversized" />,
                        ], [
                            <NumberCell number="2" text="Bloody" />,
                            <NumberCell number="9" text="Flamboyant" />,
                            <NumberCell number="16" text="Patched" />,
                        ], [
                            <NumberCell number="3" text="Ceremonial" />,
                            <NumberCell number="10" text="Stained" />,
                            <NumberCell number="17" text="Perfumed" />,
                        ], [
                            <NumberCell number="4" text="Decorated" />,
                            <NumberCell number="11" text="Foreign" />,
                            <NumberCell number="18" text="Rancid" />,
                        ], [
                            <NumberCell number="5" text="Eccentric" />,
                            <NumberCell number="12" text="Frayed" />,
                            <NumberCell number="19" text="Torn" />,
                        ], [
                            <NumberCell number="6" text="Elegant" />,
                            <NumberCell number="13" text="Frumpy" />,
                            <NumberCell number="20" text="Undersized" />,
                        ], [
                            <NumberCell number="7" text="Fashionable" />,
                            <NumberCell number="14" text="Livery" />,
                        ],
                    ]}
                />
                <RulesTable
                    headers={['Virtue']}
                    rows={[
                        [
                            <NumberCell number="1" text="Ambitious" />,
                            <NumberCell number="8" text="Generous" />,
                            <NumberCell number="15" text="Loyal" />,
                        ], [
                            <NumberCell number="2" text="Cautious" />,
                            <NumberCell number="9" text="Gregarious" />,
                            <NumberCell number="16" text="Merciful" />,
                        ], [
                            <NumberCell number="3" text="Courageous" />,
                            <NumberCell number="10" text="Honest" />,
                            <NumberCell number="17" text="Righteous" />,
                        ], [
                            <NumberCell number="4" text="Courteous" />,
                            <NumberCell number="11" text="Honorable" />,
                            <NumberCell number="18" text="Serene" />,
                        ], [
                            <NumberCell number="5" text="Curious" />,
                            <NumberCell number="12" text="Humble" />,
                            <NumberCell number="19" text="Stoic" />,
                        ], [
                            <NumberCell number="6" text="Disciplined" />,
                            <NumberCell number="13" text="Idealistic" />,
                            <NumberCell number="20" text="Tolerant" />,
                        ], [
                            <NumberCell number="7" text="Focused" />,
                            <NumberCell number="14" text="Just" />,
                        ],
                    ]}
                />




                <Text>More rules coming...</Text>
            </ScrollView>
        </View>
    )
}