import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AsyncStorage, Button, FlatList, Text, TouchableHighlight, View } from 'react-native';
import Prompt from 'rn-prompt';
import _cloneDeep from 'lodash/cloneDeep';
import Character from './Character';
import { selectCharacter, createCharacter, renameCharacter, deleteCharacter } from '../redux/characterActions';
import { ToastAndroid } from 'react-native';

export default function CharacterList(props) {
    const [newCharVisible, setNewCharVisible] = useState(false);
    const [charToRename, setCharToRename] = useState(null);
    const {characters, selectedCharacterId} = useSelector(store => store.characterReducer);
    const dispatch = useDispatch();

    const showNewChar = useCallback(() => {
        setNewCharVisible(true);
    }, null);

    const hideNewChar = useCallback(() => {
        setNewCharVisible(false);
    }, null);

    let charList = null;

    if (characters.length === 0) {
        charList = <Text>You have no characters.</Text>;
    } else {
        charList = <FlatList
            data={characters}
            keyExtractor={(item) => item.id.toString()}
            extraData={selectedCharacterId}
            renderItem={({ item }) =>
                <Character
                    {...item}
                    onSelect={() => dispatch(selectCharacter(item.id))}
                    onEdit={() => setCharToRename(item)}
                    onDelete={() => dispatch(deleteCharacter(item.id))}
                    isActive={selectedCharacterId === item.id} />
            } />
    }

    return (
        <View style={{
            flex: 1,
            padding: 10,
        }}>
            <Button
                title="+ New Character"
                onPress={showNewChar}
                
            />
            <View style={{
                    marginBottom: 10,
                }}>
            </View>
            {charList}
            {newCharVisible &&
                <Prompt
                    title="New Character Name"
                    visible={newCharVisible}
                    onCancel={hideNewChar}
                    onSubmit={(name) => {
                        if(!name || !name.trim()) {
                            ToastAndroid.show(`Invalid name specified!`, ToastAndroid.SHORT);
                            return;
                        }

                        if(characters.find(x => x.name === name)) {
                            ToastAndroid.show(`Another character is already named ${name}!`, ToastAndroid.SHORT);
                            return;
                        }
                        dispatch(createCharacter(name));
                        hideNewChar();
                    }}
                />
            }
            {charToRename &&
                <Prompt
                    title="New Character Name"
                    visible={charToRename !== null}
                    onCancel={() => setCharToRename(null)}
                    onSubmit={(name) => {
                        if(characters.find(x => x.id !== charToRename.id && x.name === name)) {
                            ToastAndroid.show(`Another character is already named ${name}!`, ToastAndroid.SHORT);
                            return;
                        }

                        dispatch(renameCharacter(charToRename.id, name));
                        setCharToRename(null);
                    }}
                />
            }
        </View>
    );
}
