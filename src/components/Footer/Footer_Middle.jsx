import React from 'react'
import '../Footer/footer.css'

const Footer_Middle = () => {
    return (
        <>
<div className="middle-footer">
  <div className="flex justify-between">
    
    {/* Payment Partners */}
    <div className="payment-partners row1 flex items-center ">
      <h3>Payment Partners</h3>
      <img src="https://freshcart-next-js.vercel.app/images/payment/amazonpay.svg" alt="amazonpay" />
      <img src="https://freshcart-next-js.vercel.app/images/payment/american-express.svg" alt="amex" />
      <img src="https://freshcart-next-js.vercel.app/images/payment/mastercard.svg" alt="mastercard" />
      <img src="https://freshcart-next-js.vercel.app/images/payment/paypal.svg" alt="paypal" />
      <img src="https://freshcart-next-js.vercel.app/images/payment/visa.svg" alt="visa" />
    </div>

    {/* Get deliveries section */}
    <div className="row2 flex items-center">
      <div className="footer-middle-logo flex  items-center text-center gap-4">
        <h2 className="text-lg font-semibold">Get deliveries with FreshCart</h2>
        <div className="apps flex gap-4">
          <a href="#"><img src="https://freshcart-next-js.vercel.app/images/appbutton/appstore-btn.svg" alt="App Store" /></a>
          <a href="#"><img src="https://freshcart-next-js.vercel.app/images/appbutton/googleplay-btn.svg" alt="Google Play" /></a>
        </div>
      </div>
    </div>

  </div>
</div>

        </>
    )
}

export default Footer_Middle
