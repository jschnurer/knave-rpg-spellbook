import React from 'react';
import { AsyncStorage, Button, FlatList, Text, TouchableHighlight, View } from 'react-native';
import Prompt from 'rn-prompt';
import _cloneDeep from 'lodash/cloneDeep';
import Character from './Character';

export default class CharacterList extends React.Component {
    state = {
        newCharPromptVisible: false,
        renamingCharacter: null,
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

    onStartRenameCharacter = (character) => {
        this.setState({
            renamingCharacter: character,
        });
    }

    closeRenamePrompt = () => {
        this.setState({
            renamingCharacter: null,
        });
    }

    render() {
        const {isLoading, newCharPromptVisible, renamingCharacter} = this.state;
        const {characters} = this.props;

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
                        onSelect={() => this.props.onSelectCharacter(item)}
                        onEdit={() => this.onStartRenameCharacter(item)}
                        onDelete={() => this.props.onDeleteCharacter(item)}
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
                        onSubmit={(name) => { this.props.onCreateNewCharacter(name); this.closeNewCharPrompt(); }}
                    />
                }
                {renamingCharacter &&
                    <Prompt
                        title="New Character Name"
                        visible={renamingCharacter !== null}
                        onCancel={this.closeRenamePrompt}
                        onSubmit={(name) => { this.props.onRenameCharacter(name, renamingCharacter); this.closeRenamePrompt(); }}
                    />
                }
            </View>
        );
    }
}