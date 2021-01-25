const tastesLoaded = (newTastes) => {
    return {
        type: 'TASTES_LOADED',
        payload: newTastes
    }
};

const tastesRequested = () => {
    return {
        type: 'TASTES_REQUESTED'
    }
};

const tastesError = () => {
    return {
        type: 'TASTES_ERROR'
    }
};

const mainTasteChosen = (id) => {
    return {
        type: 'MAIN_TASTE_CHOSEN',
        payload: id
    }
};

export {
    tastesLoaded,
    tastesRequested,
    tastesError,
    mainTasteChosen
};