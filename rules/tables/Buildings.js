import React from 'react';
import RulesTable from '../RulesTable';
import CostCell from '../CostCell';

const Buildings = () =>
    <RulesTable
        headers={['Buildings']}
        rows={[
            [<CostCell number="120" text="Hovel" />, <CostCell number="48000" text="Stone tower" />],
            [<CostCell number="1200" text="Row house" />, <CostCell number="75000" text="Temple" />],
            [<CostCell number="2400" text="Craftsman’s house" />, <CostCell number="100000" text="Stronghold" />],
            [<CostCell number="7200" text="Merchant’s house" />, <CostCell number="500000" text="Cathedral" />],
            [<CostCell number="21600" text="House with courtyard" />, <CostCell number="2500000" text="Imperial palace" />],
            [<CostCell number="32600" text="Guildhall" />, <CostCell number="" text="" />]
        ]}
    />

export default Buildings;