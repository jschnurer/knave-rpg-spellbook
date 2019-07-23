import React from 'react';
import { Text, View } from 'react-native';
import BoldText from './BoldText';

const RulesTable = ({ headers, rows }) =>
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderColor: '#D0CECE',
        borderStyle: 'solid',
        borderWidth: 1,
    }}>
        <RulesRow isHeader values={headers.map(x => <BoldText>{x}</BoldText>)} />
        {rows.map((x, ix) => 
            <RulesRow key={ix} values={x} />
        )}
    </View>;

export default RulesTable;

const RulesRow = ({ isHeader, values }) =>
    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
        {values.map((x, ix) =>
            <View style={{
                flex: 1,
                alignSelf: 'stretch',
                borderColor: '#D0CECE',
                borderStyle: 'solid',
                borderWidth: 1,
                backgroundColor: isHeader ? '#D0CECE' : '#F1F1F1',
            }} key={ix}>
                { (typeof(x) === 'number' || typeof(x) === 'string') &&
                    <Text>{x}</Text>
                }
                { typeof(x) !== 'number' && typeof(x) !== 'string' &&
                    x
                }
            </View>
        )}
    </View>;