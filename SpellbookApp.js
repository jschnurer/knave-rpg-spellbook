import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import Spellbook from './spellbook/Spellbook';
import CharacterList from './characters/CharacterList';
import { TabView, SceneMap } from 'react-native-tab-view';
import Constants from 'expo-constants'
import Rules from './rules/Rules';

export default function SpellbookApp() {
    const [navState, setNavState] = useState({
        index: 3,
        routes: [
            { key: 'characters', title: 'Chars' },
            { key: 'favorites', title: 'Favs' },
            { key: 'list', title: 'Spells' },
            { key: 'rules', title: 'Rules' }
        ],
    });

    return (
        <TabView
            navigationState={navState}
            renderScene={SceneMap({
                characters: () => <CharacterList />,
                favorites: () => <Spellbook showFavorites />,
                list: () => <Spellbook />,
                rules: () => <Rules />
            })}
            onIndexChange={index => setNavState({...navState, index})}
            initialLayout={{
                width: Dimensions.get('window').width,
            }}
            style={{
                marginTop: Constants.statusBarHeight,
                backgroundColor: '#fff',
            }}
        />
    );
}
