import React from 'react'
const style = {
    card: {
        height: "250px",
        width: "300px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        borderTop: "5px solid black",
        boxShadow: "0px 0px 24px -10px rgba(0,0,0,0.75)",
        WebkitBoxShadow: "0px 0px 24px -10px rgba(0,0,0,0.75)",
        MozBoxShadow: "0px 0px 24px -10px rgba(0,0,0,0.75)",
    },
    cont: {
        fontSize: "50px",
        color: "black",
        textAlign:"center",
        

        
    },
    title: {
        fontSize: "40px",
        color: "rgb(49, 48, 48)"
    }
}
function Card(props) {
    return (
        <div className='card' style={style.card }>
            <div className='cont' style={style.cont }>{props.data}</div>
            <div className='title' style={style.title}>{props.name}</div>
        </div>
    )
}

export default Card
