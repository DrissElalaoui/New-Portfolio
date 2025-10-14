// import Animation Scroll
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import {  useTheme } from "next-themes";

// fade-down
export default function NavBar() {
     const { theme, setTheme } = useTheme();
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div  data-aos="fade-down" className="navBar" style={{
            position: 'fixed',
            margin:'10px auto',
            padding: '8px 0',
            borderRadius: '50px',
            top: '0',
            zIndex: '999',
            width: '600px',
            alignItems: "center",
            justifyContent: 'center',   
            
        }}>
                <a href="homme">Home</a>
                <a href="#AboutMe">About</a>
                <a href="#Skilles">Skilles</a>
                <a href="#Services">Services</a>
                <a href="#Projects">Projects</a>
                <a href="#Contact">Contact</a>
                <a href="#Contributions">Contributions</a>
                <a href="#Footer">Footer</a>

                <button  onClick={ () => {setTheme(theme === "dark" ? "light" : "dark")}}  style={{width: '30px' , height: '30px' , borderRadius: '50%' , border: 'none'  ,  cursor: 'pointer'}}><i  className={ theme === "light" ? 'fa-solid fa-moon':'fa-solid fa-bolt' }></i></button>
                 </div>
    )
}
