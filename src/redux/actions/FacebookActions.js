import { ADD_COMMENT } from '../types/FacebookType'


export const addCommentAction = (userComment) => {
    return {
        type: ADD_COMMENT,
        userComment: { ...userComment, image: `https://i.pravatar.cc/50/u=${userComment.name}` }
    }
}