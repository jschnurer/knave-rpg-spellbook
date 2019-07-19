import _cloneDeep from 'lodash/cloneDeep';

const initialState = {
    characters: [],
    selectedCharacterId: null,
}

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_CHARACTER': {
            let characters = state.characters.concat([{
                id: state.characters.length === 0
                    ? 1
                    : Math.max.apply(null, state.characters.map(x => x.id)) + 1,
                name: action.name,
                favorites: [],
            }]);

            return {
                ...state,
                characters,
                selectedCharacterId: characters.length === 1
                    ? characters[0].id
                    : state.selectedCharacterId,
            };
        }
        case 'DELETE_CHARACTER': {
            return {
                ...state,
                characters: state.characters.filter(x => x.id !== action.characterId),
                selectedCharacterId: state.selectedCharacterId === action.characterId
                    ? null
                    : state.selectedCharacterId,
            };
        }
        case 'SELECT_CHARACTER': {
            return {
                ...state,
                selectedCharacterId: action.characterId,
            };
        }
        case 'RENAME_CHARACTER': {
            let characters = _cloneDeep(state.characters);
            characters.filter(x => x.id === action.characterId)
                .forEach(x => {
                    x.name = action.name;
                });
            return {
                ...state,
                characters,
            };
        }
        case 'ADD_FAVORITE': {
            let characters = _cloneDeep(state.characters);
            characters.filter(x => x.id === action.characterId)
                .forEach(x => {
                    if(x.favorites.indexOf(action.spellName) === -1) {
                        x.favorites.push(action.spellName);
                    }
                });

            return {
                ...state,
                characters,
            };
        }
        case 'DELETE_FAVORITE': {
            let characters = _cloneDeep(state.characters);
            characters.filter(x => x.id === action.characterId)
                .forEach(x => {
                    let ix = x.favorites.indexOf(action.spellName);
                    if(ix > -1) {
                        x.favorites.splice(ix, 1);
                    }
                });

            return {
                ...state,
                characters,
            };
        }
        default: {
            return state;
        }
    }
}

export default characterReducer;