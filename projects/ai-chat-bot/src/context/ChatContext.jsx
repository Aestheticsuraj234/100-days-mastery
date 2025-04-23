import React , { createContext , useContext , useReducer } from 'react';
import {v4 as uuidv4} from 'uuid';

import {toast} from 'react-hot-toast';
import { checkApiKey, getChatResponse } from '../services/geminiServices';

// add_message , set_loading , set_error , clear_chat


const initialState = {
    message:[],
    isLoading:false,
    error:null,
}

const chatReducer = (state , action)=>{
    switch(action.type){

        case "ADD_MESSAGE":
            return {
                ...state,
                message:[
                    ...state.message,
                    {
                        id:uuidv4(),
                        content:action.payload.content,
                        role:action.payload.role,
                        timestamp:new Date()
                    }
                ],
                error:null,
            }

        case "SET_LOADING":
            return {
                ...state,
                isLoading:action.payload
            }
        

        case "SET_ERROR":
            return{
                ...state,
                error:action.payload,
                isLoading:false
            }


        case "CLEAR_CHAT":
            return {
              ...initialState
            }

        default:
            return state;    
    }
}


const chatContext = createContext(undefined);

export const ChatProvider = ({children})=>{
    const [state , dispatch] = useReducer(chatReducer , initialState);

    const apiKeySet = checkApiKey();
const  sendMessage = async (content)=>{
    
    dispatch({type:"ADD_MESSAGE" , payload:{content , role:"user"}})

    if(!apiKeySet){
        dispatch({
            type:"SET_ERROR",
            payload:"Pelase Set your gemini API key in the geminiService.js file"
        });
        toast.error("Pelase Set your gemini API key in the geminiService.js file")
        return;
    }

    
    // Set loading state
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
        const messageForApi = state.message.map(msg=>({
            role:msg.role ==="user"?"user":"model",
            content:msg.content
        }))

        messageForApi.push({
            role:"user",
            content
        })

        console.log("Message for API:", messageForApi);

        const aiResponse = await getChatResponse(messageForApi);

        dispatch({
            type:"ADD_MESSAGE",
            payload:{
                content:aiResponse,
                role:"ai"
            }
        })

    } catch (error) {
            console.error("Error fetching chat response:", error);
            const errorMessage = error ? error.message : "Failed to fetch chat response";
            dispatch({
                type:"SET_ERROR",
                payload:errorMessage
            })
            toast.error(errorMessage)
    }finally{
        // Clear loading state
        dispatch({ type: 'SET_LOADING', payload: false });
    }
}

const  clearChat = ()=>{
    dispatch({type:"CLEAR_CHAT"})
    toast.success("Chat Cleared")
}

return (
    <chatContext.Provider value={{state , sendMessage , clearChat , apiKeySet}}>
        {children}
    </chatContext.Provider>
)
}


export const useChat = ()=>{
    const context = useContext(chatContext);
    if(context === undefined){
        throw new Error("useChat must be used within a ChatProvider")
    }
    return context;
}