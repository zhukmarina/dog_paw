import React from "react";
import styles from "./LeftSide.module.scss"
import { NavLink } from "react-router-dom";
import { useUserAuth } from '../../context/UserAuthContext';

function LeftSide() {
    const { user } = useUserAuth();
    return (
        <div className={styles.leftSide}>

            <div className={styles.leftSideDescriptions}>

                <div className={styles.greeting} >
                    {user && user.displayName ? (
                        <><h1>Hi,{user.displayName}!👋</h1>
                            <span>Welcome to Dog Paw web-site</span></>

                    ) : (<><h1>Hi!👋 </h1>
                        <span>Want to see cute dogs? </span>
                        <h3>Log in or sign up now!</h3> </>

                    )}


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
                                <div className={styles.breeds} />
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