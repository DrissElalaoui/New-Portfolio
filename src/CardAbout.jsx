import Avatar from '@mui/material/Avatar';
import 'aos/dist/aos.css';

export default function CardAbout({pint , img}) {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='cardAbout' style={{border: `2px solid ${pint}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <div style={{backgroundColor: pint }} className="cercle"></div>
                <Avatar alt="Remy Sharp" src={img} sx={{ width: 50, height: 50 ,outline: `1px solid #FFF` }} />
                <h3><span>Devlopper for</span></h3>
                <p style={{color: '#9e9e9eff', zIndex: "2"}}>Web & Mobile</p>
        </div>
    )
}