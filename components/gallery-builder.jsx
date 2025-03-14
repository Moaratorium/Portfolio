import { TagMaker } from "./tag-maker";
import config from '../config.json';
import { ProjectModal } from "./modal";
import { useState } from 'react'

export function GalleryBuilder() {
    const galleryList = config.datastore.gallery;
    return (
        galleryList.map(item => {
            return (
                <div key={item.id} id={item.id} className="gallery-container">
                    <img className="project-thumbnail" src={item.thumbnail}></img>
                    <h2 className="project-header">{item.name}<br></br><div className="project-subheader"> role details </div></h2>
                    <p className="project-details" style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                    <div className="modal-holder">
                    <ProjectModal project={item}></ProjectModal>
                    </div>
                </div>
            )
        })
    )
}