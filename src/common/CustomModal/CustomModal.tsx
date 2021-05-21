import React from 'react'
// Material UI Components
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
//Styled components ref
import { useModalStyles } from './CustomModal.styles'

interface CustomModalProps {
  modalOpen: boolean
  setModalOpen: any
  modalTitle: string
  modalMessage: string
  modalFunction: any
}

function CustomModal({
  modalOpen,
  setModalOpen,
  modalTitle,
  modalMessage,
  modalFunction,
}: CustomModalProps) {
  //Material Ui style classes
  const classes = useModalStyles()
  // MOdal Body
  const modalBody = (
    <div className={classes.modalWrapper}>
      <div className={classes.contentWrapper}>
        <h2 className={classes.pageTitle}>{modalTitle}</h2>
        <p className={classes.pageText}>{modalMessage}</p>
        <div className={classes.modalButtonWrapper}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              modalFunction()
              setModalOpen(false)
            }}
          >
            OK
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setModalOpen(false)
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
  return (
    <Modal
      open={modalOpen}
      onClose={() => {
        setModalOpen(false)
      }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {modalBody}
    </Modal>
  )
}

export default CustomModal
