import React from 'react'
import Main from './Main'
import Middle from './Middle'
import Product from './Product'
function Body(props) {
    return (
        <div className="body">
            <Main image={props.image}/>
            <Middle image2={props.image2}/>
            <Product icon1={props.icon1} icon2={props.icon2} icon3={props.icon3}/>
        </div>
    )
}

export default Body
