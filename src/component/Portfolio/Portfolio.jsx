import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Sidebar from '../../images/sidebar.png';
import Ecommerce from '../../images/ecommerce.png';
import HOC from '../../images/hoc.png';
import MusicApp from '../../images/musicapp.png';
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id="skills">
      <span style={{color: darkMode ? 'white' : ''}}>My skills</span>
      <span>Frontend and Backend</span>
      {/* slider */}
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
            <img src="https://www.bitdegree.org/learn/storage/media/images/203b0fb7-ae46-4ba7-a69e-8cc445b89db2.o.jpg" alt="" class="skills-card-img"/>
            <h1 class="skills-card-name">HTML</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhwypxz7pIRAJ2zRk_3iXwH2n2ZNifpwAtg&usqp=CAU" alt="" class="skills-card-img"/>
            <h1 class="skills-card-name">CSS</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVy5CBdj9NUMIcRI7q7JafnO5zVUJl09hhrQ&usqp=CAU" alt="" class="skills-card-img"/>
            <h1 class="skills-card-name">Javascript</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124" alt="" class="skills-card-img"/>
            <h1 class="skills-card-name">React</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
