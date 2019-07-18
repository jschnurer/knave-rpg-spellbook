import React, { Fragment, useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

export default function SpellRow({ name, description, onLongPress }) {
    const [opened, setOpened] = useState(false);

    return (
        <TouchableOpacity style={{
            padding: 2,
            paddingTop: 20,
            paddingBottom: 20,
            borderBottomColor: 'silver',
            borderBottomWidth: 1,
            borderStyle: 'solid',
            justifyContent: 'center',
        }}
            onLongPress={onLongPress}
            onPress={() => setOpened(!opened)}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ color: 'black' }}>{name}</Text>
                {opened &&
                    <Text style={{ color: '#666', marginTop: 5, }}>{description}</Text>
                }
            </View>
        </TouchableOpacity>
    );
}