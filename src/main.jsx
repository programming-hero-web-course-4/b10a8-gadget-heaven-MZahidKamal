import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Routes/Root.jsx'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>
    },
]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
