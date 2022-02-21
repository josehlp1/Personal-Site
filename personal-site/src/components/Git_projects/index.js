import React, { useEffect, useState } from 'react';
import api from "../../services/api"
import './style.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FaGithub } from 'react-icons/fa';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import git_project from '../../images/git_project.png';

const Description_home = () => {

  const [user, setUser] = useState();
  useEffect(() => {
    api
      .get("users/josehlp1")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const [repos, setRepos] = useState([]);
  useEffect(() => {
    api
      .get("users/josehlp1/repos")
      .then((response) => setRepos(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


  SwiperCore.use([Autoplay]);

  return (

    <div id="git_projects">
      <div className="container">
        <div className="row">
        <h2>Meus Projetos</h2>
          <div className="col-sm-6 git-details">
            <div>
              <h3>GitHub</h3>
              <p><label>Usuário:</label> {user?.login}</p>
              <p><label>Descrição:</label> {user?.bio}</p>
            </div>
          </div>
          <div className="col-sm-6">
            <img src={git_project} className="git_gif_project" alt="Projetos GIT"></img>
          </div>
        </div>
        <div className="git-projects">
          <Swiper
            autoplay={{ delay: 2000 }}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {
              repos.map(repos_Item => (
                <SwiperSlide>
                  <div className="git-card">
                    <p><FaGithub/></p>
                    {console.log(repos_Item)}
                    <p><a href={repos_Item.url.replace('repos/', '').replace('api.', '')} target="_blank">{repos_Item.name}</a></p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div >
  );
}

export default Description_home;
