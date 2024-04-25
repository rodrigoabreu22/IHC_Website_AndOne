import React from "react";
import Navbar from "../components/MyNavbar";

function HelpPage() {
  return (
    <>
        <Navbar />
        <div className="text-center">
            <h1 className="p-4">Help Page</h1>
            <h5>This site is self explanatory!!!</h5>
        </div>
    </>
  );
}

export default HelpPage;