import React from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";

function FavoritosPage() {
    return (
        <>
        <MyNavbar activeID={7} />
        <h1>Favoritos</h1>
        <MyFooter />
        </>
    );
}

export default FavoritosPage;