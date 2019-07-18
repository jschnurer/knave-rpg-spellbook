import React, { useState } from 'react';
import { View } from 'react-native';
import Spellbook from './spellbook/Spellbook';
import Layout from './layout/Layout';
import CharacterList from './characters/CharacterList';

export default function SpellbookApp(props) {
    const [screen, setScreen] = useState('characters');

    return (
        <Layout screen={screen} onMenuChange={setScreen}>
            <View style={{ padding: 5, flex: 1, display: 'flex', flexDirection: 'column', }}>
                {screen === 'characters' &&
                    <CharacterList />
                }
                {screen === 'favorites' &&
                    <Spellbook showFavorites />
                }
                {screen === 'list' &&
                    <Spellbook />
                }
            </View>
        </Layout>
    );
}
