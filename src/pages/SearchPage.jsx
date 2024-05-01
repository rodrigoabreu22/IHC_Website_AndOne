import React from "react";
import Navbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";
import SearchSearch from "../components/SearchSearch";


function SearchPage() {
    return (
        <>
            <div className="parent-container">
                <div className="navbar">
                    <Navbar activeID={1}/>
                </div>
                <div className="shoe-search" style={{ minHeight: '55vh' }}>
                    <SearchSearch />
                </div>
                <div className="footer">
                    <MyFooter />
                </div>
            </div>
        </>
    );
}

export default SearchPage;