import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const RemoveFavoriteModal = ({ show, onHide, onConfirm}) => {

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Remover dos favoritos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Tem a certeza que pretende remover este produto dos favoritos?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                <Button variant="primary" onClick={onConfirm}>Remover</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RemoveFavoriteModal;