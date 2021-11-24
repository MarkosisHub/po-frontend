import React from "react";

import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <section
      className={classes.contactUsSection}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/images/contact_us_bg.png"
        })`,
      }}
    >
      <div className={`${classes.contactUsWrapper} container`}>
        <div className={classes.contactUsContent}>
          <div className={classes.contactUsAddress}>
            <h3>Hit us up!</h3>
            <p>
              If you’re chasing for neat gears without higher prices, or don’t
              know where to get started, hit us up by filling up the boxes on
              the right; and we’ll get back to you shortly.
            </p>
            <div className={classes.phone}>
              <img src="/icons/phone.png" alt="Phone" />
              <p>0458 310 346</p>
            </div>
            <div className={classes.email}>
              <img src="/icons/mail.png" alt="Mail" />
              <p>Mazda7s1@bigpond.net.AU</p>
            </div>
            <div className={classes.address}>
              <img src="/icons/map.png" alt="Map" />
              <p>Glenorchy, Tasmania 7010</p>
            </div>
          </div>
          <div className={classes.contactUsForm}>
            <h4>Drop Your Message Here</h4>
            <form>
              <div>
                <input type="text" name="name" placeholder="Your name" />
              </div>
              <div>
                <input type="email" name="email" placeholder="Your email" />
              </div>
              <div>
                <textarea
                  placeholder="Type your message"
                  name="message"
                  id=""
                  cols="10"
                  rows="10"
                ></textarea>
              </div>
              <div className={classes.submitBtn}>
                <button class="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
