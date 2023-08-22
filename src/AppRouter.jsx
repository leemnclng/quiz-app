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
import LoginComp from './Pages/Login';

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<Homepage />} />
            <Route path='auth'>
                <Route path='login' element={<LoginComp />}/>
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