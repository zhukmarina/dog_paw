import React from "react";
import styles from "./LeftSide.module.scss"
import { NavLink } from "react-router-dom";


function LeftSide() {
    
    return (
        <div className={styles.leftSide}>

            <div className={styles.leftSideDescriptions}>
                
                <div className={styles.greeting} >
                    <h1>Hi!👋</h1>
                    <span>Welcome to Dog Paw web-site</span>
                </div>
                <div className={styles.start}>
                    <h3>Explore the diversity of dog breeds</h3>
                    <div className={styles.navigationsWrapper}>
                    
                        <div className={styles.navigations}>
                            <div className={styles.rectangle} >
                                <div className={styles.voting}></div>
                            </div>
                            <NavLink exact activeClassName={styles.active} to="/voting">
                            <div className={styles.navBtn}><p>VOTING</p></div>
                          </NavLink>
                          </div>  
                          
                        
                        <div className={styles.navigations}>
                            <div className={styles.rectangle}>
                            <div className={styles.breeds}/>
                            </div>
                            <NavLink exact activeClassName={styles.active} to="/breeds">
                            <div className={styles.navBtn}><p>BREEDS</p></div>
                            </NavLink>
                        </div>
                        <div className={styles.navigations}>
                            <div className={styles.rectangle}>
                            <div className={styles.gallery} />
                            </div>
                            <NavLink exact activeClassName={styles.active} to="/gallery">
                            <div className={styles.navBtn}><p>GALLERY</p></div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LeftSide;