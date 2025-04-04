import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { TagMaker } from "./tag-maker";
import { ImageSlider } from './image-slider';

export function ProjectModal({name, images, showModal, handleClose, tagList}) {
  return (
    <>
      <Dialog open={showModal} onClose={() => handleClose()} className="modal-overlay">
        <div className="modal-content">
          <DialogPanel className="dialog-panel">
          <ImageSlider imageURL={images}></ImageSlider>
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