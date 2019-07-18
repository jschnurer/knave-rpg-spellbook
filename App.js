import React from 'react';
import { AsyncStorage, View } from 'react-native';
import Spellbook from './spellbook/Spellbook';
import Layout from './layout/Layout';
import CharacterList from './characters/CharacterList';
import _cloneDeep from 'lodash/cloneDeep';
import * as Haptics from 'expo-haptics';
import { ToastAndroid } from 'react-native';

export default class App extends React.Component {
    state = {
        screen: 'characters',
        characters: [],
        characterId: null,
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        try {
            let vals = await AsyncStorage.multiGet(['CharacterList', 'ActiveCharacterId']);
            if (vals === null) {
                return;
            }
            let dict = vals.map(x => x === null
                    ? null
                    : ({ key: x[0], value: x[1] }))
                .filter(x => x !== null);

            let characterList = dict.find(x => x.key === 'CharacterList');
            if (!characterList) {
                return;
            }

            characterList = JSON.parse(characterList.value);

            this.setState({
                characters: characterList,
            })

            let activeCharId = dict.find(x => x.key === 'ActiveCharacterId');
            if (!activeCharId || !activeCharId.value) {
                return;
            }

            let charId = parseInt(activeCharId.value, 10);

            if (!characterList || characterList.length === 0) {
                return;
            }

            this.setState({
                characterId: charId,
            })
        } catch (err) {
            console.log(err);
        }
    }

    onMenuChange = (newScreen) => {
        this.setState({
            screen: newScreen,
        });
    }

    validateName = (name, existingCharacter) => {
        if (!name || !name.trim()) {
            ToastAndroid.show('Invalid name provided!', ToastAndroid.SHORT);
            return false;
        }

        let sameNameChar = null;

        if (existingCharacter) {
            sameNameChar = this.state.characters.find(x => x.id !== existingCharacter.id && x.name === name);
        } else {
            sameNameChar = this.state.characters.find(x => x.name === name);
        }

        if (sameNameChar) {
            ToastAndroid.show(`Another character is already named ${name}!`, ToastAndroid.SHORT);
            return false;
        }

        return true;
    }

    onCreateNewCharacter = (name) => {
        if (!this.validateName(name)) {
            return;
        }

        let chars = _cloneDeep(this.state.characters);
        chars.push({
            id: chars.length === 0 ? 1 : (Math.max.apply(null, chars.map(x => x.id)) || 0) + 1,
            name,
        });

        this.saveCharacters(chars);

        this.setState({
            characters: chars,
        });

        if (chars.length === 1) {
            this.props.onSelectCharacter(chars[0]);
        }
    }

    onRenameCharacter = (newName, renamingCharacter) => {
        if (!this.validateName(newName, renamingCharacter)) {
            return;
        }

        let characters = _cloneDeep(this.state.characters);
        let char = characters.find(x => x.id === renamingCharacter.id);
        char.name = newName;

        this.setState({
            characters,
        });

        this.saveCharacters(characters);
    }

    onDeleteCharacter = (character) => {
        let characters = _cloneDeep(this.state.characters);
        for (let i = 0; i < characters.length; i++) {
            if (characters[i].id === character.id) {
                characters.splice(i, 1);
                break;
            }
        }

        this.setState({
            characters,
        });

        this.saveCharacters(characters);

        if (this.state.characterId === character.id) {
            this.onSelectCharacter(null);
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

    onSelectCharacter = async (character) => {
        if (character !== null && this.state.characterId === character.id) {
            return;
        }

        try {
            await AsyncStorage.setItem('ActiveCharacterId', character === null ? "-1" : character.id.toString());
            this.setState({
                characterId: character.id,
            });
        } catch (err) {
            console.log(err);
        }
    }

    onAddFavorite = (spell) => {
        this.modifyFavoriteSpell(spell, 'add');
    }

    onRemoveFavorite = (spell) => {
        this.modifyFavoriteSpell(spell, 'remove');
    }

    modifyFavoriteSpell = (spell, addOrRemove) => {
        if (!this.state.characterId) {
            return;
        }

        let characters = _cloneDeep(this.state.characters);
        let character = characters.find(x => x.id === this.state.characterId);
        if (!character.favorites) {
            character.favorites = [];
        }

        let spellIx = character.favorites.indexOf(spell.name);

        if ((addOrRemove === 'add' && spellIx > -1)
            || (addOrRemove === 'remove' && spellIx === -1)) {
            return;
        }

        if (addOrRemove === 'add') {
            character.favorites.push(spell.name);
        } else if (addOrRemove === 'remove') {
            character.favorites.splice(spellIx, 1);
        }

        this.setState({
            characters,
        });

        this.saveCharacters(characters);

        Haptics.selectionAsync();
    }

    getActiveCharacter = () => {
        return !this.state.characterId
            ? null
            : this.state.characters.find(x => x.id === this.state.characterId);
    }

    render() {
        return (
            <Layout screen={this.state.screen} onMenuChange={this.onMenuChange}>
                <View style={{ padding: 5, flex: 1, display: 'flex', flexDirection: 'column', }}>
                    {this.state.screen === 'characters' &&
                        <CharacterList
                            characters={this.state.characters}
                            onCreateNewCharacter={this.onCreateNewCharacter}
                            onRenameCharacter={this.onRenameCharacter}
                            onDeleteCharacter={this.onDeleteCharacter}
                            onSelectCharacter={this.onSelectCharacter}
                            activeCharacter={this.getActiveCharacter()} />
                    }
                    {this.state.screen === 'favorites' &&
                        <Spellbook
                            showFavorites
                            activeCharacter={this.getActiveCharacter()}
                            onRemoveFavorite={this.onRemoveFavorite} />
                    }
                    {this.state.screen === 'list' &&
                        <Spellbook
                            showFavorites={false}
                            onAddFavorite={this.onAddFavorite} />
                    }
                </View>
            </Layout>
        );
    }
}
