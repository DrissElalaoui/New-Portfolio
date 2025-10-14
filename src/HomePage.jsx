// import Animation Scroll
import 'aos/dist/aos.css';
import AOS from 'aos';



import { useEffect } from 'react';


import personne from './img/personne.png'
export default function HomePage() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className='homme' id="homme" style={{
            alignItems: "center",
            justifyContent: 'center',
            padding: "40px",
            maxWidth: '1200px',
            margin: '0 auto 50px',
            height: '100vh'
        }}>
            <div data-aos="fade-right" data-aos-duration="1000" className="leftContent">
                <h1>Hello I'm <span>Driss</span> Elalaoui</h1>
                <h2><span>Front-End Developer</span></h2>
                <p style={{
                    margin: "15px 0",
                }}>A Front-End Developer builds the visible and interactive parts of a website or web app.</p>
                <button className='button' ><a style={{ textDecoration: 'none' }} href="#AboutMe">About Me</a></button>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className="RightContent">
                <img src={personne} alt="" />
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className='linkHomePage'>
                <a style={{ color: 'blue' }} href='https://www.facebook.com/?locale=ar_FR' target='_blank'><i className="fa-brands fa-facebook"></i></a>
                <a href="https://github.com/DrissElalaoui" target='_blank' style={{ color: '#000' }}><i className="fa-brands fa-github"></i></a>
                <a href="" style={{ color: 'green' }}><i className="fa-brands fa-whatsapp"></i></a>
                <a style={{ color: 'blue' }} href="https://www.linkedin.com/notifications/?filter=all" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                <a href="" style={{ color: 'orange' }}><i className="fa-solid fa-envelope"></i></a>
            </div>
        </div>
    )
}
