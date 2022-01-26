import "./App.css";
import { Switch, Route } from "react-router-dom";

import MainPage from "./pages/Main";
import Secondary from "./pages/Secondary";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" render={() => <MainPage />} />
				<Route
					exact
					path="/secondary/:episodeID"
					render={() => <Secondary />}
				/>
			</Switch>
		</div>
	);
}

export default App;
