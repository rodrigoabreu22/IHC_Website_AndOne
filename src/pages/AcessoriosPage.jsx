import React from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";

function AcessoriosPage() {
    return (
        <>
        <MyNavbar activeID={3} />
        <h1>Acessorios</h1>
        <MyFooter />
        </>
    );
}

export default AcessoriosPage;