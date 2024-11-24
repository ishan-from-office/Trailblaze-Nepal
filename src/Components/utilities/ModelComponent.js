import { formControlLabelClasses } from '@mui/material'
import React, { useState } from 'react'
import Modal from 'react-modal'

const ModelComponent = ({ isOpen }) => {

  return (
    <>
      (
      <div>
        <Modal
          className="custom_modal"
          overlayClassName="custom_overlay"
          //   onRequestClose={openModal}
          contentLabel="Tiny nomadic modal popover"
          isOpen={isOpen}
        >
          <div>React modal dialog component.</div>
          <button>Close </button>
        </Modal>
      </div>
      );
    </>
  )
}

export default ModelComponent
