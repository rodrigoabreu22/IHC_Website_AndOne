import React from "react";
import Navbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";
import EquipamentosSearch from "../components/EquipamentosSearch";


function EquipamentosPage() {
    return (
        <>
            <div className="parent-container">
                <div className="navbar">
                    <Navbar activeID={2}/>
                </div>
                <div className="equipamentos-search" style={{ minHeight: '55vh' }}>
                    <EquipamentosSearch />
                </div>
                <div className="footer">
                    <MyFooter />
                </div>
            </div>
        </>
    );
}

export default EquipamentosPage;