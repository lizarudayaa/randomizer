import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../components/Home";
import Randomizer from "../components/Randomizer";

const AppRoutes = () => {
	return (
		<Switch>
			<Route exact path='/home'>
          <Home/>
			</Route>
			<Route exact path='/randomizer'>
        <Randomizer/>
			</Route>
		</Switch>
	);
};

export default AppRoutes;