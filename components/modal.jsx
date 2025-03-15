import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { TagMaker } from "./tag-maker";

export function ProjectModal({name, testShow, showModal, handleClose, tagList}) {
  return (
    <>
      <Dialog open={showModal} onClose={() => handleClose()} className="modal-overlay">
        <div className="modal-content">
          <div id="image-pane">
            some stuff
          </div>
          <DialogPanel className="dialog-panel">
            <DialogTitle className="font-bold">{name}</DialogTitle>
            <Description>This is where the info goes, below I might put tags instead of on project tab</Description>
            <TagMaker tags={tagList}></TagMaker>
            <div className="close-button">
              <button onClick={() => handleClose()}>Close</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}