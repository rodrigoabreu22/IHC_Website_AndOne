import React from "react";
import Navbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";
import ShoeSearch from "../components/ShoeSearch";
import './SapatilhasPage.css';

function SapatilhasPage() {
    return (
        <>
            <div className="parent-container">
                <div className="navbar">
                    <Navbar activeID={1}/>
                </div>
                <div className="shoe-search">
                    <ShoeSearch />
                </div>
                <div className="footer">
                    <MyFooter />
                </div>
            </div>
        </>
    );
}

export default SapatilhasPage;