import React from 'react';
import Navigations from "./Navigations";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Courses from "./Courses";
import Footer from "./../../layout/Footer";

const HomePage = () => {
    return (
        <>
            <Navigations />
            <Home />
            <AboutUs />    
            <Courses/>
            <ContactUs />
            <Footer />
        </>
    );
}
 
export default HomePage;