

export default function KeyProjects({colorKey , contentKey}) {
    return (
        <div style={{display: 'flex' , alignItems: 'center' ,marginRight: '15px' , height: '30px'}}>
            <div style={{width: '12px' , height: '12px' , backgroundColor: colorKey , marginRight: '5px'}}></div>
            <p style={{fontSize: '14px' , fontWeight: '500'}}>{contentKey}</p>
        </div>
    )
}