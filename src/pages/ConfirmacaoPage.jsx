import React, { useState, useEffect } from "react";
import NavbarCompra from "../components/NavbarCompra";
import MyFooter from "../components/MyFooter";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import jsPDF from "jspdf";
import logoDataURL from "../config";
import autoTable from 'jspdf-autotable';
import ProductList from '../data/Products.json';

function ConfirmacaoPage() {
    const encomenda = JSON.parse(localStorage.getItem('temp'));
    const [id, setId] = useState(-1);
    const [cartProds, setCartProducts] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
    
    useEffect(() => {
        let initialId = localStorage.getItem("id");
        if (!initialId) {
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            const usedIds = orders.map(order => order.id);
            do {
                initialId = Math.floor(Math.random() * 10000) + 1;
            } while (usedIds.includes(initialId));
            localStorage.setItem("id", initialId);
        }
        setId(initialId);
    }, []);  // This useEffect will run only once when the component mounts

    const leavingPage = () => {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        localStorage.setItem('orders', JSON.stringify([...orders, { id: id, ...encomenda }]));
        localStorage.removeItem('cart');
        localStorage.removeItem('temp');
        localStorage.removeItem('id');
    };

    const getProductByIdAndCategory = (id, category) => {
        const product = ProductList[category].find(product => product.id === id);
        console.log("product in function", product);
        return product;
    };

    const generatePDF = async (event) => {
        event.preventDefault();
        const doc = new jsPDF();
    
        // Logo of the website (replace 'logoDataURL' with the Data URL of your image)
        doc.addImage(logoDataURL, 'PNG', 10, 5, 25, 20);
    
        // Date of purchase
        const date = new Date();
        doc.text(date.toLocaleDateString(), 80, 20);
    
        // Text "Comprovativo AndOne"
        doc.text('Comprovativo AndOne', 150, 20);
    
        // Horizontal bar
        doc.setLineWidth(0.5);
        doc.line(10, 30, 200, 30);
    
        // Details of the order
        doc.text(`Número da encomenda: ${id}`, 10, 40);
        doc.text(`Loja: ${encomenda['loja']}`, 10, 50);
        doc.text(`Método de pagamento: ${encomenda['pagamento']}`, 10, 60);
    
        // Items in the order
        const artigosArray = JSON.parse(encomenda["artigos"]);

        // Prepare the data for the table
        const data = artigosArray.map(item => {
            const product = getProductByIdAndCategory(item.id, item.category);
            return {
                product: product.name,
                size: item.size,
                quantity: item.quantity,
                price: product.price,
                total: product.price * item.quantity
            };
        });

        // Calculate the total price
        const totalPrice = data.reduce((total, item) => total + item.total, 0);

        // Add the table to the PDF
        doc.autoTable({
            head: [['Product', 'Size', 'Quantity', 'Price', 'Total']],
            body: [
                ...data.map(item => [item.product, item.size, item.quantity, item.price, item.total]),
                ['Total', '', '', '', totalPrice]
            ],
            startY: 70
        });

        doc.save('order_&1_' + id + '.pdf');
    };
    return (
        <>
            <NavbarCompra currentStep="Confirmação"/>
            <div className="text-center p-3" style={{ minHeight: '55vh' }}>
                <h1>Encomenda efetuada com sucesso!</h1>
                <Row className="p-5">
                    <Col md={3}></Col>
                    <Col md={6}>
                        <div className="container p-3" style={{ backgroundColor: 'gray', width: '100%' }}> 
                            <Row>
                                <h2>Detalhes da encomenda</h2>
                                <p><strong>Número da encomenda: {id}</strong></p>
                                <p><strong>Loja:</strong> {encomenda['loja']}</p>
                                <p><strong>Método de pagamento:</strong> {encomenda['pagamento']}</p>

                                {encomenda['pagamento'] === 'Pagamento em Loja' &&
                                    <p><strong>Montante:</strong> {encomenda['total']}</p>}

                                {encomenda['pagamento'] === 'MBWay' &&
                                    <>
                                        <p style={{ margin: 0 }}><strong>Telefone:</strong> {encomenda['telefone']}</p>
                                        <p><strong>Montante:</strong> {encomenda['total']}</p>
                                    </>}

                                {encomenda['pagamento'] === 'Multibanco' &&  
                                    (<>
                                        <p style={{ margin: 0 }}><strong>Entidade:</strong> 12345</p>
                                        <p style={{ margin: 0 }}><strong>Referência:</strong> 123 456 789</p>
                                        <p><strong>Montante:</strong> {encomenda['total']}</p>
                                    </>)}

                                <p><strong>Dados de faturação:</strong> {encomenda['faturacao']}</p>
                                <p><strong>Data: </strong>{encomenda['data']}</p>
                                <div style={{textAlign: "center"}}><Button variant='danger' style={{width: "20%"}} onClick={generatePDF}>Download PDF</Button></div>
                            </Row>
                        </div>
                    </Col>
                    <Col md={3}></Col>
                </Row>
                <Link to="/">
                    <Button variant="success" size="lg" block="true" onClick={leavingPage}>
                        Voltar à página inicial
                    </Button>

                    
                </Link>
            </div>
            <MyFooter />
        </>
    );
}

export default ConfirmacaoPage;