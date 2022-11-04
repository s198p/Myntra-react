import React from 'react';
import "../css/Payment.css";

const Payment = () => {
  return (
    <div className="cart">
        <div className="mainDiv">
            
            <h4>Chose Payment Mode</h4>
            <div className="payment">
                <div className="mode">
                    <div>
                        <i className="fa-brands fa-amazon-pay"></i>
                        <h5>Cash On Delivery (Cash/Card/UPI)</h5>
                    </div>
                    <div className="on" onclick="openwindow()">
                        <i className="fa-solid fa-credit-card"></i>
                        <h5>Credit/Debit Card</h5>
                    </div>
                    <div>
                        <i className="fa-brands fa-cc-amazon-pay"></i>
                        <h5>PhonePe/Google Pay/BHIM UPI</h5>
                    </div>
                    <div>
                        <i className="fa-solid fa-wallet"></i>
                        <h5>Paytm/Payzapp/Wallets</h5>
                    </div>
                    <div>
                        <i className="fa-solid fa-building-columns"></i>
                        <h5>Net Banking</h5>
                    </div>
                    <div>
                        <i className="fa-solid fa-money-check-dollar"></i>
                        <h5>EMI/Pay Later</h5>
                    </div>
                </div>
                <div className="paymentDiv">
                    <h4>Cash On Delivery</h4>
                    <div className="infopay">
                        <p>Please confirm that you will pay the following amount throgh cash on delivery </p>
                        <h3>₹699</h3>
                    </div>
                    <a href="otp2.html">
                        <div className="pay">
                            VERIFY & PAY
                        </div>
                    </a>
                </div>
            </div>
            <div className="lastBox" style={{display:"flex",justifyContent: "center"}}>
                
                <i className="fa-solid fa-gift"></i>
                <h3>Have a Gift Card?</h3>              
                <p>APPLY GIFT CARD</p>

            </div>
        </div>
        <div className="checkDiv">
            {/* <div className="total">
                <div>
                    <h5>PRICE DETAILS</h5>
                    <p>Total MRP</p>
                    <p>Discount on MRP</p>
                    <p>Convenience Fee <b>Know More</b></p>
                </div>
                <div>
                    <p>₹999</p>
                    <p style={{color:"#3cc3a0"}}>-₹209</p>
                    <div className="free">
                        <p>₹99</p>
                        <p>FREE</p>
                    </div>
                </div>
            </div> */}
            <div>
                <h4>Bank Offer</h4>
                <p>10% Instant Discount with ICICI Bank Credit cards on a min spend of Rs 3,000. TCA</p>
                <p>Show More <i className="fa-solid fa-angle-down"></i></p>

            </div>
            <div className="totalamount">
                <div>
                    Total Amount
                </div>
                <div>
                    ₹699
                </div>
            </div>
        </div>
    </div>

  )
}

export default Payment;