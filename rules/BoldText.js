import React from 'react';
import { Text } from 'react-native';

const BoldText = ({children}) => <Text style={{fontWeight: 'bold'}}>{children}</Text>;
export default BoldText;