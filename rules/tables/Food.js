import React from 'react';
import RulesTable from '../RulesTable';
import CostCell from '../CostCell';

const Food = () =>
    <RulesTable
        headers={['Food']}
        rows={[
            [<CostCell number="5" text="Travel rations, 1 day" />, <CostCell number="1" text="Garlic, bunch" />],
            [<CostCell number="2" text="Animal feed, 1 day" />, <CostCell number="4" text="Grain, 1 bushel (8 gal.)" />],
            [<CostCell number="10" text="Bacon, side of" />, <CostCell number="1" text="Herbs, 1 bunch" />],
            [<CostCell number="1" text="Bread, 1 loaf" />, <CostCell number="1" text="Lard, 5 lbs." />],
            [<CostCell number="2" text="Cheese, 1 lb." />, <CostCell number="8" text="Onions, 1 bushel" />],
            [<CostCell number="1" text="Cider, 4 gallons" />, <CostCell number="3" text="Salt, 1 bushel" />],
            [<CostCell number="20" text="Cod, whole" />, <CostCell number="100" text="Spices, 1 lb." />],
            [<CostCell number="1" text="Eggs, 24" />, <CostCell number="12" text="Sugar, 1 lb." />],
            [<CostCell number="1" text="Flour, 5 lbs." />, <CostCell number="1" text="Wine/ale, bottle" />],
            [<CostCell number="1" text="Fruit, 1 lb." />, <CostCell number="" text="" />],
        ]}
    />

export default Food;