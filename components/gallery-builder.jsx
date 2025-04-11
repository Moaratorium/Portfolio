import config from '../config.json';
import { ProjectModal } from "./modal";
import { useState } from 'react'

export function GalleryBuilder({id, thumbnail, name, images, description, tagList, blurb}) {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => {setShowModal(false)};
        return (
            <>
                <div key={id} id={id} className="gallery-card">
                    <div className="project-info-container">
                    <img className="project-thumbnail" src={thumbnail}></img>
                    <h2 className="project-header">{name}</h2>
                    <p className="project-details" style={{ whiteSpace: 'pre-line' }}>{description}</p>
                    </div>
                    <div className="modal-holder">
                    <button className="details-button" onClick={() => setShowModal(true)}>Details</button>
                    {showModal && <ProjectModal name={name} showModal={showModal} setShowModal={setShowModal} images={images} handleClose={handleClose} tagList={tagList} blurb={blurb}></ProjectModal>}
                    </div>
                </div>
                </>
            )
}