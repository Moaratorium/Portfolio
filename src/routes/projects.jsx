import config from "../../config.json"
import { GalleryBuilder } from "../../components/gallery-builder"
import { useState, Fragment } from 'react';

export default function Projects() {
    const galleryList = config.datastore.gallery;
    const [projects, updateProjects] = useState(galleryList);
    let counter = 0;
    return ( 
    <div id="gallery-view">  
    {projects.map(project => {
        counter++;
            return (
                <Fragment key={counter}>
                <div className="gallery-container">
                                <GalleryBuilder 
                                    id={project.id} 
                                    thumbnail={project.thumbnail} 
                                    name={project.name}
                                    images={project.images} 
                                    description={project.description} 
                                    tagList={project.tagList}
                                    blurb={project.blurb}
                                    />
                                </div>
                                </Fragment>
            )
                            })}
                            </div>
    )
};