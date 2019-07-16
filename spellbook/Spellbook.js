import React from 'react';
import { View, Text } from 'react-native';
import spells from './spells.json';
import SpellRow from './SpellRow.js';

const Spellbook = (props) =>
    <View style={{flexDirection: 'column'}}>
        {spells.map(s => <SpellRow key={s.Name} {...s}/>)}
    </View>;

export default Spellbook;