import React from 'react';
import { Link } from 'react-router-dom';

import profile_photo from '../../images/profile_photo.png';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProgressBar from "@ramonak/react-progress-bar";

  
  const Presentation = () => {
    return (
        <>
            <div id="presentation" className="container">
                <div className="row">
                    <div className="col-sm-7 row profile_details">
                        <div className="col-sm-4">
                            <div className="img_profile">
                                <img src={profile_photo} alt="Imagem de Perfil"></img>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h2>José Henrique Lenz Pellet</h2>
                            <p>Idade: 20 anos</p>
                            <p>Web Developer</p>
                            <p>Timbó - SC</p>
                        </div>
                    </div>
                    <div className="col-sm-5 progress_bars">
                        <div>
                            <h2>Habilidades</h2>
                        </div>

                        <div className="progress_1">
                            <h3>PHP</h3>
                            <ProgressBar  bgcolor="#6a1bR9a" variant="danger" completed={80} />
                        </div>

                        <div className="progress_1">
                            <h3>HTML</h3>
                            <ProgressBar  bgcolor="#6a1b9a" variant="danger" completed={70} />
                        </div>

                        <div className="progress_1">
                            <h3>CSS</h3>
                            <ProgressBar  bgcolor="#6a1b9a" variant="danger" completed={70} />
                        </div>
                        <div className="progress_2">
                            <h3>Python</h3>
                            <ProgressBar completed={40} />
                        </div>
                        <div className="progress_2">
                            <h3>React JS</h3>
                            <ProgressBar completed={30} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Presentation;
