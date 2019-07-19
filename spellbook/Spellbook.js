import React from 'react';
import { FlatList, Text, View } from 'react-native';
import spells from './spells.json';
import SpellRow from './SpellRow.js';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../redux/characterActions';
import * as Haptics from 'expo-haptics';

const Spellbook = ({ showFavorites }) => {
    const dispatch = useDispatch();
    const { characters, selectedCharacterId } = useSelector(store => store.characterReducer);
    const activeCharacter = characters.find(x => x.id === selectedCharacterId);

    var body = null;

    if (showFavorites) {
        if (!selectedCharacterId
            || !activeCharacter) {
            body = <Text>Select a character first.</Text>;
        } else if (!activeCharacter.favorites
            || activeCharacter.favorites.length === 0) {
            body = <Text>The character has no favorite spells.</Text>;
        } else {

            let favorites = spells
                .filter(x => activeCharacter.favorites.indexOf(x.name) > -1)
                .sort((a, b) => a.name < b.name ? -1 : 1);

            body = <FlatList
                data={favorites}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) =>
                    <SpellRow
                        onLongPress={() => {
                            dispatch(deleteFavorite(selectedCharacterId, item.name));
                            Haptics.selectionAsync();
                        }}
                        {...item}
                    />
                } />;
        }
    } else {
        body = <FlatList
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
            } />;
    }

    return (
        <View style={{
            padding: 10,
        }}>
            {body}
        </View>
    );
}

export default Spellbook;