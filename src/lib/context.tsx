"use client"

import { createContext } from 'react';
import { UserContacts, UserProfile } from '../types/user';

interface UserContext {
    userID : string,
    profile :  UserProfile,
    //might migrate this to profile
    contacts : UserContacts,
    setProfile : (profile : UserProfile) => void,

}

export const Context = createContext<UserContext>({
    userID : "",
    profile : ({} as UserProfile),
    contacts : ({} as UserContacts),
    setProfile : (profile : UserProfile) => {
        
    },
});