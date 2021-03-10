import { useEffect, useState } from "react";
import "./App.css";
import ShowTeams from "./components/ShowTeams/ShowTeams";

function App() {
  let [apiData, setApiData] = useState([]);

  const apiLink =
    "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";

  // fetch api data
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(apiLink);
      response = await response.json();
      setApiData(response);
    }
    fetchMyAPI();
  }, []);

  // console.log(apiData);
  return (
    <div>
      <h3>This is broken</h3>
      <ShowTeams teamList={apiData}></ShowTeams>
    </div>
  );
}

export default App;
