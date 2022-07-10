import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import HTMLReactParser from "html-react-parser";
import { MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM } from "utilities/constants";

const ConfirmModal = (props) => {
  const { title, content, show, onAction } = props;

  return (
    <div>
      <Modal
        show={show}
        onHide={() => onAction("close")}
        backdrop="static" // when clicking out confirm modal cant close
        keyboard={false} // revoke ESC key close confirm modal
      >
        <Modal.Header closeButton>
          <Modal.Title className="h5">{HTMLReactParser(title)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{HTMLReactParser(content)}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => onAction(MODAL_ACTION_CLOSE)}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => onAction(MODAL_ACTION_CONFIRM)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
