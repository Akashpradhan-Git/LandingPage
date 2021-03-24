import React from 'react'

function Burger() {
    function BurgerClick(){
        console.log("clicked")
    }
    
    return (
        <div className="burger" onClick={BurgerClick}>
            <div className="lines">
                <div className="line"></div>
                <div className="line small"></div>
                <div className="line"></div>
                <div className="line small"></div>
            </div>
        </div>
    )
}

export default Burger
