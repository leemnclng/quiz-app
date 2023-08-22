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

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Homepage />}/>
    )
)

const AppRouter = () => {
    return (
        <RouterProvider router={Router} />
    )
}

export default AppRouter;