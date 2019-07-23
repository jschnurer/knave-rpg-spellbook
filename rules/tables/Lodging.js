import React from 'react';
import RulesTable from '../RulesTable';
import CostCell from '../CostCell';

const Lodging = () =>
    <RulesTable
        headers={['Lodging']}
        rows={[
            [<CostCell number="1" text="Bed, per night" />, <CostCell number="2" text="Hot bath" />],
            [<CostCell number="2" text="Private room, per night" />, <CostCell number="2" text="Stabling and fodder" />],
            [<CostCell number="2" text="Meal" />, <CostCell number="" text="" />],
        ]}
    />

export default Lodging;