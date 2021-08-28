export const work_page_request = () => {
    return {
        type: 'WORK_INFO_REQUEST'
    };
};

export const work_page_success = (data) => {
    return {
        type: 'WORK_INFO_SUCCESS',
        payload: data
    }
}