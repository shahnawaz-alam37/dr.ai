import Features from '../components/Features';
import Hero from '../components/Hero';   
import Navbar from '../components/Navbar';
import React from 'react';

function Home () {
    return(
        <div>
            <Navbar />
            <Hero/>
            <Features />
        </div>
    )
}

export default Home;