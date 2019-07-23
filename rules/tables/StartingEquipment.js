import React, { Fragment } from 'react';
import RulesTable from '../RulesTable';
import NumberCell from '../NumberCell';

const StartingEquipment = () =>
    <Fragment>
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
    </Fragment>

export default StartingEquipment;