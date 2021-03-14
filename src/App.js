import { useEffect, useState } from "react";
// import "./App.css";
import DetailsExplore from "./components/DetailsExplore/DetailsExplore";
import Header from "./components/Header/Header";
import ShowTeams from "./components/ShowTeams/ShowTeams";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NothingFound from "./components/NothingFound/NothingFound";


function App() {
  const [apiData, setApiData] = useState([]);

  const apiLink =
    "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";

  // fetch api data
  useEffect(() => {
    fetch(apiLink)
      .then((res) => res.json())
      .then((data) => setApiData(data.teams));
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header></Header>
        <ShowTeams team={apiData}></ShowTeams>
          </Route>
          <Route path='/teamDetails/:id'>
          <DetailsExplore></DetailsExplore>
          </Route>
          <Route path='/*'>
          <Header>
          </Header>
          <NothingFound></NothingFound>
          </Route>
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
