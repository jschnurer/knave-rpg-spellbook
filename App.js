import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import Spellbook from './spellbook/Spellbook';
import Layout from './layout/Layout';
import CharacterList from './characters/CharacterList';

export default class App extends React.Component {
  state = {
    screen: 'characters',
    character: null,
  }

  componentDidMount() {
    this.loadActiveCharacter();
  }

  loadActiveCharacter = async () => {
    try {
      let vals = await AsyncStorage.multiGet(['CharacterList','ActiveCharacterId']);
      if(vals === null || vals.length < 2) {
        return;
      }
      let dict = vals.map(x => ({ key: x[0], value: x[1] }));
      let activeCharId = dict.find(x => x.key === 'ActiveCharacterId');
      if(!activeCharId || !activeCharId.value) {
        return;
      }

      let charId = parseInt(activeCharId.value, 10);
      let characterList = dict.find(x => x.key === 'CharacterList');
      if(!characterList) {
        return;
      }

      characterList = JSON.parse(characterList.value);
      if(!characterList || characterList.length === 0) {
        return;
      }

      let character = characterList.find(x => x.id === charId);

      this.setState({
        character,
      });
    } catch(err) {
      console.log(err);
    }
  }

  onMenuChange = (newScreen) => {
    this.setState(prevState => ({
      screen: newScreen,
    }));
  }

  onSelectCharacter = async (character) => {
    try {
      await AsyncStorage.setItem('ActiveCharacterId', character === null ? "-1" : character.id.toString());
      this.setState({
        character,
      });
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Layout screen={this.state.screen} onMenuChange={this.onMenuChange}>
        {this.state.screen === 'characters' &&
          <CharacterList
            onSelectCharacter={this.onSelectCharacter}
            activeCharacter={this.state.character} />
        }
        {this.state.screen === 'favorites' && <Spellbook activeCharacter={this.state.character} />}
        {this.state.screen === 'list' && <Spellbook />}
      </Layout>
    );
  }
}
