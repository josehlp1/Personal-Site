
import React from 'react';
import ScrollToTop from "react-scroll-to-top";

import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import Description_home from '../../components/Description_home'
import Git_projects from '../../components/Git_projects';
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

import './style.css';


const Home = () => {
    return (
        <>
          <Header />
          <Presentation />
          <Description_home />
          <Git_projects />
          <Contact />
          <ScrollToTop smooth color="#6f00ff" />
          <Footer />
        </>
    );
}

export default Home;