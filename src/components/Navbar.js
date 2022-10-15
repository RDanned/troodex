import {v4 as uid} from 'uuid'
import {Link} from "react-router-dom";

function Navbar(){
    const routes = [
        {
            label: 'Main page',
            path: '/',
        },
        {
            label: 'First task',
            path: '/first-task',
        },
        {
            label: 'Second task',
            path: '/second-task',
        }
    ]

    return (
        <>
            <ul>
                {
                    routes.map(route => (
                        <li key={uid()}>
                            <Link to={route.path}>{route.label}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Navbar