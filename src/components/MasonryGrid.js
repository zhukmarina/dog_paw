import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import  { useEffect,} from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getData } from "../../src/appStore/actionCreators/actionCreators";
import { Link,  } from "react-router-dom"
import { Grid, Typography } from "@mui/material";

function MasonryGrid() {

    const {items}  = useSelector(( {items} ) => items, shallowEqual);

    return (
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={6} sm={4} md={3} key={item.id}>
            <Link
              to={`/${item.name}`}
              className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition-all duration-200"
            >
              <img
                src={item.image.url}
                alt={item.name}
                style={{ width: "100%", display: "block", borderRadius: "8px" }}
              />
              <Typography variant="subtitle1" color="textPrimary" align="center">
                {item.name}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  }
  
    
export default MasonryGrid;