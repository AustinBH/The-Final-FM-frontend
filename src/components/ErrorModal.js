import React, {Fragment, useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

const ErrorModal = props => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Fragment>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} animation={false} onHide={handleClose} className="error-modal">
          <Modal.Header closeButton>
            <Modal.Title>Error Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.error}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </Fragment>
    )
}
export default ErrorModal

