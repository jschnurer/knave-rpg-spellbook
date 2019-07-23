import React from 'react';
import RulesTable from '../RulesTable';
import CostCell from '../CostCell';
import NumberCell from '../NumberCell';

const Henchmen = () =>
    <RulesTable
        headers={['Henchmen']}
        rows={[
            [<NumberCell number="" text="Wages/day. Not including food, supplies, shelter,…" />],
            [<CostCell number="1" text="Laborer" />, <CostCell number="8" text="Armorer/Blacksmith" />],
            [<CostCell number="2" text="Scribe" />, <CostCell number="12" text="Man-at-arms, mount." />],
            [<CostCell number="3" text="Archer" />, <CostCell number="15" text="Master Builder" />],
            [<CostCell number="4" text="Mason" />, <CostCell number="25" text="Barber-Surgeon" />],
            [<CostCell number="6" text="Man-at-arms, on foot" />, <CostCell number="25" text="Knight" />],
        ]}
    />

export default Henchmen;