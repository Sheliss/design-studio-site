const initState = {
    data: [],
    loading: true
}

const worksListReducer = (state = initState, action) => {
    switch(action.type) {
        case "WORKS_REQUEST":
            return {
                ...state,
                loading: true,
                data: []
            };
        case "WORKS_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return state
    }
}

export default worksListReducer;