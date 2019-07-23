import React from 'react';
import RulesTable from '../RulesTable';
import NumberCell from '../NumberCell';

const Distance = () =>
    <RulesTable
        headers={['Feet', 'Meter', 'Square on map']}
        rows={[
            [5, 1.5, 1],
            [10, 3, 2],
            [25, 7.5, 5],
            [50, 15, 10],
        ]}
    />

export default Distance;