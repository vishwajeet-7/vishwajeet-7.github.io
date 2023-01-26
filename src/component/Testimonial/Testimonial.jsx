import React from 'react'
import './Testimonial.css'
import { Swiper,SwiperSlide } from 'swiper/react'
import profilePic1 from '../../images/spotifyHome.JPG';
import profilePic2 from '../../images/spotifyHome.JPG';
import profilePic3 from '../../images/spotifyHome.JPG';
import profilePic4 from '../../images/spotifyHome.JPG';
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonial = () => {
    const clients = [
        {
            image:profilePic1,
            title:"Shopify-Clone",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            tech_stack: "HTML, CSS, Javascript,Local Storage,API",
            diployed: "https://ritikraj07.github.io/Project_Spotify.com/HTML/index.html"
        },
        {
            image:profilePic1,
            title:"Shopify-Clone",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            tech_stack: "HTML, CSS, Javascript,Local Storage,API",
            diployed: "https://ritikraj07.github.io/Project_Spotify.com/HTML/index.html"
        },
        {
            image:profilePic1,
            title:"Shopify-Clone",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            tech_stack: "HTML, CSS, Javascript,Local Storage,API",
            github_link: "https://github.com/ritikraj07/Project_Spotify.com",
            diployed: "https://ritikraj07.github.io/Project_Spotify.com/HTML/index.html"
        },
        {
            image:profilePic1,
            title:"Shopify-Clone",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            tech_stack: "HTML, CSS, Javascript,Local Storage,API",
            diployed: "https://ritikraj07.github.io/Project_Spotify.com/HTML/index.html"
        }
    ]
  return (
    <div id="projects">
      <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me.</span>
            <div className='blur t-burl' style={{background: "var(--purple)"}}></div>
            <div className='blur t-burl' style={{background: "skyblue"}}></div>
        </div>
        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
            {
                clients.map((ele,index)=>{
                    return (
                        <SwiperSlide key={index}>
                            <div className='testimonial'
                            class="project-card">
                                <img src={ele.image} alt="" />
                                <h1>{ele.title}</h1>
                                <span><b>Description:</b> {ele.description}</span>
                                <span><b>Tech Stack:</b>{ele.tech_stack}</span>
                                <a href={ele.github_link} target="_blank" class="project-github-link">
                                <span><b>Github Link:</b> {ele.github_link}</span>
                                </a>
                                <a href={ele.diployed} target="_blank" class="project-github-link">
                                <span><b>Deployed:</b> {ele.diployed}</span>
                                </a>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial
