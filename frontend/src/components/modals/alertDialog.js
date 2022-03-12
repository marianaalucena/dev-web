import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AlertDialog = ({ dialog, toggleDialog, handleDelete }) => {
  return (
    <Modal toggle={toggleDialog} isOpen={dialog} data-testid="modal">
      <ModalBody>
        <form>
          <div className="form-group">
            <h4>Tem certeza que deseja excluir a meta?</h4>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleDelete}>
          Sim
        </Button>{" "}
        <Button onClick={toggleDialog}>Não</Button>
      </ModalFooter>
    </Modal>
  );
};
export default AlertDialog;
