
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
export default function CardServices({colorH3 , contentH3 , bgc}) {
     useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    return (
        <div className='cardServices' data-aos="fade-up" data-aos-duration="1000" style={{
            padding: '10px',
            borderRadius: '5px',
            margin: '20px 0',
            borderLeft: `1px solid ${colorH3}`,
            borderRight: `1px solid ${colorH3}`,
            borderTop: `1px solid ${colorH3}`,
            borderBottom: `1px solid ${colorH3}`,
            position: 'relative',
            minHeight: '150px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center'
        }}>
            <div className='bobe' data-aos="fade-right" data-aos-duration="1000" style={{ 
            height: '40px' ,
            alignItems: 'center' ,
            justifyContent: 'center' ,
            borderLeft: `2px solid ${colorH3}`,
            borderRight: `2px solid ${colorH3}`,
            borderRadius: '50px',
            position: 'absolute',
            
            
            marginTop: '20px'
            }}>
            <h3 style={{color: colorH3}} >{contentH3}</h3>
        </div>
            <h3 className='h3' style={{color: colorH3}}>{contentH3}</h3>
            <p >Support is available if you want to make any changes to your website after delivery.
                I’ll be here to help you update or improve it anytime.</p>
            <button style={{
                width: '80px',
                marginTop: '15px',
                border: 'none',
                borderRadius: '5px',
                cursor: "pointer",
                backgroundColor: bgc,
                fontSize: '12px',
                padding: '5px',
                border: `1px solid ${colorH3}`,
                color: colorH3,
                fontWeight: '600'
            }}>Read More</button>
        </div>
    )
}