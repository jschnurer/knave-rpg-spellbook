import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Spellbook from './spellbook/Spellbook';
import Layout from './layout/Layout';

export default class App extends React.Component {
  state = {
    screen: 'characters',
  }

  onMenuChange = (newScreen) => {
    console.log(newScreen);
    this.setState(prevState => ({
      screen: newScreen,
    }));
  }

  render() {
    return (
      <Layout screen={this.state.screen} onMenuChange={this.onMenuChange}>
        {this.state.screen === 'list' && <Spellbook />}
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
