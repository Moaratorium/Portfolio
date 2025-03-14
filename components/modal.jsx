import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { TagMaker } from "./tag-maker";
import config from '../config.json';

export function ProjectModal(project) {
  let galleryList = config.datastore.gallery;
  let defaultProject = galleryList[0];
  let [isOpen, setIsOpen] = useState(false);
  let [thisProject, setThisProject] = useState(defaultProject);
  function openModal(project) {
    setIsOpen(true)
    setThisProject(project)
  }
  return (
    <>
      <button className="details-button" onClick={() => openModal(thisProject)}>Details</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="modal-overlay">
        <div className="modal-content">
          <div id="image-pane">
            some stuff
          </div>
          <DialogPanel className="dialog-panel">
            <DialogTitle className="font-bold">{thisProject.name}</DialogTitle>
            <Description>This is where the info goes, below I might put tags instead of on project tab</Description>
            <TagMaker tags={thisProject.tagList}></TagMaker>
            <div className="close-button">
              <button onClick={() => setIsOpen(false)}>Close</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}