import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Translator = lazy(() => import("./containers/Translator"));
const Favorites = lazy(() => import("./containers/Favorites"));
const History = lazy(() => import("./containers/History"));

const App = () => {
  return (
		<BrowserRouter>
			<Suspense fallback={"jhg"}>
				<Switch>
					<Route path="/translator" component={Translator} />
					<Route path="/translator" component={Favorites} />
					<Route path="/history" component={History} />
					<Redirect to="/translator" />
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
