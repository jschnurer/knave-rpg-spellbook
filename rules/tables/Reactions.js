import React from 'react';
import RulesTable from '../RulesTable';
import NumberCell from '../NumberCell';

const Reactions = () =>
    <RulesTable
        headers={['Feet', 'Meter', 'Square on map']}
        rows={[
            [
                <NumberCell number="2" text="Hostile" />,
                <NumberCell number="6-8" text="Unsure" />,
                <NumberCell number="12" text="Helpful" />,
            ], [
                <NumberCell number="3-5" text="Unfriendly" />,
                <NumberCell number="9-11" text="Talkative" />,
                <NumberCell number="" text="" />,
            ]
        ]}
    />

export default Reactions;