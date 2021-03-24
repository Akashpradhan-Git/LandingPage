import React from 'react'

function footer(props) {
    return (
        <div className="footer">
            <div className="footer-warp">
                <div className="info card">
                    <div className="logo">
                        <img src={props.logo} alt="" />
                    </div>
                    <h4>PT Dwidasa Samsara Indonesia</h4>
                    <p>Ruko Jalur Sutera 29A No. 53</p>
                    <span>Alam Sutera Serpong, Tangerang 15323</span>
                </div>
                <div className="contact card">
                    <h3>Contact</h3>
                    <span>Phone : +62.21.5314.1135</span><br />
                    <span>Fax : +62.21.5314.1135</span><br />
                    <span>Email : community@dwidasa.com</span><br />


                </div>
                <div className="customer card">
                        <div className="cus"><img src={props.icon1} alt="" />
                            <img src={props.icon2} alt="" />
                            <img src={props.icon3} alt="" />
                        </div>
                        <div className="cus">
                            <img src={props.icon4} alt="" />
                            <img src={props.icon6} alt="" />
                            <img src={props.icon5} alt="" />
                        </div>
                </div>
            </div>
            <div className="foot">
                <p>Copyright @ 2021 - Akash Pradhan</p>
            </div>
        </div>
    )
}

export default footer
