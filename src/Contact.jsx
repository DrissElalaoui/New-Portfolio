
// import Animation Scroll
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';

import touch from './img/touch.png';
import touchDark from './img/touchDark2.png'
// import Form Email
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
   const localTheme =  localStorage.getItem('theme')
    
    // const [mode,setMode] = useState(false)
      const [state, handleSubmit] = useForm("mgvnnnap");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  } 
        useEffect(() => {
            AOS.init({ duration: 1000 });
          }, []);
    return (
        <div   id='Contact' style={{
            maxWidth: '1200px' , 
            margin: '0 auto 50px',
            padding: '40px',
            }}>
            <h1 style={{textAlign: 'center'}}>Get In <span>Touch</span></h1>
            <div className='contact' style={{display: 'flex' , alignItems: 'center'}}>
                <div data-aos="fade-right" data-aos-duration="1000">
                    <img className='imgContact' style={{width: '400px' , height: '400px'}} src={localTheme === "dark" ? touchDark : touch} alt="" />
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" style={{display: 'flex' , flexDirection: 'column', width: '600px'}}>
                    <form onSubmit={handleSubmit} action={'https://formspree.io/f/mgvnnnap'} method='POST'>
                    <div>
                        <input id='nom' name='nom' type="text" placeholder="Votre Name" />
                          
                        <span className="bottom span"></span>
                        <span className="right span"></span>
                        <span className="top span"></span>
                        <span className="left span"></span>
                    </div>
                     <ValidationError 
                                prefix="Nome" 
                                field="nom"
                                errors={state.errors}
                        />
                    <div  style={{margin: '15px 0' }} >

                        <input id='email' name="email" type="email" placeholder="exmple00@gmail.com"/>
                        
                        <span className="bottom span"></span>
                        <span className="right span"></span>
                        <span className="top span"></span>
                        <span className="left span"></span>
                    </div>
                    <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                    />
                    <div style={{height: '100px'}}>
                        <textarea id='message' name="message" style={{height: '100%'}}  placeholder="Votre Message"/>
                            
                        <span className="bottom span"></span>
                        <span className="right span"></span>
                        <span className="top span"></span>
                        <span className="left span"></span>
                    </div>
                      <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                        />
                    <button type='submit'  className='button' style={{ margin: '15px 0' }}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}