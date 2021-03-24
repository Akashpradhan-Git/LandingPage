import React from 'react'
function main(props) {
    return (
        <div className="main">
            <div className="image">
                <img src={props.image} alt="" />
            </div>

            <div className="title">
                <p className="t-reg">Making the most of the ever-growing</p>
                <p className="t-red">Information Technology</p>
                <div className="sub-title">
                    <p>
                        Managed by a team of professional experts with extensive experience and impressive track records
                    </p>
                </div>
                <div className="btn">
                <button>Read More</button>
            </div>
            </div>
            
        </div>
    )
}

export default main
