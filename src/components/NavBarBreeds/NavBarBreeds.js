import React, { useState } from "react";
import Button from '@mui/material/Button';
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
  let { dogs, loading, filteredDog } = useSelector((state) => ({ ...state.getItemReducer }));
  const dispatch = useDispatch();
  const [selectedBreed, setSelectedBreed] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [selectedTemperaments, setSelectedTemperaments] = useState([]);

  // Сортування списку за алфавітом
  const sortBreeds = () => {
    const sortedBreeds = [...dogs].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return sortAscending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    return sortedBreeds;
  };

  const handleBreedChange = (event) => {
    const selectedId = event.target.value;
    setSelectedBreed(selectedId);
    dispatch(sendID(selectedId));
  };

  const handleSortToggle = () => {
    setSortAscending((prevSort) => !prevSort);
  };

  const handleTemperamentChange = (event) => {
    const temp = event.target.value;
    setSelectedTemperaments(temp);
    const filteredByTemperament = dogs.filter((dog) =>
    dog.temperament && dog.temperament.includes(temp)
  );
  console.log(filteredByTemperament); 
  };

  return (
    <div className={styles.root}>
      <Button color="secondary" variant="outlined" size="small"><ArrowBackIosNewIcon /></Button>
      <Button color="secondary" variant="outlined" size="small">BREEDS</Button>
      <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
        <InputLabel id="demo-select-small-label">Select breeds</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
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

      <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
        <InputLabel id="demo-select-temperament-label">Select temperament</InputLabel>
        <Select
       labelId="demo-select-temperament-label"
       id="demo-select-temperament"
       multiple
       value={selectedTemperaments}
       onChange={handleTemperamentChange}
       renderValue={(selected) => selected.join(', ')}
        >
          <MenuItem value="">
            <em>All temperament</em>
          </MenuItem>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Alert">Alert</MenuItem>
          <MenuItem value="Friendly">Friendly</MenuItem>
          <MenuItem value="Obedient ">Obedient </MenuItem>
          <MenuItem value="Protective ">Protective </MenuItem>
          <MenuItem value="Intelligent ">Intelligent </MenuItem>
          <MenuItem value="Loyal">Loyal</MenuItem>
          <MenuItem value="Gentle ">Gentle </MenuItem>
        </Select>
      </FormControl>

      <Button color="secondary" variant="outlined" size="small" onClick={handleSortToggle}>
        <SortByAlphaIcon />
      </Button>
    </div>
  )
}

export default NavBarBreeds;
