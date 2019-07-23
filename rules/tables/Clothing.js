import React from 'react';
import RulesTable from '../RulesTable';
import CostCell from '../CostCell';

const Clothing = () =>
    <RulesTable
        headers={['Clothing']}
        rows={[
            [<CostCell number="10" text="Poor" />, <CostCell number="5000" text="Furs" />],
            [<CostCell number="50" text="Standard" />, <CostCell number="100" text="Winter" />],
            [<CostCell number="3000" text="Noble" />, <CostCell number="" text="" />],
        ]}
    />

export default Clothing;