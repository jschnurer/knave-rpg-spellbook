import React from 'react';
import RulesTable from '../RulesTable';
import CostCell from '../CostCell';

const Animals = () =>
    <RulesTable
        headers={['Animals']}
        rows={[
            [<CostCell number="1" text="Chicken" />, <CostCell number="1000" text="Hawk" />],
            [<CostCell number="100" text="Cow" />, <CostCell number="1000" text="Horse, riding" />],
            [<CostCell number="50" text="Dog, hunting" />, <CostCell number="10000" text="Horse, war" />],
            [<CostCell number="20" text="Dog, small but vicious" />, <CostCell number="300" text="Ox" />],
            [<CostCell number="300" text="Donkey/pack horse" />, <CostCell number="30" text="Pig" />],
            [<CostCell number="10" text="Goat" />, <CostCell number="15" text="Sheep" />],
        ]}
    />

export default Animals;