import React from "react";
import Navbar from "../components/MyNavbar";
import Footer from "../components/MyFooter";

function HelpPage() {
  return (
    <>
        <Navbar />
        <div className="text-center" style={{ minHeight: '55vh' }}>
            <h1 className="p-4">Help Page</h1>
            <h5>This site is self explanatory!!!</h5>
        </div>
        <Footer />
    </>
  );
}

export default HelpPage;