const initialState = {
    contactList: []
};

export const listsReduser = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_LISTS': {
            state = {
                ...state,
                contactList: [...state.contactList, ...action.payload]
            }
            break
        }
        case 'DELETE_LIST': {
            state = {
                ...state,
                contactList: state.contactList.filter(list => list.id !== action.payload)
            }
            break
        }
        case 'ADD_USER': {
            state = {
                ...state,
                contactList: [...state.contactList, action.payload]
            }
            break
        }
    }

    return state
}