import CardSkilles from "./CardSkilles"
        
import {  } from 'swiper/modules';
// Import Swiper React components
// import Swiper core and required modules
import {EffectCoverflow, Autoplay , Virtual, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/bundle';


export default function Skilles() {
        const listeSkilles = [
                {
                    key: '1',
                    lien: 'https://www.w3schools.com/html/',
                    content: 'It structures the content of websites',
                    title: 'Html5',
                    iconSkilles: 'fa-brands fa-html5',
                    colorIcon: '#FF9013',
                },
                {
                    key: '2',
                    lien: 'https://www.w3schools.com/css/',
                    content: 'It styles the content of websites',
                    title: 'Css3',
                    iconSkilles: 'fa-brands fa-css3',
                    colorIcon: '#0046FF',
                },
                {
                    key: '3',
                    lien: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
                    content: 'It designs responsive and interactive websites',
                    title: 'Bootstrap',
                    iconSkilles: 'fa-brands fa-bootstrap',
                    colorIcon: '#05339C',
                },
                {
                    key: '4',
                    lien: 'https://www.w3schools.com/js/',
                    content: 'It makes websites dynamic and interactive',
                    title: 'JavaScript',
                    iconSkilles: 'fa-brands fa-square-js',
                    colorIcon: '#FFE100',
                },
                {
                    key: '5',
                    lien: 'https://react.dev/learn',
                    content: 'It builds interactive user interface components',
                    title: 'React Js',
                    iconSkilles: 'fa-brands fa-react',
                    colorIcon: '#468A9A',
                },
                {
                    key: '6',
                    lien: 'https://git-scm.com/learn',
                    content: 'It manages and tracks code changes',
                    title: 'Git',
                    iconSkilles: 'fa-brands fa-git',
                    colorIcon: '#7A7A73',
                },
                {
                    key: '7',
                    lien: 'https://docs.github.com/en/get-started/start-your-journey',
                    content: 'It hosts and manages Git repositories',
                    title: 'Github',
                    iconSkilles: 'fa-brands fa-github',
                    colorIcon: '#000',
                },
                {
                    key: '8',
                    lien: 'https://tailwindcss.com/docs/installation/using-vite',
                    content: 'It styles websites with utility classes',
                    title: 'Tailwind',
                    iconSkilles: 'fa-brands fa-react',
                    colorIcon: '#468A9A',
                },
                {
                    key: '9',
                    lien: 'https://mui.com/material-ui/getting-started/',
                    content: 'It provides prebuilt React UI components',
                    title: 'MUI',
                    iconSkilles: 'fa-brands fa-react',
                    colorIcon: '#8C1007',
                },
                {
                    key: '10',
                    lien: 'https://mui.com/material-ui/getting-started/',
                    content: 'It provides prebuilt React UI components',
                    title: 'MUI',
                    iconSkilles: 'fa-brands fa-react',
                    colorIcon: '#8C1007',
                },
            ]
   
    
    return (
    
        <div 
            id='Skilles' style={{  
                maxWidth: '1200px',
                margin: "0 auto 50px",
                padding: '40px'
        }}>
            <div style={{textAlign: 'center' , marginBottom: '20px'}}>
                <h1>Skilles & <span>Abbility</span></h1>
            </div>
                <Swiper
            // install Swiper modules
                modules={[ Autoplay ,Virtual, Navigation, Pagination]}
                  breakpoints={{
                    320: { slidesPerView: 1 }, // sur mobile
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 } // sur grand écran
                }}
                // loop={true}
                pagination={{ clickable: true }}
                virtual
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                >
          
        <div style={{
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            // flexWrap:'wrap',
        }}>
            {
            listeSkilles.map((para) => {
            return (
                <SwiperSlide style={{backgroundColor: 'red'}}>
                    <CardSkilles key={para.key}  lien={para.lien} content= {para.content} title = {para.title} iconSkilles= {para.iconSkilles} colorIcon = {para.colorIcon}/>
                </SwiperSlide>
            ) 
            })
            }
        </div>
        </Swiper>
    </div>
    )
}
