import React from 'react';
import RulesTable from '../RulesTable';
import CostCell from '../CostCell';

const Ships = () =>
    <RulesTable
        headers={['Ships']}
        rows={[
            [<CostCell number="720/ton" text="Ship, high quality" />, <CostCell number="50" text="Raft" />],
            [<CostCell number="480/ton" text="Ship, good quality" />, <CostCell number="500" text="Fishing Boat" />],
            [<CostCell number="240/ton" text="Ship, used quality" />, <CostCell number="5000" text="Sloop" />],
            [<CostCell number="120/ton" text="Ship, poor quality" />, <CostCell number="25000" text="Caravel" />],
            [<CostCell number="125000" text="Galleon" />, <CostCell number="" text="" />],
        ]}
    />

export default Ships;