import React from 'react';
import RulesTable from '../RulesTable';

const Armor = () =>
    <RulesTable
        headers={['Armor']}
        firstCellFlex={2}
        rows={[
            ['Items', 'Defense', 'Slots', 'Quality', 'Cost'],
            ['Shield', '+1', 1, 1, 40],
            ['Helmet', '+1', 1, 1, 40],
            ['Gambeson', 12, 1, 3, 60],
            ['Birgandine', 13, 2, 4, 500],
            ['Chain', 14, 3, 5, 1200],
            ['Half plate', 15, 4, 6, 4000],
            ['Full plate', 16, 5, 7, 8000]
        ]}
    />

export default Armor;