import { TagMaker } from "./tag-maker";
import config from '../config.json';
import { ProjectModal } from "./modal";
import { useState } from 'react'

export function GalleryBuilder() {
    const galleryList = config.datastore.gallery;
    let [isOpen, setIsOpen] = useState(false)
    return (
        galleryList.map(item => {
            return (
                <div key={item.id} id={item.id}>
                    <img className="project-thumbnail" src={item.thumbnail}></img>
                    <h2 className="project-header">{item.name}<br></br><div className="project-subheader"> role details </div></h2>
                    <p className="project-details" style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                    <div className="tag-holder">
                    <TagMaker tags={item.tagList}/>
                    <ProjectModal item={item}></ProjectModal>
                    </div>
                </div>
            )
        })
    )
}