import React, { Fragment } from 'react';
import { Button, Text, TouchableHighlight, View } from 'react-native';

export default class SpellRow extends React.Component {
    state = {
        opened: false,
    }

    toggleSpell = () => {
        this.setState(prevState => ({
            opened: !prevState.opened,
        }));
    }

    render() {
        const { name, description, onLongPress } = this.props;

        return (
            <TouchableHighlight style={{
                padding: 2,
                paddingTop: 5,
                paddingBottom: 5,
                marginTop: 2,
                marginBottom: 2,
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                borderStyle: 'solid',
                justifyContent: 'center',
            }}
            onLongPress={onLongPress}
            onPress={this.toggleSpell}>
                <View style={{flexDirection: 'column'}}>
                    <Text>{name}</Text>
                    { this.state.opened &&
                        <Text>{description}</Text>
                    }
                </View>
            </TouchableHighlight>
        );
    }
}