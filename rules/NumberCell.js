import React from 'react';
import { Text, View } from 'react-native';
import BoldText from './BoldText';

const NumberCell = ({ number, text, lineBreak }) =>
    <View style={{
        flexDirection: lineBreak ? 'column' : 'row',
    }}>
        <BoldText>{number} </BoldText>
        <Text>{text}</Text>
    </View>

export default NumberCell;