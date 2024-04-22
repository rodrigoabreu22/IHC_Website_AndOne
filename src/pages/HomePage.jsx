import React from 'react';
import MyNavbar from '../components/MyNavbar';
import MyFooter from '../components/MyFooter';

function HomePage() {
    return (
        <>
            <header>
                <MyNavbar />
            </header>
            <MyFooter />
        </>
    )
}

export default HomePage;