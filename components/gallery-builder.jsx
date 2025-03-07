import { TagMaker } from "./tag-maker";
import config from '../config.json';

export function GalleryBuilder() {
    const galleryList = config.datastore.gallery;
    return (
        galleryList.map(item => {
            return (
                <div key={item.id} id={item.id}>
                    <h2 className="project-header">{item.name}<br></br><div className="project-subheader"> role details </div></h2>
                    <p className="project-details" style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                    <div className="tag-holder">
                    <TagMaker tags={item.tagList}/>
                    </div>
                </div>
            )
        })
    )
}