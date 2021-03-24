import React from 'react'
import logoimg from '../image/Group 1317.png'
import iconN1 from '../image/shuffle.png'
import iconN2 from '../image/Union.png'
import iconN3 from '../image/mail.png'
import down from '../image/chevron_down.png'
import Burger from './Burger'
function Nav() {
    return (
        <nav>
            <div className="warp-nav">
            
                <div className="logo">
                    <img src={logoimg}></img>
                </div>
                <div className="texts">
                    <ul>
                        <li>Service</li>
                        <li>Product</li>
                        <li>Technology</li>
                        <div className="dropdown">
                            <li className="dropbtn">About<img src={down}/></li>
                            <div className="drop-option">
                                <a href="#"> Link1</a>
                                <a href="#"> Link2</a>
                                <a href="#"> Link3</a>
                                <a href="#"> Link4</a>
                            </div>
                        </div>

                        <div className="dropdown">
                            <li className="dropbtn">Clint<img src={down}/></li>
                            <div className="drop-option">
                                <a href="#"> Link1</a>
                                <a href="#"> Link2</a>
                                <a href="#"> Link3</a>
                                <a href="#"> Link4</a>
                            </div>
                        </div>

                        <li>Partner</li>
                    </ul>
                </div>

                <div className="icon">
                    <ul>
                        <li><img src={iconN1} /></li>
                        <li><img src={iconN2} /></li>
                        <li><img src={iconN3} /></li>

                    </ul>
                </div>
                <Burger />
            </div>
        </nav>
    )
}

export default Nav
