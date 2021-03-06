export const selectCharacter = (characterId) => ({
    type: 'SELECT_CHARACTER',
    characterId,
})

export const deleteCharacter = (characterId) => ({
    type: 'DELETE_CHARACTER',
    characterId,
})

export const createCharacter = (name) => ({
    type: 'CREATE_CHARACTER',
    name,
})

export const renameCharacter = (characterId, name) => ({
    type: 'RENAME_CHARACTER',
    characterId,
    name,
})

export const addFavorite = (characterId, spellName) => ({
    type: 'ADD_FAVORITE',
    characterId,
    spellName,
})

export const deleteFavorite = (characterId, spellName) => ({
    type: 'DELETE_FAVORITE',
    characterId,
    spellName,
})