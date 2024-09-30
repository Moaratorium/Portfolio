import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons"
import { ProjectList } from "../../components/project-list"
import config from '../../config.json'

export default function About() {
    return (
        <div id="about-container">
            <div id="portrait-container">
            <img id="profile-image" src={config.datastore.profileImageLink}></img>
            </div>
        <div id="aboutme-text" style={{ whiteSpace: 'break-spaces'}}>
            <p>{config.datastore.aboutText}</p>
        </div>
        <div id="work-history">
            <div id="project-list">
                <ProjectList />
                </div>
                <div id="resume-link">
                <Link to={'../pdf-view'}>Resume PDF Link<span> </span>
                <FontAwesomeIcon icon={faArrowTrendUp} />
                </Link>
                </div>
        </div>
        </div>
    )
};
