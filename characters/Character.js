import React, { Fragment } from 'react';
import { Button, TouchableOpacity, Text } from 'react-native';

const Character = ({ id, name, isActive, onSelect, onDelete, onEdit }) =>
    <TouchableOpacity style={{
        flex: 1,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        height: 60,
        alignItems: 'center',
        padding: 2,
        marginTop: 2,
        marginBottom: 2,
        backgroundColor: isActive ? '#c1c100' : '#06f',
    }}
        onPress={onSelect}>
        <Fragment>
            <Text style={{ color: isActive ? '#000' : '#fff', fontSize: 16, flex: 1, }}>{name}</Text>
            <Button title="Edit" onPress={onEdit} style={{marginRight: 5,}} />
            <Button title="Delete" onPress={onDelete} />
        </Fragment>
    </TouchableOpacity>;

export default Character;