import React from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";

function MaterialPage() {
    return (
        <>
        <MyNavbar activeID={5} />
        <h1 style={{ minHeight: '55vh' }}>Material</h1>
        <MyFooter />
        </>
    );
}

export default MaterialPage;