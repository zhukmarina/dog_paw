import React, { useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import styles from "./NavBarBreeds.module.scss"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { sendID } from "../../appStore/actionCreators/actionCreators";


function NavBarBreeds() {
  const { dogs } = useSelector((state) => ({ ...state.getItemReducer }));
  const dispatch = useDispatch();
  const [selectedBreed, setSelectedBreed] = useState("");
  const [sortAscending, setSortAscending] = useState(true);

  const handleBreedChange = (event) => {
    const selectedId = event.target.value;
    setSelectedBreed(selectedId);
    dispatch(sendID(selectedId));
  };

  const handleSortToggle = () => {
    setSortAscending((prevSort) => !prevSort);
  };

  const sortedBreeds = [...dogs].sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    return sortAscending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  });


  return (
    <div className={styles.root}>
      <div className={styles.customButton}><ArrowBackIosNewIcon /></div>

      <FormControl sx={{ m: 1, minWidth: 575 }} size="small">
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          value={selectedBreed}
          onChange={handleBreedChange}
        >
          <MenuItem value="">
            <em>All breeds</em>
          </MenuItem>
          {dogs.map((dog) => (
            <MenuItem value={dog.id} key={dog.id}>
              {dog.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </div>
  )
}

export default NavBarBreeds;
