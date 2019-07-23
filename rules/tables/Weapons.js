import React from 'react';
import RulesTable from '../RulesTable';

const Weapons = () =>
    <RulesTable
        headers={['Weapons']}
        firstCellFlex={2}
        rows={[
            ['Items', 'Damage', 'Slots', 'Hands', 'Quality', 'Cost'],
            ['Dagger, cudgel, sickle, staff...', 'd6', 1, 1, 3, 5],
            ['Sword, spear, mace, axe, flail...', 'd8', 2, 1, 3, 10],
            ['Halberd, war hammer, long sword, battle axe', 'd10', 3, 2, 3, 20],
            ['Sling', 'd4', 1, 1, 3, 5],
            ['Bow', 'd6', 2, 2, 3, 15],
            ['Crossbow', 'd8', 3, 2, 3, 60],
            ['Quiver, capacity 20 arrows', '', '', '', '', 10],
            ['Arrows, 20', '', '', '', '', 5]
        ]}
    />

export default Weapons;