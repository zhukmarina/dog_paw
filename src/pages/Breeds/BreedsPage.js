import React from "react";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import styles from "./BreedsPage.module.scss"

import NavBarBreeds from "../../components/NavBarBreeds/NavBarBreeds";


function BreedsPage() {

  return (
    <>

        <div className={styles.rightSideBreeds}>
          
          <div className={styles.breedsFilter}>
            <NavBarBreeds />
            <ItemContainer />
          </div>
      </div>
    </>
  )
}

export default BreedsPage;