import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { TagMaker } from "./tag-maker";
import config from '../config.json';

export function ProjectModal(project, testShow, setShowModal, handleClose) {
  let [isOpen, setIsOpen] = useState(false);
  console.log(`at Modal level: ${testShow}`)
  // let [thisProject, setThisProject] = useState(defaultProject);
  return (
    <div>
      <div className='modal-overlay'>
        <div className='modal-content'>
          <div className="image-pane">
            some stuff
          </div>
          <div className='dialog-panel'>
            <div className='dialog-title'></div>
            <div id="dialog-description"></div>
            {/* <TagMaker tags={project.tagList}></TagMaker> */}
            <div className='close-button'>
              <button onClick={() => setIsOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <Dialog open={testShow} onClose={() => setIsOpen(false)} className="modal-overlay">
    //     <div className="modal-content">
    //       <div id="image-pane">
    //         some stuff
    //       </div>
    //       <DialogPanel className="dialog-panel">
    //         <DialogTitle className="font-bold">{project.name}</DialogTitle>
    //         <Description>This is where the info goes, below I might put tags instead of on project tab</Description>
    //         <TagMaker tags={project.tagList}></TagMaker>
    //         <div className="close-button">
    //           <button onClick={() => setIsOpen(false)}>Close</button>
    //         </div>
    //       </DialogPanel>
    //     </div>
    //   </Dialog>
    // </>
  )
}