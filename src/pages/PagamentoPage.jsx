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

function PagamentoPage() {
    const navigate = useNavigate();
    const [selectedPaying, setSelectedPaying] = useState(localStorage.getItem('temp') ? JSON.parse(localStorage.getItem('temp'))['pagamento'] : '');
    const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('temp') ? JSON.parse(localStorage.getItem('temp'))['telefone'] : ''); 
    const [selectedBilling, setSelectedBilling] = useState(localStorage.getItem('temp') ? JSON.parse(localStorage.getItem('temp'))['faturacao'] : '');

    const checkIfError = () => {
        console.log(selectedPaying);
        console.log(phoneNumber);
        console.log(selectedBilling); 
        console.log(selectedPaying == '');
        console.log((selectedPaying === 'MBWay' || phoneNumber === ''));
        console.log(selectedBilling == '') ;
        return selectedPaying === undefined || selectedBilling === undefined || (selectedPaying === 'MBWay' && phoneNumber === undefined);
    }

    const handleClick = (event) => {
        if (checkIfError()) {
            event.preventDefault();
            alert("Por favor, preencha todos os campos.\nCampos que faltam:" + (selectedBilling === undefined ? "\n\t Dados de faturação" : "") + (selectedPaying === undefined ? "\n\t Método de pagamento" : "") + (selectedPaying === 'MBWay' && phoneNumber === undefined ? "\n\t Telefone" : ""));
        } else {
            const temp = (localStorage.getItem('temp') ? JSON.parse(localStorage.getItem('temp')) : {});
            temp['pagamento'] = selectedPaying;
            temp['telefone'] = phoneNumber;
            temp['faturacao'] = selectedBilling;
            temp['artigos'] = localStorage.getItem('cart');
            temp['data'] = new Date().toLocaleDateString();
            localStorage.setItem('temp', JSON.stringify(temp));
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
                                <Button variant="danger" size="lg" block="true"><FontAwesomeIcon icon={faArrowLeft} /> Retroceder</Button>
                            </Link>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <Button variant="dark" size="lg" block="true" onClick={handleClick} >Pagar <FontAwesomeIcon icon={faArrowRight} /></Button>
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