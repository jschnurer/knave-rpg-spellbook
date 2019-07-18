import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import Spellbook from './spellbook/Spellbook';
import CharacterList from './characters/CharacterList';
import { TabView, SceneMap } from 'react-native-tab-view';
import Constants from 'expo-constants'

export default function SpellbookApp() {
    const [navState, setNavState] = useState({
        index: 0,
        routes: [
            { key: 'characters', title: 'Characters' },
            { key: 'favorites', title: 'Favorites' },
            { key: 'list', title: 'Spell List' },
        ],
    });

    return (
        <TabView
            navigationState={navState}
            renderScene={SceneMap({
                characters: () => <CharacterList />,
                favorites: () => <Spellbook showFavorites />,
                list: () => <Spellbook />,
            })}
            onIndexChange={index => setNavState({...navState, index})}
            initialLayout={{
                width: Dimensions.get('window').width,
            }}
            style={{
                marginTop: Constants.statusBarHeight,
            }}
        />
    );
}
