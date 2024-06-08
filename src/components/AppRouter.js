import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

/*const getUserFromLocalStorage = () => { 
    const userJSON = localStorage.getItem('user'); 
    return userJSON ? JSON.parse(userJSON) : null; 
}; */

const AppRouter = observer(() => {
    //const isAuth = false //показывает авторизован пользователь или нет
    const {user} = useContext(Context)

    //const {user} = getUserFromLocalStorage()
    //console.log( user.)
    //console.log(Auth.getUserFromLocalStorage())
    return (        
            <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
              <Route key={path} path={path} element={<Component/>}/>
           )}
            
           {publicRoutes.map(({ path, Component }) =>
              <Route key={path} path={path} element={<Component/>}/>
           )}
           
        </Routes>
        
     );
});

export default AppRouter;