import React from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";

function ConjuntosPage() {
    return (
        <>
        <MyNavbar activeID={4} />
        <h1>Conjuntos</h1>
        <MyFooter />
        </>
    );
}

export default ConjuntosPage;