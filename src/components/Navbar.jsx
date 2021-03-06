import React from "react";
import { Link } from 'react-router-dom'

import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <div className={classes.navbarWrapper}>
        <nav className={`${classes.navbar} container`}>
          <div className={classes.dropdown}>
            <button className={classes.dropbtn}>
              <img src="/icons/menu_bar.png" alt="Menu bar" /> PRODUCTS
              <i className="fas fa-angle-down down-angle"></i>
            </button>
            <div className={classes.dropdownContentWrapper}>
              <div className={`${classes.dropdownContent} container`}>
                <div>
                  <h6>OPTICS</h6>
                  <Link to='subcategory/rafle scopes'>Rifle scopes</Link>
                  <Link to="subcategory/binoculars">Binoculars</Link>
                  <Link to="subcategory/rangefinders">Rangefinders</Link>
                  <Link to="subcategory/red dots">Red dots</Link>
                  <Link to="subcategory/rings & mounts">Rings & mounts</Link>
                  <Link to="subcategory/accessories">Accessories</Link>
                </div>
                <div>
                  <h6>RIFLE COMPONENTS</h6>
                  <Link to="subcategory/actions">Actions</Link>
                  <Link to="subcategory/barrels">Barrels</Link>
                  <Link to="subcategory/triggers">Triggers</Link>
                  <Link to="subcategory/muzzle brakes">Muzzle brakes</Link>
                  <Link to="subcategory/bottom metal & magazines">Bottom metal & magazines</Link>
                </div>
                <div>
                  <h6>NIGHT VISION & THERMAL</h6>
                  <Link to="subcategory/scopes">Scopes</Link>
                  <Link to="subcategory/monoculars & binoculars">Monoculars & binoculars </Link>
                </div>
                <div>
                  <h6>BIPODS & BAGS</h6>
                  <Link to="subcategory/bipods">Bipods</Link>
                  <Link to="subcategory/shooting bags">Shooting bags</Link>
                </div>
                <div>
                  <h6>CLEANING SUPPILES</h6>
                  {/* <Link to="/abc">BINOCULARS</Link>
                  <Link to="/abc">BARRELS</Link>
                  <Link to="/abc">OPTICS</Link>
                  <Link to="/abc">AMMUNATIONS</Link>
                  <Link to="/abc">COVERS</Link>
                  <Link to="/abc">RIFLE SCOPS</Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className={classes.dropdown}>
            <button className={classes.dropbtn}>
              BRANDS
              <i className="fas fa-angle-down down-angle"></i>
            </button>
            <div className={classes.dropdownContentWrapper}>
              <div className={`${classes.dropdownContent} container`}>
                <div>
                  <Link className={classes.brand} to="/">Kahles</Link>
                  <Link className={classes.brand} to="/abc">Nightforce</Link>
                  <Link className={classes.brand} to="/abc">PULSAR</Link>
                  {/* <Link to="/abc">OPTICS</Link>
                  <Link to="/abc">HAWKINS</Link>
                  <Link to="/abc">VORTEX</Link> */}
                </div>
                <div>
                  <Link className={classes.brand} to="/">HAWKINS</Link>
                  <Link className={classes.brand} to="/abc">VORTEX</Link>
                  <Link className={classes.brand} to="/abc">DEFIANCE MACHINE</Link>
                  {/* <Link to="/abc">JEWEL </Link>
                  <Link to="/abc">HAWKINS</Link> */}
                </div>
                <div>
                  <Link className={classes.brand} to="/">BORDEN</Link>
                  <Link className={classes.brand} to="/abc">TRIGGER TECH</Link>
                  <Link className={classes.brand} to="/abc">JEWEL</Link>
                  {/* <Link to="/abc">GLASSES</Link> */}
                </div>
                <div>
                  <Link className={classes.brand} to="/">HAWKINS</Link>
                  <Link className={classes.brand} to="/abc">TERMINATOR</Link>
                  <Link className={classes.brand} to="/abc">PULSAR</Link>
                  {/* <Link to="/abc">AMMOS</Link>
                  <Link to="/abc">SCOPS</Link>
                  <Link to="/abc">COVERS</Link>
                  <Link to="/abc">STANDS</Link> */}
                </div>
                <div>
                  <Link className={classes.brand} to="/">KAHLES</Link>
                  <Link className={classes.brand} to="/abc">ACCUTAC</Link>
                  {/* <Link to="/abc">BARRELS</Link>
                  <Link to="/abc">OPTICS</Link>
                  <Link to="/abc">AMMUNATIONS</Link>
                  <Link to="/abc">COVERS</Link>
                  <Link to="/abc">RIFLE SCOPS</Link> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className={classes.dropdown}>
            <button className={classes.dropbtn}>
              CUSTOM RIFLE
              <i className="fas fa-angle-down down-angle"></i>
            </button>
            <div className={classes.dropdownContentWrapper}>
              <div className={`${classes.dropdownContent} container`}>
                <div>
                  <h6>ASSUALT RIFILES</h6>
                  <Link to="/abc">GUNS</Link>
                  <Link to="/abc">BARRELS</Link>
                  <Link to="/abc">OPTICS</Link>
                  <Link to="/abc">AMMUNATIONS</Link>
                  <Link to="/abc">COVERS</Link>
                  <Link to="/abc">RIFLE SCOPS</Link>
                </div>
                <div>
                  <h6>HANDGUNS</h6>
                  <Link to="/abc">GUNS</Link>
                  <Link to="/abc">AMMOS</Link>
                  <Link to="/abc">OPTICS</Link>
                  <Link to="/abc">COVERS</Link>
                </div>
                <div>
                  <h6>VESTS</h6>
                  <Link to="/abc">SHOOTING VEST</Link>
                  <Link to="/abc">JACKETS</Link>
                  <Link to="/abc">GLASSES</Link>
                </div>
                <div>
                  <h6>SHOOTING GEARS</h6>
                  <Link to="/abc">RIFLES</Link>
                  <Link to="/abc">SHOTGUNS</Link>
                  <Link to="/abc">AMMOS</Link>
                  <Link to="/abc">SCOPS</Link>
                  <Link to="/abc">COVERS</Link>
                  <Link to="/abc">STANDS</Link>
                </div>
                <div>
                  <h6>ACCESSORIES</h6>
                  <Link to="/abc">BINOCULARS</Link>
                  <Link to="/abc">BARRELS</Link>
                  <Link to="/abc">OPTICS</Link>
                  <Link to="/abc">AMMUNATIONS</Link>
                  <Link to="/abc">COVERS</Link>
                  <Link to="/abc">RIFLE SCOPS</Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className={classes.dropdown}>
            <button className={classes.dropbtn}>
              SHOOTING CENTER
              <i className="fas fa-angle-down down-angle"></i>
            </button>
            <div className={classes.dropdownContentWrapper}>
              <div className={`${classes.dropdownContent} container`}>
                <div>
                  <h6>ASSUALT RIFILES</h6>
                  <Link to="/abc">GUNS</Link>
                  <Link to="/abc">BARRELS</Link>
                  <Link to="/abc">OPTICS</Link>
                  <Link to="/abc">AMMUNATIONS</Link>
                  <Link to="/abc">COVERS</Link>
                  <Link to="/abc">RIFLE SCOPS</Link>
                </div>
                <div>
                  <h6>HANDGUNS</h6>
                  <Link to="/abc">GUNS</Link>
                  <Link to="/abc">AMMOS</Link>
                  <Link to="/abc">OPTICS</Link>
                  <Link to="/abc">COVERS</Link>
                </div>
                <div>
                  <h6>VESTS</h6>
                  <Link to="/abc">SHOOTING VEST</Link>
                  <Link to="/abc">JACKETS</Link>
                  <Link to="/abc">GLASSES</Link>
                </div>
                <div>
                  <h6>SHOOTING GEARS</h6>
                  <Link to="/abc">RIFLES</Link>
                  <Link to="/abc">SHOTGUNS</Link>
                  <Link to="/abc">AMMOS</Link>
                  <Link to="/abc">SCOPS</Link>
                  <Link to="/abc">COVERS</Link>
                  <Link to="/abc">STANDS</Link>
                </div>
                <div>
                  <h6>ACCESSORIES</h6>
                  <Link to="/abc">BINOCULARS</Link>
                  <Link to="/abc">BARRELS</Link>
                  <Link to="/abc">OPTICS</Link>
                  <Link to="/abc">AMMUNATIONS</Link>
                  <Link to="/abc">COVERS</Link>
                  <Link to="/abc">RIFLE SCOPS</Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* <Link to="/abc">TRAININGS</Link> */}
          <Link to="/abc">EVENTS</Link>
          <Link to="/abc">OUR STORY</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
