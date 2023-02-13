const initialState = {
    list: [],
    detail: []
}

const moviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_LIST_MOVIE': 
            return { ...state, list: { ...state.list, ...action.payload}};
        case 'GET_DETAIL_MOVIE':
            return { ...state, detail: { ...state.detail, ...action.payload}};
        default: 
            return state;
    }
}

export default moviesReducer;