import React from 'react';
import { AsyncStorage, Button, FlatList, Text, TouchableHighlight, View } from 'react-native';
import Prompt from 'rn-prompt';
import _cloneDeep from 'lodash/cloneDeep';
import Character from './Character';

export default class CharacterList extends React.Component {
    state = {
        characters: [],
        isLoading: false,
        newCharPromptVisible: false,
        renamingCharacter: null,
    }

    componentDidMount() {
        this.loadCharacters();
    }

    loadCharacters = async () => {
        try {
            const value = await AsyncStorage.getItem('CharacterList');
            if (value !== null) {
                let characters = JSON.parse(value);

                this.setState({
                    characters,
                    isLoading: false,
                });
            } else {
                this.setState({
                    characters: [],
                    isLoading: false,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    openNewCharPrompt = () => {
        this.setState({
            newCharPromptVisible: true,
        });
    }

    closeNewCharPrompt = () => {
        this.setState({
            newCharPromptVisible: false,
        });
    }

    createNewCharacter = (name) => {
        if(!name || !name.trim()) {
            return;
        }

        let chars = _cloneDeep(this.state.characters);
        chars.push({
            id: chars.length === 0 ? 1 : (Math.max.apply(null, chars.map(x => x.id)) || 0) + 1,
            name,
        });

        this.saveCharacters(chars);

        this.closeNewCharPrompt();

        this.setState({
            characters: chars,
        });

        if(chars.length === 1) {
            this.props.onSelectCharacter(chars[0]);
        }
    }

    saveCharacters = async (chars) => {
        try {
            await AsyncStorage.setItem("CharacterList", JSON.stringify(chars));
        } catch (error) {
            // Error saving data
            console.log(error);
        }
    }

    onSelectCharacter = (character) => {
        this.props.onSelectCharacter(character);
    }

    onRenameCharacter = (character) => {
        this.setState({
            renamingCharacter: character,
        });
    }

    closeRenamePrompt = () => {
        this.setState({
            renamingCharacter: null,
        });
    }

    renameCharacter = (newName) => {
        let characters = _cloneDeep(this.state.characters);
        let char = characters.find(x => x.id === this.state.renamingCharacter.id);
        char.name = newName;

        this.setState({
            characters,
        });

        this.saveCharacters(characters);
        this.closeRenamePrompt();
    }

    onDeleteCharacter = (character) => {
        let characters = _cloneDeep(this.state.characters);
        for(let i = 0; i < characters.length; i++) {
            if(characters[i].id === character.id) {
                characters.splice(i, 1);
                break;
            }
        }

        this.setState({
            characters,
        });

        this.saveCharacters(characters);

        if(this.props.activeCharacter && this.props.activeCharacter.id === character.id) {
            this.props.onSelectCharacter(null);
        }
    }

    render() {
        const {isLoading, characters, newCharPromptVisible, renamingCharacter} = this.state;

        if(isLoading) {
            return <Text>Loading...</Text>;
        }

        let charList = null;

        if(characters.length === 0) {
            charList = <Text>You have no characters.</Text>;
        } else {
            charList = <FlatList
                data={characters}
                keyExtractor={(item) => item.id.toString()}
                extraData={this.props}
                renderItem={({item}) =>
                    <Character
                        {...item}
                        onSelect={() => this.onSelectCharacter(item)}
                        onEdit={() => this.onRenameCharacter(item)}
                        onDelete={() => this.onDeleteCharacter(item)}
                        isActive={this.props.activeCharacter && this.props.activeCharacter.id === item.id} />
                } />
        }

        return (
            <View style={{flex: 1}}>
                <Button title="+ New Character" onPress={this.openNewCharPrompt} />
                {charList}
                {newCharPromptVisible &&
                    <Prompt
                        title="New Character Name"
                        visible={newCharPromptVisible}
                        onCancel={this.closeNewCharPrompt}
                        onSubmit={this.createNewCharacter}
                    />
                }
                {renamingCharacter &&
                    <Prompt
                        title="New Character Name"
                        visible={renamingCharacter !== null}
                        onCancel={this.closeRenamePrompt}
                        onSubmit={this.renameCharacter}
                    />
                }
            </View>
        );
    }
}