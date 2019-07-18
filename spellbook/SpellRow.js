import React, { Fragment } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

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
            <TouchableOpacity style={{
                padding: 2,
                paddingTop: 15,
                paddingBottom: 15,
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                borderStyle: 'solid',
                justifyContent: 'center',
            }}
            onLongPress={onLongPress}
            onPress={this.toggleSpell}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={{color: 'black'}}>{name}</Text>
                    { this.state.opened &&
                        <Text style={{color: '#666'}}>{description}</Text>
                    }
                </View>
            </TouchableOpacity>
        );
    }
}