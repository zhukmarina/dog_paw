import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import styles from "./Search.module.scss"
import { fetchDogs, searchFetchDogs } from "../../appStore/actionCreators/actionCreators";
import { debounce } from 'lodash';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { useUserAuth } from "../../context/UserAuthContext";
import LoginIcon from '@mui/icons-material/Login';

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const debouncedSearch = debounce((query) => dispatch(searchFetchDogs(query)), 300);
  let navigate = useNavigate();
  const { user } = useUserAuth();

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearch(query);
    if (query.length >= 3) {
      debouncedSearch(query);
    } else {
      dispatch(fetchDogs());
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
    setSearch("");
  };

  const { logOut } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <div className={styles.rootSearch}>
{user? (<div>
        <input
          type="search"
          placeholder="Search"
          className={styles.searchInput}
          onChange={handleSearchChange}
          onClick={handleKeyPress}
          value={search}

          startAdornment={
            <InputAdornment position="start">
              <SearchIcon className={styles.searchIcon} />
            </InputAdornment>
          }
        />
      </div>):("")}
      

      <div className={styles.btnLikePanel}>
        {user && user.displayName ? (<>
          <Link to="/like"><div className={styles.btnLike}><SentimentSatisfiedOutlinedIcon color="danger" /></div></Link>
          <Link to="/favourites"><div className={styles.btnLike}><FavoriteBorderOutlinedIcon /></div></Link>
          <Link to="/dislike"><div className={styles.btnLike}><SentimentVeryDissatisfiedIcon /></div></Link>


          <div className={styles.btnLike} onClick={handleLogout}>
            <LogoutIcon />
          </div></>
        ) : (<Link to="/">
          <div className={styles.btnLike} >
            <LoginIcon />
          </div></Link>
        )}
      </div>
    </div>
  );

}

export default Search;