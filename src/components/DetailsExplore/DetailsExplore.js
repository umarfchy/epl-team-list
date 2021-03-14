import React, { useEffect, useState } from "react";
import "./DetailsExplore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMars,
  faMapMarkerAlt,
  faFlag,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookSquare,
  faYoutubeSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

import maleImg from "./../../Images/Gender/male.png";
import femaleImg from "./../../Images/Gender/female.png";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const DetailsExplore = () => {
  const { id } = useParams();
  const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`

  const [team, setTeam] = useState('')
  
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setTeam(data.teams[0]))
  }, [url]);



  const teamBadge = team.strTeamBadge;
  const teamName = team.strTeam
  const teamFounded = team.intFormedYear;
  const teamCountry = team.strCountry
  const teamSportType = team.strSport;
  const teamGender = team.strGender;
  const teamFb = team.strFacebook
  const teamYoutube = team.strYoutube
  const teamTwitter = team.strTwitter

  const renderDetails = (badge, name, founded,country, sportType, gender, fb, youtube, twitter) =>{
    return (
      <div className="container">
      <div className="banner-image">
        <img className="overBgImg" src={badge} alt='' />
      </div>
      <div className="detailShowcase">
        <div style= {gender === 'Male' ? {backgroundColor: '#3a42ff'} : {backgroundColor: '#fc4d57'}
        } className="teamDetails">
          <div className="teamInfo">
            <h2>{name}</h2>
            <p>
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              Founded: {founded}
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faFlag} />
              </span>
              Country: {country}
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faFutbol} />
              </span>
              Sports Type: {sportType}
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faMars} />
              </span>
              Gender: {gender}
            </p>
          </div>
          <div className="teamImg">
            <img src={
              gender === 'Male' ? maleImg : femaleImg
              } alt="" />
          </div>
        </div>
        <div className="paraInfo">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Placeat commodi vitae repellendus. Praesentium minima officia
            mollitia distinctio, molestias atque. Tempora saepe tenetur
            repellendus ea modi nostrum perspiciatis deleniti accusamus
            alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Illo adipisci obcaecati vitae laudantium dolor suscipit, ullam
            voluptatibus deleniti aut harum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem animi mollitia doloremque reiciendis placeat ut
            atque. Fuga rem deleniti expedita. Id ea praesentium esse hic
            nisi architecto mollitia vero omnis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quos dignissimos voluptatem
            asperiores? Expedita praesentium repudiandae sit deleniti hic
            sequi modi.
          </p>
        </div>
        <div>
          <Link to='/'>
          <h3 style={{textAlign:'center', margin:'1.2rem'}}>Home</h3>
          </Link>
        </div>
        <footer className="socialIcons">
          <span style={{ color: "#3b5998" }}>
          <a href={'https://' + fb} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
          </span>
          <span style={{ color: "#ff0000" }}>
          <a href={'https://' + youtube} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutubeSquare} /></a>
          </span>
          <span style={{ color: "#1da1f2" }}>
            <a href={'https://' + twitter} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitterSquare} /></a>
          </span> 
        </footer>
      </div>  
    </div>
    );
  }
  return (
    <div>
      {renderDetails( teamBadge, teamName , teamFounded, teamCountry, teamSportType,teamGender, teamFb, teamYoutube, teamTwitter)
      }
      
    </div>
  );
};

export default DetailsExplore;
