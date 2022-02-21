import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <div id="contact">
                <div className="container">
                    <div className="row">
                        <h2>Contato</h2>
                        <div className="col-sm-6">
                            <form className="row contact-form" action="#">
                                <div className="col-sm-6">
                                    <input type="text" className="contact_name" placeholder="Nome"></input>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="contact_email" placeholder="E-mail"></input>
                                </div>
                                <div className="col-sm-12">
                                    <textarea className="contact_msg" placeholder="Mensagem"></textarea>
                                </div>
                                <div className="col-sm-12">
                                    <button className="btn-contact">Enviar</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-6 contact-list row">
                            <div className="contact-icon col-12">
                                <a href="https://github.com/josehlp1" target="blank"><FaGithub /> josehlp1</a>
                            </div>
                            <div className="contact-icon col-12">
                                <a href="https://www.linkedin.com/in/jos%C3%A9-henrique-lenz-pellet-904b02191/" target="blank"><FaLinkedin /> José Henrique Lenz Pellet</a>
                            </div>
                            <div className="contact-icon col-12">
                                <a href="https://www.instagram.com/josepellet/" target="blank"><FaInstagram /> josepellet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
