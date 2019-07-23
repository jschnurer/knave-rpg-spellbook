import React from 'react';
import RulesTable from '../RulesTable';
import CostCell from '../CostCell';

const Light = () =>
    <RulesTable
        headers={['Light']}
        rows={[
            [<CostCell number="1" text="Candle, 4 hours" />, <CostCell number="30" text="Lantern" />],
            [<CostCell number="5" text="Lamp oil, 4 hours" />, <CostCell number="10" text="Tinderbox" />],
            [<CostCell number="1" text="Torch, 1 hour" />, <CostCell number="" text="" />],
        ]}
    />

export default Light;