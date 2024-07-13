// src/reducers/launchReducer.js
const initialState = {
    launches: [],
  };
  
  const launchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_LAUNCHES':
        return { ...state, launches: action.payload };
      default:
        return state;
    }
  };
  
  export default launchReducer;
  