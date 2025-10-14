
import 'aos/dist/aos.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import KeyProjects from './KeyProjects';



ChartJS.register(ArcElement, Tooltip, Legend);
export let data
export default function CardMyProjects({ img , demo  , por1 , por2 , por3 , col1 , col2 , col3}) {

 data = {
  datasets: [
    {
      data: [por1, por2, por3],
      backgroundColor: [
        col1,
        col2,
        col3,

      ],
      borderColor: [
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
   
    return (
        <div className='projecte' data-aos="fade-up" data-aos-duration="1000" style={{
            margin: '8px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '15px ',
            justifyContent: 'space-between',
            borderRadius: '10px',
        }}>
            <div className='imgProjecte' style={{ borderRadius: '5px' , display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '5px',
                    border: '1px solid #b6b6b6ff'
                    // position: 'relative'
                }} src={img} alt="" />
                <div className='buttonP' style={{  position: 'absolute' , backgroundColor: '#c4c4c491' , width: '100%' , height: '100%' , alignItems:'center' , justifyContent: 'center'}}>
                    <button style={{backgroundColor: '#F8E7F6' , marginRight: '10px' , width: '100px' , height: '30px' , border: 'none' , borderRadius: '5px' , cursor: 'pointer'}}><a target="_blank" style={{textDecoration: 'none' , color: '#000'}} href= {demo}>Demo<i style={{fontSize: '10px' , marginLeft: '4px'}} className="fa-solid fa-arrow-up-right-from-square"></i></a></button>
                    <button style={{backgroundColor: '#000' ,width: '100px' , height: '30px' , border: 'none' , borderRadius: '5px' , cursor: 'pointer'}}><a target="_blank" style={{textDecoration: 'none' , color: '#FFF'}} >Github</a></button>
                </div>  
            </div>
            
            <div style={ {padding: '20px', width: '650px', display: 'flex' ,flexDirection: 'column'  , justifyContent: 'center' , alignItems: 'start'}}>
                <h2><span>Calculer Age</span></h2>
                <div>
                    <h3 style={{color: '#a12828ff'}}>Discription</h3>
                    <p>Jeu de morpion 3x3 où deux joueurs placent X et O à tour de rôle.Le but est d’aligner trois symboles identiques pour gagner la partie.</p>
                </div>
                
                <h3 style={{color: '#a12828ff'}}>Stack</h3>
                <div style={{display: 'flex' ,  width: '100%' , alignItems: 'center' , justifyContent: 'center'}}>
                    <div style={{width: '100px' , height: '100px' , marginRight: '20px'}}>
                        <Doughnut data={data} />
                    </div>
                    <div style={{display: 'flex' , flexWrap: 'wrap' , width: '100%'}}>
                        <KeyProjects colorKey= {'#F25912'} contentKey= {'Html'}/>
                        <KeyProjects colorKey= {'#1055C9'} contentKey= {'Css'} />
                        <KeyProjects colorKey= {'#FFE100'} contentKey= {'Js'} />
                        <KeyProjects colorKey= {'#123458'} contentKey= {'React'} />
                        <KeyProjects colorKey= {'#640D5F'} contentKey= {'Tailwind'} />
                        <KeyProjects colorKey= {'blue'} contentKey= {'Bootstrap'} />
                        <KeyProjects colorKey= {'#6F00FF'} contentKey= {'MUI'} />
                    </div>
                </div>
                
            </div>
        </div>
    )
}