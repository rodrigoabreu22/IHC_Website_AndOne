import React from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";

function PerfilPage() {
    return (
        <>
        <MyNavbar activeID={6} />
        <h1>Perfil</h1>
        <MyFooter />
        </>
    );
}

export default PerfilPage;