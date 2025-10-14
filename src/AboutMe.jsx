import CardAbout from './CardAbout';
import personne from './img/personne.png'
import web from './img/web.png'
import web2 from './img/web2.png'
import web3 from './img/wzb3.png'
import web4 from './img/web4.png'
import 'aos/dist/aos.css';
export default function AboutMe() { 
    const listeAboutMe1 = [
        {
            key: '1',
            pint: '#FFC400',
            img: web2,
        },
        {
            key: '2',
            pint: '#8C00FF',
            img: web,
            
        },
    ]
    const listeAboutMe2 = [
        {
            key: '3',
            pint: '#FF3F7F',
            img: web3,
        },
        {
            key: '4',
            pint: '#08CB00',
            img: web4,
        },
    ]

    const tableAboutMe1 = listeAboutMe1.map( (index) => {
           return  <CardAbout key={index.img} pint={index.pint} img={index.img}/> 
    })
    const tableAboutMe2 = listeAboutMe2.map( (index) => {
           return  <CardAbout key={index.img} pint={index.pint} img={index.img}/> 
    })
    return (
        <div className='about' style={{
            textAlign: 'center' ,
            padding: '40px' ,
            // display: 'flex' , 
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto 50px',
           }}>
            <h1 >About <span>Me</span></h1>
            
            <div id='AboutMe' style={{ display: 'flex' , justifyContent: 'space-around'}}  className="hautAbout">
            <div  style={{ display: 'flex' , flexDirection: 'column' , height: '400px' }} className="basAbout">
                   {tableAboutMe1}
            </div>
            <div className='new'>
                <img className='imgAbout' src= {personne} style={{position:'relative', width: '300px' , height: '199px'}} alt="" />
                <div>
                    <div  className='clip clip1' ></div>
                    <div  className='clip clip2' ></div>
                    <div  className='clip clip3' ></div>
                    <div className='clip clip4' ></div>
                    <h2  style={{color: "#123458"}}><span>Devlopper Front-End</span></h2>
                    <p>Head Of Design At Calvino</p>
                    <button className='button'  style={{ marginTop: '10px'}}><a style={{color: '#FAF8F1' , textDecoration: 'none'}} href="../public/cv.pdf" download="CV.pdf">Download Cv</a></button>
                </div>
            </div>
            <div  style={{ display: 'flex' , flexDirection: 'column' , height: '400px'}} className="basAbout">
                   {tableAboutMe2}
            </div>
        </div>
        </div>
    )
}