import React from 'react';
import { Text, View } from 'react-native';
import BoldText from './BoldText';

const CostCell = ({ number, text }) =>
    <View style={{
        flexDirection: 'row',
    }}>
        <Text style={{flex: 3}}>{text}</Text>
        <Text style={{flex: 1, textAlign: 'right', paddingRight: 5}}>{number}</Text>
    </View>

export default CostCell;