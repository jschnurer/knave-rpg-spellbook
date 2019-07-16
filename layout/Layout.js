import React from 'react';
import { Button, Text, TouchableHighlight, View } from 'react-native';
import { Constants } from 'expo';

const Layout = ({children, screen, onMenuChange}) => 
    <View style={{display: 'flex', flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight,}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
            <MenuButton
                onPress={() => onMenuChange('characters')}
                active={screen === 'characters'}
                title="Characters" />
            <MenuButton
                onPress={() => onMenuChange('favorites')}
                active={screen === 'favorites'}
                title="Favorites" />
            <MenuButton
                onPress={() => onMenuChange('list')}
                active={screen === 'list'}
                title="Spell List" />
        </View>
        {children}
    </View>;

const MenuButton = ({title, active, onPress}) =>
    <TouchableHighlight
        onPress={onPress}
        style={{
            flex: 1,
            margin: 5,
            backgroundColor: active ? '#c1c100' : '#06f',
            padding: 2,
        }}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 16 }}>{title}</Text>
    </TouchableHighlight>

export default Layout;