import React, { Fragment } from 'react';
import { Button, TouchableHighlight, Text } from 'react-native';

const SpellRow = ({ Name, Description, onPress }) =>
    <TouchableHighlight style={{
            flex: 1,
            flexDirection: 'row',
            height: 60,
            alignItems: 'center',
            padding: 2,
            marginTop: 2,
            marginBottom: 2,
        }}
        onPress={onPress}>
        <Fragment>
            <Text>{Name}</Text>
        </Fragment>
    </TouchableHighlight>;

export default SpellRow;