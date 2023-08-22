const setLists = (lists) => ({
    type: 'SET_LISTS',
    payload: lists
})


export const deleteList = (listId) => ({
    type: 'DELETE_LIST',
    payload: listId
})

export const addUser = (newUser) => ({
    type: 'ADD_USER',
    payload: newUser
})

export const fetchLists = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((lists) => dispatch(setLists(lists)));
}