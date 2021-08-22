import {ADD_COMMENT} from '../types/FacebookType';


const initialState = {
    arrComment: [
        // { name: 'Nhân', content: 'Hello', image: 'https://picsum.photos/200/200' },
        // { name: 'Sâm', content: 'Ahihi !!!', image: 'https://picsum.photos/200/200' },
    ]
}

export const FacebookReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_COMMENT: {
            state.arrComment = [...state.arrComment, action.userComment];

            return {...state};
        }

        default:
            return state
    }
}



