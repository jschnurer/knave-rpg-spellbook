import React from 'react';
import RulesTable from '../RulesTable';
import CostCell from '../CostCell';

const ToolsAndGear = () =>
    <RulesTable
        headers={['Tools and Gear']}
        rows={[
            [<CostCell number="5" text="Air bladder" />, <CostCell number="100" text="Lens" />],
            [<CostCell number="20" text="Bear trap" />, <CostCell number="100" text="Lock picks" />],
            [<CostCell number="10" text="Bedroll" />, <CostCell number="10" text="Manacles" />],
            [<CostCell number="10" text="Bellows" />, <CostCell number="5" text="Metal file" />],
            [<CostCell number="1" text="Black grease" />, <CostCell number="200" text="Mirror (small, silver)" />],
            [<CostCell number="30" text="Block and tackle" />, <CostCell number="200" text="Musical instrument" />],
            [<CostCell number="300" text="Book (Blank)" />, <CostCell number="5" text="Nails (12)" />],
            [<CostCell number="600" text="Book (Reading)" />, <CostCell number="10" text="Net" />],
            [<CostCell number="1" text="Bottle/vial" />, <CostCell number="5" text="Oilskin bag" />],
            [<CostCell number="5" text="Bucket" />, <CostCell number="10" text="Oilskin trousers" />],
            [<CostCell number="10" text="Caltrops (bag)" />, <CostCell number="20" text="Padlock and key" />],
            [<CostCell number="5" text="Cards with an extra Ace" />, <CostCell number="50" text="Perfume" />],
            [<CostCell number="10" text="Chain (10 ft.)" />, <CostCell number="10" text="Pick" />],
            [<CostCell number="1" text="Chalk (10 pieces)" />, <CostCell number="5" text="Pole (10ft)" />],
            [<CostCell number="5" text="Chisel" />, <CostCell number="1" text="Quill and ink" />],
            [<CostCell number="10" text="Cookpots" />, <CostCell number="10" text="Rope (50ft)" />],
            [<CostCell number="10" text="Crowbar" />, <CostCell number="1" text="Sack" />],
            [<CostCell number="10" text="Drill" />, <CostCell number="10" text="Saw" />],
            [<CostCell number="10" text="Face paint/makeup" />, <CostCell number="5" text="Set of loaded dice" />],
            [<CostCell number="50" text="Fake jewels" />, <CostCell number="10" text="Shovel" />],
            [<CostCell number="10" text="Fishing rod/tackle" />, <CostCell number="20" text="Small bell" />],
            [<CostCell number="5" text="Glass marbles (bag)" />, <CostCell number="1" text="Soap" />],
            [<CostCell number="1" text="Glue (bottle)" />, <CostCell number="5" text="Spike (iron)" />],
            [<CostCell number="10" text="Grappling hook" />, <CostCell number="1" text="Spike (wood)" />],
            [<CostCell number="10" text="Hammer" />, <CostCell number="5" text="Spiked boots" />],
            [<CostCell number="25" text="Holy water" />, <CostCell number="1000" text="Spyglass" />],
            [<CostCell number="10" text="Horn" />, <CostCell number="10" text="Tar (Pot)" />],
            [<CostCell number="300" text="Hourglass" />, <CostCell number="100" text="Tent (3 man)" />],
            [<CostCell number="10" text="Incense (packet)" />, <CostCell number="50" text="Tent (personal)" />],
            [<CostCell number="10" text="Iron tongs" />, <CostCell number="5" text="Twine (300 ft.)" />],
            [<CostCell number="10" text="Ladder (10 ft.)" />, <CostCell number="5" text="Water skin" />],
            [<CostCell number="5" text="Large sponge" />, <CostCell number="5" text="Whistle" />],
        ]}
    />

export default ToolsAndGear;