import { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import './VerticalFilterBar.css';

function VerticalFilterBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch
            </Button>

            <Offcanvas show={show} onHide={handleClose} className='no-backdrop'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                    <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default VerticalFilterBar;