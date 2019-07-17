import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import Spellbook from './spellbook/Spellbook';
import Layout from './layout/Layout';
import CharacterList from './characters/CharacterList';
import _cloneDeep from 'lodash/cloneDeep';

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
      let dict = vals.map(x => ({ key: x[0], value: x[1] }));

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
    this.setState(prevState => ({
      screen: newScreen,
    }));
  }

  onCreateNewCharacter = (name) => {
    if (!name || !name.trim()) {
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

  onRenameCharacter = (newName) => {
    let characters = _cloneDeep(this.state.characters);
    let char = characters.find(x => x.id === this.state.renamingCharacter.id);
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
    if (!this.state.characterId) {
      return;
    }

    let characters = _cloneDeep(this.state.characters);
    let character = characters.find(x => x.id === this.state.characterId);
    if (!character.favorites) {
      character.favorites = [];
    }

    if (character.favorites.indexOf(spell.name) > -1) {
      return;
    }

    character.favorites.push(spell.name);

    this.setState({
      characters,
    });

    this.saveCharacters(characters);
  }

  onRemoveFavorite = (spell) => {

  }

  getActiveCharacter = () => {
    return !this.state.characterId
      ? null
      : this.state.characters.find(x => x.id === this.state.characterId);
  }

  render() {
    return (
      <Layout screen={this.state.screen} onMenuChange={this.onMenuChange}>
        {this.state.screen === 'characters' &&
          <CharacterList
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
      </Layout>
    );
  }
}
