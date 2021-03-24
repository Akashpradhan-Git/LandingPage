import React from 'react'

function middle(props) {
    return (
        <div className="middle">
            <div className="wrapper">
                <div className="img">
                    <img src={props.image2} alt="" />
                </div>
                <div className="title">
                    <p className="tit">Welcome to <span>Dwidasa Samsara Indonesia (DSI)</span></p>
                    <div className="sub-tit">
                        <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span>DSI</span>’s distinct front-end based application concept.</p>
                        <p>Managed by a team of professional experts with extensive experience and impressive track records, <span>DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default middle
