import React from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";

function ConjuntosPage() {
    return (
        <>
        <MyNavbar activeID={4} />
        <h1 style={{ minHeight: '55vh' }}>Conjuntos</h1>
        <MyFooter />
        </>
    );
}

export default ConjuntosPage;