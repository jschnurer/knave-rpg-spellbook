import React from 'react';
import RulesTable from '../RulesTable';
import NumberCell from '../NumberCell';

const ExampleMonsters = () =>
    <RulesTable
        headers={['Example Monsters']}
        rows={[
            ['Monster', 'HD', 'HP', 'Armor Def', 'Atk Bonus', 'Dmg', 'Morale', 'Saves'],
            ['Goblin', '1d8', '4', '13', '1', '1d6', '7', '+1/11'],
            ['Bear', '5d8', '20', '13', '5', '1d4/1d4/1d6', '8', '+5/15'],
            ['Zombie', '2d8', '8', '11', '2', '1d6', '12', '+2/12'],
            ['Basilisk', '6d8', '24', '15', '6', '1d10/1d10', '9', '+6/16'],
            ['Dwarf', '1d8', '4', '15', '1', '1d6', '8', '+1/11'],
            ['Troll', '9d8', '36', '15', '9', '1d6/1d6/1d10', '10', '+9/19'],
            ['Rat', '1d4', '1', '10', '0', '1d6', '5', '+0/10'],
            ['Orc', '1d8', '4', '13', '1', '1d6', '8', '+1/11'],
            ['Dragon', '10d8', '40', '20', '+10', '1d8/1d8/4d8', '10', '+10/20']
        ]}
    />

export default ExampleMonsters;