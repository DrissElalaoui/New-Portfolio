



export default function Footer() {
    return (
        <footer  id="Footer" style={{
            maxWidth: '1200px',
            margin: 'auto ',
            padding: '40px',
            
        }}>
            <div className="footer" style={{
            
            display: "flex",
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: "center"
            
        }}>
            <div>
                <h3 style={{margin: '15px 0'}}>Description</h3>
                <p style={{}}>
                    Le développement web consiste à créer et gérer <br /> des sites et applications sur Internet.
                </p>
                <div>
                    <h3 style={{margin: '15px 0'}}>Account</h3>
                    <div className="linkAccount">
                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                        <a href=""><i className="fa-brands fa-github"></i></a>
                        <a href=""><i className="fa-brands fa-whatsapp"></i></a>
                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                        <a href=""><i className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div className="linkFooter" style={{display: 'flex' , alignItems: 'center' , justifyContent: 'center' , flexDirection: 'column'}}>
                <a href="#homme">Home</a>
                <a href="#AboutMe">About Me</a>
                <a href="#Services">Services</a>
                <a href="#Skilles">Skilles & Abillity</a>
                <a href="#Projects">MyProjects</a>
                <a href="#Contact">Contact Me</a>
                <a href="#Footer">Footer</a>
            </div>
            <div>
                <h3>Information</h3>
                <p><span>Name: </span>Driss Elalaoui</p>
                <p><span>Email: </span>drissalaoui040@gmail.com</p>
                <p><span>Tél: </span>0689361352</p>
                <p><span>Adress: </span>HAY TANCITA KHCHAA ZAGORA</p>
                <p><span>Localisation Actuelle : </span>Mohammedia</p>
            </div>
        </div >
                   <p style={{textAlign: 'center'}}>&copy; 2025 | All rights reserved DrissWeb</p>
        </footer>
    )
}