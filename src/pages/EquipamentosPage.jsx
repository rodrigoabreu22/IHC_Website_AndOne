import React from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";

function EquipamentosPage() {
    return (
        <>
        <MyNavbar activeID={2} />
        <h1>Equipamentos</h1>
        <MyFooter />
        </>
    );
}

export default EquipamentosPage;