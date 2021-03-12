import React from "react";
import "./ShowTeams.css";

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

const ShowTeams = (props) => {
  const history = useHistory();
  const showTeamDetails = (teamId)=>{
    const url = `teamDetails/${teamId}`
    history.push(url);
  }

  const renderCard = (teamName, teamPic, teamId) =>{
    return(
      <div className="card">
        <img src={teamPic} alt="" /> 
        <h3>{teamName}</h3> 
        <button onClick = {()=>
          showTeamDetails(teamId)
        }>Explore</button>
      </div>
    )
  }
  console.log(props.team
    )
  return (
    <div>
      
      <div className='container'>
      <div className='cards'>
        {
          props.team.map(team=>renderCard(team.strTeam,team.strTeamBadge, team.idTeam))
          
        }
      </div>
      </div>
    </div>
  );
};

export default ShowTeams;
