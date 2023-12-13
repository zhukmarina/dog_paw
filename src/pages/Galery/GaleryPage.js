import React from "react";
import styles from "./GaleryPage.module.scss";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import LeftSide from "../../components/LeftSide"

import NavBarBreeds from "../../components/NavBarBreeds/NavBarBreeds";




function GaleryPage() {

  return (
    <>

        <div className={styles.rightSideGallery}>
          
          <div className={styles.galleryFilter}>
          <NavBarBreeds />
            <ItemContainer />
          </div>



        </div>
 
    
    </>
  )
}

export default GaleryPage;