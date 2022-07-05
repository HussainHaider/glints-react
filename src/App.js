import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import * as url from './constants/urlConstant';
import { isExpired } from "react-jwt";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  React.useEffect(()=>{
    const user = window.localStorage.getItem('user');
    let value = JSON.parse(user);
    if(value && !isExpired(value.token)) {
      setUser(value);
      navigate("/", { replace: true });
    }
  }, []);

  return (<div className="App">
     <Routes>
      <Route path={url.LOGIN} element={<Login />} />
      <Route
        path={url.HOME}
        element={
          <ProtectedRoute user={user}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
