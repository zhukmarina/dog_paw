import React from 'react';
import HomePage from '../pages/Home/HomePage';
import GaleryPage from '../pages/Galery/GaleryPage';
import VotingPage from '../pages/Voting/VotingPage';
import BreedsPage from "../pages/Breeds/BreedsPage";
import SinglePetPage from '../pages/SinglePet/SinglePetPage';
import LikedDogsList from "../pages/LikedDogsList/LikedDogsList"
import DislikedDogsList from "../pages/DislikedDogsList/DislikedDogsList"
import {Routes,Route,} from "react-router-dom";
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/gallery" element={<GaleryPage/>} />
        <Route path="/voting" element={<VotingPage/>} />
        <Route path="/breeds" element={<BreedsPage/>} />
        <Route path="/:name" element={<SinglePetPage />}/>
        <Route path="/like" element={<LikedDogsList />}/>
        <Route path="/dislike" element={<DislikedDogsList />}/>
     </Routes>
    
  );
}

export default Routers;
