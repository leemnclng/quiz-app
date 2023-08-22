// import core modules
// import React from 'react';

import { 
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from 'react-router-dom';

// importing components for the elements of the path
import Homepage from './Pages/Homepage';
import LoginComp from './Pages/AuthPage/Login';
import RegisterComp from './Pages/AuthPage/Register';

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Homepage />}>
            <Route path='auth'>
                <Route path='login' element={<LoginComp />}/>
                <Route path='register' element={<RegisterComp />}/>
            </Route>
        </Route >
    )
)

const AppRouter = () => {
    return (
        <RouterProvider router={Router} />
    )
}

export default AppRouter;