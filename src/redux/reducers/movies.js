const initialState = {
    first: {
        created_by: "",
        description: "",
        favorite_count: 0,
        id: "",
        items: []
    },
    second: {
        created_by: "",
        description: "",
        favorite_count: 0,
        id: "",
        items: []
    },
    detail: {
        adult: false,
        backdrop_path: "",
        belongs_to_collection: null,
        budget: 200000000,
        genres: [],
        homepage: "",
        id: 497698,
        imdb_id: "",
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 108.441,
        poster_path: "/kwB7d51AIcyzPOBOHLCEZJkmPhQ.jpg",
        production_companies: [],
        production_countries: [],
        release_date: "2021-07-07",
        revenue: 379751655,
        runtime: 134,
        spoken_languages: [],
        status: "Released",
        tagline: "Her world. Her secrets. Her legacy.",
        title: "Black Widow",
        video: false,
        vote_average: 7.4,
        vote_count: 8632
    }
}

const moviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_FIRST_LIST_MOVIE': 
            return { ...state, first: { ...state.first, ...action.payload}};
        case 'GET_SECOND_LIST_MOVIE': 
            return { ...state, second: { ...state.second, ...action.payload}};
        case 'GET_DETAIL_MOVIE':
            return { ...state, detail: { ...state.detail, ...action.payload}};
        default: 
            return state;
    }
}

export default moviesReducer;