import config from '../config.json';
import { ProjectModal } from "./modal";
import { useState } from 'react'

export function GalleryBuilder({key, id, thumbnail, name, images, description, tagList}) {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => {setShowModal(false)};
        return (
            <>
                <div key={key} id={id} className="gallery-card">
                    <img className="project-thumbnail" src={thumbnail}></img>
                    <h2 className="project-header">{name}<br></br><div className="project-subheader"> role details </div></h2>
                    <p className="project-details" style={{ whiteSpace: 'pre-line' }}>{description}</p>
                    <div className="modal-holder">
                    <button className="details-button" onClick={() => setShowModal(true)}>Details</button>
                    {showModal && <ProjectModal name={name} showModal={showModal} setShowModal={setShowModal} images={images} handleClose={handleClose} tagList={tagList}></ProjectModal>}
                    </div>
                </div>
                </>
            )
}