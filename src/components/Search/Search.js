import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import styles from "./Search.module.scss"
import { fetchDogs,searchFetchDogs } from "../../appStore/actionCreators/actionCreators";
import { debounce } from 'lodash';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Link } from  "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const debouncedSearch = debounce((query) => dispatch(searchFetchDogs(query)), 300);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearch(query);
    if (query.length >= 3) { // Виконання пошуку після введення 3 символів (можна встановити іншу кількість)
      debouncedSearch(query); // Виклик функції затриманого пошуку
    } else {
      dispatch(fetchDogs()); // Якщо введено менше 3 символів, викликаємо інший метод, наприклад, fetchDogs
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      debouncedSearch.cancel();
      dispatch(searchFetchDogs(search));
      clearSearchInput();
    }
  };

  const clearSearchInput = () => {
    setSearch(""); // Очистка поля введення
  };

  return (
    <div className={styles.rootSearch}>
     
         <div>
         <input
          type="search"
          placeholder="Search"
          className={styles.searchInput} 
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          value={search}
          
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon className={styles.searchIcon} /> 
            </InputAdornment>
          }
        />
    </div>
      
      <div className={styles.btnLikePanel}>
      <Link to="/like"><div className={styles.btnLike}><SentimentSatisfiedOutlinedIcon color="danger" /></div></Link>
      <div className={styles.btnLike}><FavoriteBorderOutlinedIcon /></div>
      <Link to="/dislike"><div className={styles.btnLike}><SentimentVeryDissatisfiedIcon /></div></Link>
</div>
    </div>
  );

}

export default Search;