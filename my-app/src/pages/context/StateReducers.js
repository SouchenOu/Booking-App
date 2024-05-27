import { reducerCases } from "./constent"

export const initialeState = {
    userInfo : undefined,
    messages : [],
    conversations : [],

}


const reducer = (state, action) =>{
    switch(action.type){
        case reducerCases.SET_USER_INFO : 
            return {
                ...state,
                userInfo: action.userInfo,

            }
        case reducerCases.SET_CONVERSATIONS: 
            return {
                ...state,
                conversations: action.conversations,
            }
        default: return state;
    }
}

export default reducer;