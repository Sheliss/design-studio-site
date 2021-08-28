const initState = {
    data: {},
    loading: true
}

const workPageReducer = (state = initState, action) => {
    switch(action.type) {
        case "WORK_INFO_REQUEST":
            return {
                ...state,
                loading: true,
                data: {}
            };
        case "WORK_INFO_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return state
    }
}

export default workPageReducer;