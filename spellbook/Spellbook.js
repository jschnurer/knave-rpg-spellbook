import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import spells from './spells.json';
import SpellRow from './SpellRow.js';

const Spellbook = ({ onAddFavorite, onRemoveFavorite, showFavorites, activeCharacter }) => {
    if(showFavorites) {
        if(!activeCharacter) {
            return <Text>Select a character first.</Text>;
        }

        if(!activeCharacter.favorites
            || activeCharacter.favorites.length === 0) {
            return <Text>The character has no favorite spells.</Text>
        }

        let favorites = [];
        for(let i = 0; i < activeCharacter.favorites.length; i++) {
            let spell = spells.find(x => x.name === activeCharacter.favorites[i]);
            if(spell) {
                favorites.push(spell);
            }
        }

        favorites = favorites.sort((a,b) => a.name < b.name ? -1 : 1);

        return (
            <ScrollView>
                {favorites.map(spell => 
                    <SpellRow
                        key={spell.name}
                        onLongPress={() => onRemoveFavorite(spell)}
                        {...spell}
                />)}
            </ScrollView>
        );

        /*
        return (
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.name}
                extraData={this.props}
                renderItem={({item}) =>
                    <SpellRow
                        onLongPress={() => onRemoveFavorite(item)}
                        {...item}
                    />
                } />
        );
        */
    }

    return (
        <ScrollView>
            {spells.map(spell => 
                <SpellRow
                    key={spell.name}
                    onLongPress={() => onAddFavorite(spell)}
                    {...spell}
            />)}
        </ScrollView>
    );

    // return (
    //     <FlatList
    //         data={spells}
    //         keyExtractor={(item) => item.name}
    //         extraData={this.props}
    //         renderItem={({item}) =>
    //             <SpellRow
    //                 onLongPress={() => onAddFavorite(item)}
    //                 {...item}
    //             />
    //         } />
    // );
}

export default Spellbook;