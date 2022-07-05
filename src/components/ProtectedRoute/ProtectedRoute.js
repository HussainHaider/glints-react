import { Navigate } from "react-router-dom";

import * as url from '../../constants/urlConstant';


const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      // user is not authenticated
      return <Navigate to={url.LOGIN} />;
    }
    return children;
};

export default ProtectedRoute;