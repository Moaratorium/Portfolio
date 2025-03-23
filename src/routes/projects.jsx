import config from "../../config.json"
import { GalleryBuilder } from "../../components/gallery-builder"
import { useState } from 'react';

export default function Projects() {
    const galleryList = config.datastore.gallery;
    const [projects, updateProjects] = useState(galleryList);
    let counter = 0;
    return ( 
    <div id="gallery-view">  
    {projects.map(project => {
        counter++;
            return (
                <>
                <div key={counter} className="gallery-container">
                                <GalleryBuilder key={counter} id={project.id} thumbnail={project.thumbnail} name={project.name} description={project.description} tagList={project.tagList}/>
                                </div>
                                </>
            )
                            })}
                            </div>
    )
};