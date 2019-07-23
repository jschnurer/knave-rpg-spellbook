import React from 'react';
import RulesTable from '../RulesTable';
import CostCell from '../CostCell';

const Transport = () =>
    <RulesTable
        headers={['Transport']}
        rows={[
            [<CostCell number="320" text="Carriage" />, <CostCell number="120" text="Wagon" />],
            [<CostCell number="50" text="Cart" />, <CostCell number="" text="" />],
        ]}
    />

export default Transport;