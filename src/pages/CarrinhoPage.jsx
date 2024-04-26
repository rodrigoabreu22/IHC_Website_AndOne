import React from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";

function CarrinhoPage() {
    return (
        <>
        <MyNavbar activeID={8} />
        <h1>Carrinho</h1>
        <MyFooter />
        </>
    );
}

export default CarrinhoPage;