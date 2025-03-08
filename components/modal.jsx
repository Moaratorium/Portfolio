import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import config from '../config.json';

export function ProjectModal(item) {
  let [isOpen, setIsOpen] = useState(false);
  let [thisProject, setThisProject] = useState({});
  function openModal() {
    setIsOpen(true)
    setThisProject(item)
  }
  return (
    <>
      <button onClick={() => openModal()}>Details</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="modal-overlay">
        <div className="modal-content">
          <DialogPanel className="dialog-panel">
            <DialogTitle className="font-bold">{thisProject.name}</DialogTitle>
            <Description>This will permanently deactivate your account</Description>
            <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Close</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}