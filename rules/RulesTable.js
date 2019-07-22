import React from 'react';
import { Text, View } from 'react-native';

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
        <RulesRow isHeader values={headers} />
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
                <Text style={isHeader ? {fontWeight: 'bold'} : undefined}>{x}</Text>
            </View>
        )}
    </View>;