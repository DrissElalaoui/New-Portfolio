import CardMyProjects from "./CardMyProjects";
import calculeAge from './img/calculeAge.png'
import prayerTimes from './img/PrayerTime.png'
import xo from './img/x-o.png'
import kagel from './img/kagel.png'
import fpo from './img/fpo.png'
import { useState } from "react";


export default function MyProjects() {
    const colHtml = '#F25912'
    const colCss = '#1055C9'
    const colJs = '#FFE100'
    const colReact = '#123458'
    const colTailwind = '#640D5F'
    const colBootstrap = 'blue'
    const tableProjects = [
        {
            key: '1',
            img: calculeAge,
            demo: 'https://drisselalaoui.github.io/CalculAge/',
            gtihubRep: 'https://github.com/DrissElalaoui/CalculAge',
            language: [
                {key: '1', lan: 'Html' , por: '10' ,col: colHtml},
                {key: '2', lan: 'Css' , por: '60' , col: colCss},
                {key: '3', lan: 'JavaScript' , por: '30' ,col: colJs},
            ],
        },
        {
            key: '2',
            img: prayerTimes,
            demo: 'https://drisselalaoui.github.io/PryerTimes/',
            gtihubRep: 'https://github.com/DrissElalaoui/CalculAge',
            language: [
                {key: '1', lan: 'Html' , por: '20' , col: colHtml},
                {key: '2', lan: 'Css' , por: '35' ,col: colCss},
                {key: '3', lan: 'JavaScript' , por: '45' ,col: colJs},
             ],
        },
        {
            key: '3',
            img: xo,
            demo: 'https://drisselalaoui.github.io/X-O/',
            gtihubRep: 'https://github.com/DrissElalaoui/X-O',
            language: [
                {key: '1', lan: 'Html' , por: '10' , col: colHtml},
                {key: '2', lan: 'Tailwind' , por: '20' , col: colTailwind},
                {key: '3', lan: 'JavaScript' , por: '70' ,col: colJs},
            ],
        },
        {
            key: '4',
            img: kagel,
            demo: 'https://drisselalaoui.github.io/X-O/faute',
            gtihubRep: 'https://github.com/DrissElalaoui/X-O',
            language: [
                {key: '1', lan: 'Html' , por: '15' , col: colHtml},
                {key: '2', lan: 'BootStrap' , por: '20' , col: colBootstrap},
                {key: '3', lan: 'JavaScript' , por: '65' , col: colJs},
            ],
        },
        {
            key: '5',
            img: fpo,
            demo: 'https://drisselalaoui.github.io/X-O/faute',
            gtihubRep: 'https://github.com/DrissElalaoui/X-O',
            language: [
                {key: '1', lan: 'Html' , por: '90' , col: colHtml},
                {key: '2', lan: 'Tailwind' , por: '5' , col: colTailwind},
                {key: '3', lan: 'React-Js' , por: '5' , col: colReact},
            ],
        },
        {
            key: '6',
            img: kagel,
            demo: 'https://drisselalaoui.github.io/X-O/faute',
            gtihubRep: 'https://github.com/DrissElalaoui/X-O',
            language: [
                {key: '1', lan: 'Html' , por: '20' , col: colHtml},
                {key: '2', lan: 'BootStrap' , por: '30' , col: colBootstrap},
                {key: '3', lan: 'React-Js' , por: '50' , col: colReact},
            ],
        },
    ]


    const allListeProjects = tableProjects.map( (index) => {
        return (
            <CardMyProjects col1={index.language[0]?.col || '0'} col2={index.language[1]?.col || '0'} col3={index.language[2]?.col || '0'}   por1={index.language[0]?.por || '0'} por2={index.language[1]?.por || '0'} por3={index.language[2]?.por || '0'}  key={index.key} img= {index.img} demo={index.demo}/>
        )
    })
     const [listeProjectsHtml , setListeProjectsHtml] = useState(allListeProjects)
    function changeLanguage(test) {
    const filteredProjects = tableProjects.filter((project) =>
        project.language.some((lang) => lang.lan === test)
    );
 
    setListeProjectsHtml(
        filteredProjects.map((project, i) => (
        <CardMyProjects
            key={i}
            img={project.img}
            demo={project.demo}
             por1={project.language[0]?.por || '0'}
             por2={project.language[1]?.por || '0'}
             por3={project.language[2]?.por || '0'}
            col1={project.language[0]?.col || '0'}
            col2={project.language[1]?.col || '0'}
            col3={project.language[2]?.col || '0'}
        />
        ))
        
        
    );
    }


    return (
        <div   id="Projects" style={{
            maxWidth: '1200px'  , 
            margin: '0 auto 50px',
            display: 'flex' , 
            alignItems: "center", 
            justifyContent: 'center' , 
            flexDirection: 'column',
            padding:'40px',
            }}>
            <h1 style={{textAlign: 'center'}}>My<span>Projects</span></h1>
            <div className="buttonProjects">
                <button onClick={() => {setListeProjectsHtml(allListeProjects)}}>All</button>
                <button onClick={() => {changeLanguage('Html')}}>Html5</button>
                <button onClick={() => {changeLanguage('Css')}}>Css3</button>
                <button onClick={() => {changeLanguage('Tailwind')}}>Tailwind</button>
                <button onClick={() => {changeLanguage('BootStrap')}}>BootStrap</button>
                <button onClick={() => {changeLanguage('JavaScript')}}>JavaScript</button>
                <button onClick={() => {changeLanguage('TypeScript')}}>TypeScript</button>
                <button onClick={() => {changeLanguage('React-Js')}}>React-Js</button>
                <button onClick={() => {changeLanguage('MUI')}}>MUI</button>
            </div>
            <div style={{ display: "flex" , flexWrap: "wrap" , alignItems: 'center' , justifyContent: "center"}}>
                {listeProjectsHtml}                
            </div>
            <button className="button" style={{ margin: '15px 0'}}>Viwe More</button>
        </div>
    )
}