
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header'
import Presentation from '../../components/presentation'
import Footer from '../../components/Footer'

import './style.css';


const Home = () => {
    return (
        <>
          <Header />
          <Presentation />
          <Footer />
        </>
    );
}

export default Home;