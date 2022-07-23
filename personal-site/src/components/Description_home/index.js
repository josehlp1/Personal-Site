import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Description_home = () => {
    return (
        <>
            <div id="description_home">
                <div className="container">
                    <h2>Sobre Mim</h2>
                    <p>
                        Me chamo José Henrique, tenho 20 anos e sou programador beck-end a pouco mais de dois anos. Estou aprendendo Python e React Js o qual usei para fazer este site =).<br/>
                        Se quiser falar comigo use o formulário ou entre em minhas redes sociais abaixo que lhe responderei o quanto antes. Tchau tchau!
                    </p>
                </div>
            </div>
        </>
    );
}

export default Description_home;
