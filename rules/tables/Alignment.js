import React from 'react';
import RulesTable from '../RulesTable';
import NumberCell from '../NumberCell';

const Alignment = () =>
    <RulesTable
        headers={['Alignment']}
        rows={[
            [
                <NumberCell number="1-5" text="Law" />,
                <NumberCell number="6-15" text="Neutrality" />,
                <NumberCell number="16-20" text="Chaos" />,
            ]
        ]}
    />

export default Alignment;