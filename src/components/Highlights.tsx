export const jsCodeHackerNews = `function createStore(reducer) {
    let currentState = reducer(undefined, {});

    return {
        getState: () => currentState,
        dispatch: action => {
            currentState = reducer(currentState, action);
        }
    }
}
const initialState = {
    favorites: []
}
function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_FAVORITE": {
            const addedFavorite = action.payload.favorite;
            const favorites = [...state.favorites, addedFavorite];
            return { favorites };
        }

        case "REMOVE_FAVORITE": {
            const removedFavorite = action.payload.favorite;
            const favorites = state.favorites.filter(favorite => favorite.id !== removedFavorite.id);
            return { favorites };
        }
        default: 
            return state;
    }
}
const store = createStore(favoritesReducer);
export default store;
`;

export const cssCodeHackerNews = `html,
body {
    box-sizing: border-box;
    margin: 0.5rem;
    padding: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.app--container {
    width: 85%;
    margin: 0 auto;
}

.logo--title--flex--container {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    background-color: #ff6600; 
    padding: 0 0.15rem;
    height: 1.50rem;
}

.link--header {
    color: #ffffff;
    text-decoration: none;
}

.app--content {
    background-color: #f6f6ef;
    padding: 0.5rem 1.2rem
}

.active {
    border-bottom: 1px solid white;
  }

.gray--text {
    color: #828282;
    font-size: 0.8em;
    text-decoration: none;
}

.black--text {
    color: #000000;
    text-decoration: none;
    font-weight: 400;
    font-size: 0.8em;
    margin-left: -5px;
}

.second--line {
    margin-left: 1rem;
    margin-bottom: 5px;
}

.upvote {
    font-size: 13px;
    vertical-align: top;
    color: #828282;
    margin-left: 0.25rem;
  }

.favorite {
    cursor: pointer;
}

.hover:hover {
    text-decoration: underline;
}

.logo--header {
    border: 1px solid white;
}

.title--logo {
    font-weight: 700;
}

.code--content {
    height: 200px;
    overflow: scroll;
}
`

