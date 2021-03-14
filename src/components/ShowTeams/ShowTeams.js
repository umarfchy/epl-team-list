import React from "react";
import { useHistory } from "react-router";
import "./ShowTeams.css";

const ShowTeams = (props) => {
  const history = useHistory();
  const showTeamDetails = (teamId)=>{
    const url = `teamDetails/${teamId}`
    history.push(url);
  }

  //individual card rendering function
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
