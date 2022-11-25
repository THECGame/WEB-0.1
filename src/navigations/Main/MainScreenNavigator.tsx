import { MainScreen } from "../../screens/Main";
import React from 'react';
export const MainScreenNavigator = [
    {
        path: "/",
        exact:true,
        screen: <MainScreen />
    },
    {
        path: "/home",
        exact:true,
        screen: <MainScreen />
    },
]