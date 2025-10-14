import CardServices from "./CardServices";


export default function Services() {
    const listeServicesRight = [
        {
            key: '1',
            contentH3: "Devloppement Web",
            colorH3: "#FF9013",
            bgc: '#ffecc0ff',
        },
        {
            key: '2',
            contentH3: "Responsive Design",
            colorH3: "#0046FF",
             bgc: '#ecf5f3ff',
        },
        {
            key: '3',
            contentH3: "Creative Design",
            colorH3: "#8C1007",
            bgc: '#fadbc9ff',
        },
        {
            key: '4',
            contentH3: "Support",
            colorH3: "#9112BC",
            bgc: '#dccde2ff',
        },
        {
            key: '5',
            contentH3: "Support",
            colorH3: "#45791eff",
            bgc: '#d9f3c5ff',
        },
        {
            key: '6',
            contentH3: "Support",
            colorH3: "#F75270",
            bgc: '#ffdee4ff',
        }
    ]
    
    const listCompenentRight = listeServicesRight.map( (index) => {
            return <CardServices key={index.key} contentH3= {index.contentH3}  colorH3= {index.colorH3}  bgc={index.bgc}/>
    }) 
    return (
        <div id="Services" style={{
            margin: '0 auto 50px',
            maxWidth: '1200px',
            }}>
            <h1 style={{textAlign: 'center'}}>Servi<span>ces</span></h1>
               <div className="services" style={{ display: 'grid', gap: '10px'}}>
                {listCompenentRight}
               </div>
        
        </div>
    )
}