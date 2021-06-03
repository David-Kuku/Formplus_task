import React from 'react'
import './TemplateCards.css'

const TemplateCards = ({ body, name, link }) => {
    return (
        <div className="card">
            <div style={{ padding: "15px" }}>
                <h2 style={{ marginTop: "0px", textTransform: "capitalize" }}>
                    {name}
                </h2>
                <p >
                    {body}

                </p>
            </div>
            <div className='card-footer' >
                <p style={{ marginLeft: "15px" }}><a href={link} className="link">Use Template</a></p>
            </div>
        </div>
    )
}
export default TemplateCards
