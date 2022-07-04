import About from '../components/About/About';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import NoMatch from '../components/NoMatch/NoMatch';
import Permission from '../components/Permission/Permission';
import * as url from './urlConstant';

export const routesConfig = [
    {
        element: <Home />,
        exact: true,
        path: url.HOME,
    },
    {
        element: <About />,
        exact: true,
        path: url.ABOUT,
    },
    {
        element: <Login />,
        exact: true,
        path: url.LOGIN,
    },
    {
        element: <Permission />,
        exact: true,
        path: url.PERMISSION,
    },
    { 
        path: "*", 
        element: <NoMatch /> 
    },
];