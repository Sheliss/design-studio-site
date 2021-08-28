export const works_request = () => {
    return {
        type: 'WORKS_REQUEST'
    };
};

export const works_success = (data) => {
    return {
        type: 'WORKS_SUCCESS',
        payload: data
    }
}