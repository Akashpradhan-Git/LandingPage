import React from 'react'

function Product(props) {
    return (
        <div className="products">
            <p>Product and Service</p>
            <div className="container">
                <div className="product card">
                    <div className="wrapper">
                        <img src={props.icon1} alt="" />
                        <p className="title">Our Product</p>
                        <p className="sub-tit">
                            Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.
                        </p>
                        <button>Read More</button>
                    </div>
                </div>

                <div className="service card">
                    <div className="wrapper">
                        <img src={props.icon2} alt="" />
                        <p className="title">Our Service</p>
                        <p className="sub-tit">
                            DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.
                        </p>
                        <button>Read More</button>
                    </div>
                </div>

                <div className="tech card">
                    <div className="wrapper">
                        <img src={props.icon3} alt="" />
                        <p className="title">Our Technology</p>
                        <p className="sub-tit">
                            First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.                        </p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
