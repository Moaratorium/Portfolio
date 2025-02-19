import config from "../../config.json"

export default function Projects() {
    return (
        <div id="project-gallery">
            <img id="test-image" src={config.datastore.profileImageLink}></img>
        <div id="test-text" style={{ whiteSpace: 'break-spaces'}}>
            <p>{config.datastore.aboutText}</p>
        </div>
        <div id="work-history">
            <div id="project-list">
                leedle
                </div>
                <div className="footer">
                </div>
        </div>
        </div>
    )
};