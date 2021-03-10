import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [apiData, setApiData] = useState([]);

  const apiLink =
    "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";

  // fetchig api data
  useEffect(() => {
    fetch(apiLink)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);

  console.log(apiData);
  return (
    <div>
      {apiData.teams.map((team) => (
        <h3>{team.strTeam}</h3>
      ))}
    </div>
  );
}

export default App;
