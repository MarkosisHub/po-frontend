import React, { useState } from "react";
import axios from "axios";

import classes from "./StayInTouch.module.css";

const StayInTouch = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubscribe = (e) => {
    e.preventDefault();
    axios.post("/api/subscribe", email).then((res) => console.log(res));
  };
  console.log(email);
  return (
    <section className={classes.stayInTouchSection}>
      <div className={`${classes.stayInTouchWrapper} container`}>
        <div className={classes.stayInTouchContent}>
          <h4>Stay in touch</h4>
          <p>
          Stay in touch with our weekly newsletter for upcoming gear.  
          </p>
          <form className={classes.stayInTouchForm}>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Your email address"
            />
            <button onClick={handleSubscribe}>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StayInTouch;
