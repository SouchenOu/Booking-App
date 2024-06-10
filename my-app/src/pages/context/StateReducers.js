import { reducerCases } from "./constent"

export const initialeState = {
    userInfo : undefined,
    messages : [],
    conversations : [],
    currentChatUser: undefined,
    contactsPage : false,


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
        case reducerCases.CHANGE_CURRENT_CHAT_USER:
            return {
                ...state,
                currentChatUser : action.user,
            }
        case reducerCases.SET_ALL_CONTACTS_PAGE: 
            return {
                ...state,
                contactsPage: !state.contactsPage,
            }
        case reducerCases.SET_MESSAGES:
            return {
                ...state,
                messages : action.messages,
                    
            }
        default: return state;
    }
}

export default reducer;