
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import Description_home from '../../components/Description_home'
import Footer from '../../components/Footer'

import './style.css';


const Home = () => {
    return (
        <>
          <Header />
          <Presentation />
          <Description_home />
          <Footer />
        </>
    );
}

export default Home;