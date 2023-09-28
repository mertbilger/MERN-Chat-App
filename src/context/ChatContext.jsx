import {
    createContext,
    useContext,
    useReducer,
  } from "react";
  import { AuthContext } from "./AuthContext";
  
  export const ChatContext = createContext();
  
  export const ChatContextProvider = ({ children }) => {
    const { girisKullanici } = useContext(AuthContext);
    const INITIAL_STATE = {
      chatId: "null",
      user: {},
    };
  
    const chatReducer = (state, action) => {
      switch (action.type) {
        case "CHANGE_USER":
          if (girisKullanici && action.payload) {
            return {
              user: action.payload,
              chatId:
                girisKullanici.uid > action.payload.uid
                  ? girisKullanici.uid + action.payload.uid
                  : action.payload.uid + girisKullanici.uid,
            };
          }
          return state; // Eğer biri null ise, mevcut durumu geri döndür
        default:
          return state;
      }
    };
    
  
    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  
    return (
      <ChatContext.Provider value={{ data:state, dispatch }}>
        {children}
      </ChatContext.Provider>
    );
  };
  
  export default ChatContextProvider;