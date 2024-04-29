import React from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";

function AcessoriosPage() {
    return (
        <>
        <MyNavbar activeID={3} />
        <h1 style={{ minHeight: '55vh' }}>Acessorios</h1>
        <MyFooter />
        </>
    );
}

export default AcessoriosPage;