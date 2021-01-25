const initialState = {
    tastes: [],
    chosenTaste: [],
    loading: true,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TASTES_LOADED':
            return {
                ...state,
                tastes: action.payload,
                loading: false
            };
        case 'TASTES_REQUESTED':
            return {
                ...state,
                loading: true
            };
        case 'TASTES_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            };
        case 'MAIN_TASTE_CHOSEN':
            const id = action.payload;
            // console.log(id);
            const item = state.tastes.find(item => item.id === id);
            // console.log(item.mix);

            return {
                ...state,
                chosenTaste: item.mix
            };
        default: 
            return state;
    }
};

export default reducer;