import React from 'react';
import { Text } from 'react-native';

const ItalicText = ({children}) => <Text style={{fontStyle: 'italic'}}>{children}</Text>;
export default ItalicText;