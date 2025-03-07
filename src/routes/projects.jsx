import config from "../../config.json"
import { GalleryBuilder } from "../../components/gallery-builder"

export default function Projects() {
    return (
        <div id="project-gallery">
            <div id="work-history">
                        <div id="project-list">
                            <GalleryBuilder />
                            </div>
                            <div className="footer">
                            </div>
                    </div>
        <div id="test-text" style={{ whiteSpace: 'break-spaces'}}>
            <p>This is a test</p>
        </div>
        </div>
    )
};