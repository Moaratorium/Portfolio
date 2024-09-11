import 'dotenv-json';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons"

export default function About() {
    const blurb = {
        text: `${import.meta.env.VITE_aboutme}`,
        name: `${import.meta.env.VITE_name}`,
    };
    // define imported projects
    return (
        <div id="about-container">
            <div id="portrait-container">
            <img id="profile-image" src={import.meta.env.VITE_profile_image}></img>
            </div>
        <div id="aboutme-text">
            <h2>{blurb.text}</h2>
        </div>
        <div id="work-history">
            <h1>My Projects</h1>
            <div id="project-list">
                <p></p>
                </div>
                <div id="resume-link">
                <Link to={'../pdf-view'}>Link to Full Résumé<span> </span>
                <FontAwesomeIcon icon={faArrowTrendUp} />
                </Link>
                </div>
        </div>
        </div>
    )
};
