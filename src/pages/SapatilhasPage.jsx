import React from "react";
import Navbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";

function SapatilhasPage() {
    return (
        <>
            <Navbar activeID={1}/>
            <div className="text-center">
                <h1 className="p-4">Sapatilhas</h1>
                <h5>As melhores sapatilhas do mercado!!!</h5>
            </div>
            <MyFooter />
        </>
    );
}

export default SapatilhasPage;