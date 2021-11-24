import React from 'react'
import { Link } from 'react-router-dom'
import classes from './OrderSuccessScreen.module.css'

const OrderSuccessScreen = () => {
  return (
    <section className={classes.orderSuccessSection}>
      <div className={`${classes.orderSuccessWrapper} container`}>
        <div className={classes.orderSuccessContent}>
          <div>
          <img src="/icons/success_logo.png" alt="" />
          <p>Your order has been received. We will contact you soon to confirm the order. Thank you so much for your generosity, have a great day.</p>
          <Link className={classes.orderBtn} to="/"><i className="fas fa-arrow-left"></i> Back to Website</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderSuccessScreen
