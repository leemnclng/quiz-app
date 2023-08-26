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
import DashboardComponent from './Pages/Dashboard';
import QuizPageComponent from './Pages/Dashboard/Components/QuizComponent';
import NotFoundComponent from './Pages/NotFound';
import LandingContent from './Pages/Homepage/components/MainContent/quiz';
const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route path='home' element={<Homepage />}>
                <Route index element= {<LandingContent />} />
                <Route path='dashboard' element ={<DashboardComponent />} >
                    {/* quiz route is subject to change might put id for params for scalability  */}
                    <Route path='quiz' element={<QuizPageComponent />} /> 
                </Route>
            </Route>
            
            <Route path='auth'>
                <Route path='login' element={<LoginComp />}/>
            </Route>
            <Route path='*' element={<NotFoundComponent />} />
        </Route >
    )
)

const AppRouter = () => {
    return (
        <RouterProvider router={Router} />
    )
}

export default AppRouter;