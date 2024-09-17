import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons"
import { ProjectList } from "../../components/project-list"
import config from '../../config.json'

export default function About() {
    return (
        <div id="about-container">
            <div id="portrait-container">
            <img id="profile-image" src={config.database.profileImageLink}></img>
            </div>
        <div id="aboutme-text">
            <h2>{config.database.aboutText}</h2>
        </div>
        <div id="work-history">
            <h1>My Projects</h1>
            <div id="project-list">
                <ProjectList />
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
