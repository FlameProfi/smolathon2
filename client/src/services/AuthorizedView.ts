// import React, {FC, useContext, useEffect, useState, createContext} from 'react';
// import { Navigate } from 'react-router-dom';
// import {Context} from "../index";


// const {store} = useContext(Context);
// const UserContext = createContext({});


// function AuthorizeView(props: { children: React.ReactNode }) {

//         useEffect(() => {
//         if (localStorage.getItem('token')) {
//             store.checkAuth()
//         }
//     }, [])

//     if(store.isLoading){

//     }

//     if (store.isLoading) {
//         return (
//             <>
//                 <p>Loading...</p>
//             </>
//         );
//     }
//     else {
//         if (store.isAuth && !store.isLoading) {
//             return (
//                 <>
//                     <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
//                 </>
//             );
//         } else {
//             return (
//                 <>
//                     <Navigate to="/login" />
//                 </>
//             )
//         }
//     }

// }


// export default AuthorizeView;