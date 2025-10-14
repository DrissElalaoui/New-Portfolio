// import scroll animation
import 'aos/dist/aos.css';


export default function CardSkilles({iconSkilles , title , colorIcon , content , lien}) {
    return (
            <div  className='cardSkilles'    data-aos="fade-up" data-aos-duration="1000" style={{
                
                width: '200px',
                height: "250px",
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent : 'center',
                flexDirection: 'column',
                padding: "8px",
                border: `1px solid ${colorIcon}`
            }} >
                <h3 >{title}</h3>
                <div style={{width: '70px' , height: '70px' , margin: '10px 0 0 '}}><i style={{  fontSize: '60px' ,color: colorIcon}} className={iconSkilles}></i></div>
                <p style={{textAlign: 'center' , margin: '10px 0'}}>{content}</p>
                <button style={{width: '100px', height: '30px' , borderRadius: '5px' , border: 'none' ,backgroundColor: colorIcon , cursor: 'pointer'}}><a href={lien} target='_blank' style={{textDecoration: 'none' , color: '#F5F5F5' }}>Dcumentation</a></button>
            </div>
        
    )
}