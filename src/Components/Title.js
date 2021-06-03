import React from 'react'
import './Title.css'

const Title = ({ titlevalue }) => {

    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "50px", fontSize: "17px", flexWrap: "wrap" }}>
           <p className="title"> <b>{titlevalue} Templates </b></p>
            <p className="number" style={{ color: "" }}>
               <b> 2000 Templates</b>
                </p>
        </div>
    )

}

export default Title