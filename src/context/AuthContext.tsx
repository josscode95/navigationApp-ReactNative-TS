import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

//que informacion tendre aqui
export interface AuthState{
  isLoggedIn:boolean;
  username?:string;
  favoriteIcon?:string;
}

//estado inicial
export const authInitialState:AuthState = {
  isLoggedIn: false
} 

//como luce mi Context (variables, metodos)
export interface AuthContextProps{
  authState:AuthState;
  signIn:()=>void;
  changeFavoriteIcon:(name:string)=>void;
  logOut:()=>void;
  changeUsername:(name:string)=>void;
}

//crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

export interface ChildrenProps{
  children:JSX.Element|JSX.Element[];
}

//componente proveedor del estado
export const AuthProvider = ({children}:ChildrenProps) => {

  const [authState, dispatch] = useReducer(authReducer, authInitialState)

  const signIn = () => {
    dispatch({type: 'signIn'})
  }

  const changeFavoriteIcon = (name:string) => {
    dispatch({type:'changeFavIcon', payload: name})
  }

  const logOut = () => {
    dispatch({type:'logOut'})
  }

  const changeUsername = (name:string) => {
    dispatch({type:'changeUsername', payload:name})
  }

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      changeFavoriteIcon,
      logOut,
      changeUsername
    }}>
      { children }
    </AuthContext.Provider>
  );
}