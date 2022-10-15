import { createBrowserRouter } from 'react-router-dom'
import FirstTask from "../pages/FirstTask";
import SecondTask from "../pages/SecondTask";
import MainPage from '../pages/MainPage'
import Layout from '../pages/Layout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/first-task',
                element: <FirstTask />
            },
            {
                path: '/second-task',
                element: <SecondTask />
            },
        ]
    },
])

export default router