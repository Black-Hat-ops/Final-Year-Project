import React, { createContext, useState } from 'react';

export const UserDataContext = createContext()

export const ContextProvider = UserDataContext.Provider;

const UserContext = ({children})=>{
     const [user ,setUser] = useState(
        {
            email : ' ',
            fullName :{
                FirstName : '',
                LastName : ''
            }
        }            
     )
    return (
        <div>
            <ContextProvider value={{user ,setUser}} >
                {children}
            </ContextProvider>
        </div>
    );
}

export default UserContext;