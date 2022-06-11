import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import React, { useEffect, useState } from "react";
//import Loader from "./components/Load";
import Home from "./www/Home";


function App() {
	//const [appLoaded, setAppLoaded] = useState(false);
	//const [startLoadProgress, setStartLoadProgress] = useState(false);
	//useEffect(() => {stopLoad();}, []);
	//const stopLoad = () => {
	//	setStartLoadProgress(true);
	//	setTimeout(() => setAppLoaded(true), 3000);
	//};
	//if (!appLoaded) return <Loader done={startLoadProgress} />;

  return (
    <div className="App">
    	<Router>
    		<div className="app-content">
    			<Switch>
        			<Route component={Home} />
      			</Switch>
    		</div>
  		</Router>
    </div>
  );
}

export default App;
