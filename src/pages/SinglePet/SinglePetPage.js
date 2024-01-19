import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import styles from "./SinglePetPage.module.scss"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BreedCarousel from "../../components/BreedCarousel/BreedCarousel";

// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';

export default function SingleDog() {
  const [dog, setDog] = useState([])
  const { name } = useParams()


  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/breeds/search?q=${name}`
        )
        const data = await res.json()
        setDog(data)
        
      } catch (error) {
        console.error(error);
        
      }
    }

    fetchSingleDogData()
  }, [name])

  return (
    <>
      <section className={styles.root}>

        {dog.map((item) => (
          <div
            key={item.id}
            className={styles.container}
          >

            <div className={styles.navigation}>
              <Link to="/breeds" >
                <div className={styles.goback}>
                  <ArrowBackIosNewIcon />
                </div></Link>
              <div className={styles.titleNav}>BREEDS</div>
              <div className={styles.singleId}>{item.id}</div>
             
            </div>



            <div className={styles.pic}>
            <BreedCarousel id={item.id} /></div>

            <div className={styles.description}>
              <div className={styles.baseInfo}>
                <h1 className={styles.title}>
                  {item.name}
                </h1>
                <p>
                  {item.bred_for}
                </p>
              </div>


              <div className={styles.moreInfo}>

                <div className={styles.characteristic}>
                  <span >Temperament:</span>{" "}
                  {item.temperament}
                </div>

                <ul>

                  <li className={styles.characteristic}>
                    <span >Origin:</span>{" "}
                    {item.origin ? item.origin : item.country_code}
                  </li>
                  <li className={styles.characteristic}>
                    <span >Weight:</span>{" "}
                    {item.weight.metric} kgs
                  </li>

                  <li className={styles.characteristic}>
                    <span >Lifespan:</span>{" "}
                    {item.life_span}
                  </li>
                </ul>


              </div>


            </div>
          </div>
        ))}
      </section>
    </>
  )
}