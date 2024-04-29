import React, { useState } from "react";
import NavbarCompra from "../components/NavbarCompra";
import MyFooter from "../components/MyFooter";
import DetalhesPedido from "../components/DetalhesPedido";
import ResumoPedido from "../components/ResumoPedido";
import Pagamentos from "../components/Pagamentos";
import { Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// adicionar o MyFooter na versão final

function PagamentoPage() {
    const navigate = useNavigate();
    const [selectedPaying, setSelectedPaying] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(''); 
    const [selectedBilling, setSelectedBilling] = useState('');

    const checkIfChecked = () => {
        console.log(selectedPaying !== '');
        console.log(phoneNumber) !== '';
        console.log(selectedBilling !== '') ;
        return selectedPaying !== '' && selectedBilling !== '';
    }

    const handleClick = (event) => {
        if (!checkIfChecked()) {
            event.preventDefault();
            alert("Por favor, preencha todos os campos.\nCampos que faltam:" + (selectedBilling === '' ? "\n\t Dados de faturação" : "") + (selectedPaying === '' ? "\n\t Método de pagamento" : ""));
        } else {
            navigate("/confirmacao");
        }
    };

    return (
        <>
            <NavbarCompra currentStep="Pagamento"/>
            <Row>
                <Col md={9}>
                    <Pagamentos selectedPaying={selectedPaying} setSelectedPaying={setSelectedPaying} 
                                phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} 
                                selectedBilling={selectedBilling} setSelectedBilling={setSelectedBilling} />
                    <Row className="p-3">
                        <Col>
                            <Link to="/checkout">                       
                                <Button variant="primary" size="lg" block="true"><FontAwesomeIcon icon={faArrowLeft} /> Retroceder</Button>
                            </Link>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <Button variant="success" size="lg" block="true" onClick={handleClick} >Pagar <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <ResumoPedido />
                    <DetalhesPedido />
                </Col>
            </Row>  
            <MyFooter /> 
        </>
    );
}

export default PagamentoPage;