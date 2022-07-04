import * as React from "react";
import {useRoutes } from "react-router-dom";

import { routesConfig } from "./constants/routeConfig";


function App() {
  let element = useRoutes(routesConfig);
  return (<div className="App">
      {element}
    </div>
  );
}

export default App;
