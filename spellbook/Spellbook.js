import React from 'react';
import { FlatList, Text } from 'react-native';
import spells from './spells.json';
import SpellRow from './SpellRow.js';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../redux/characterActions';
import * as Haptics from 'expo-haptics';

const Spellbook = ({ showFavorites }) => {
    const dispatch = useDispatch();
    const { characters, selectedCharacterId } = useSelector(store => store.characterReducer);
    const activeCharacter = characters.find(x => x.id === selectedCharacterId);

    if (showFavorites) {
        if (!selectedCharacterId
            || !activeCharacter) {
            return <Text>Select a character first.</Text>;
        }

        if (!activeCharacter.favorites
            || activeCharacter.favorites.length === 0) {
            return <Text>The character has no favorite spells.</Text>
        }

        let favorites = spells
            .filter(x => activeCharacter.favorites.indexOf(x.name) > -1)
            .sort((a, b) => a.name < b.name ? -1 : 1);

        return (
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) =>
                    <SpellRow
                        onLongPress={() => {
                            dispatch(removeFavorite(selectedCharacterId, item.name));
                            Haptics.selectionAsync();
                        }}
                        {...item}
                    />
                } />
        );
    }

    return (
        <FlatList
            data={spells}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) =>
                <SpellRow
                    onLongPress={() => {
                        dispatch(addFavorite(selectedCharacterId, item.name));
                        Haptics.selectionAsync();
                    }}
                    {...item}
                />
            } />
    );
}

export default Spellbook;