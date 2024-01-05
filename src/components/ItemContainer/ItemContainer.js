import React, { useEffect, } from 'react';
import { Box, LinearProgress} from '@mui/material';
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { fetchDogs } from "../../appStore/actionCreators/actionCreators";
import { Link, } from "react-router-dom"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function ItemContainer() {

    const dispatch = useDispatch();

    let { dogs, loading, filteredDog } = useSelector((state) => ({ ...state.getItemReducer }));
console.log(dogs)
    useEffect(() => {
        dispatch(fetchDogs());
    }, []);

    return (
        <>
            <div>
                {loading ? (
                    <LinearProgress color="secondary" />
                ) : filteredDog.length === 0
                    ? (

                        <Box sx={{  height: 630, overflowY: 'scroll' }}>
                            <ImageList variant="masonry" cols={3} gap={8}>
                                {dogs.map((item) => (<Link
                                    to={`/${item.name}`}
                                    key={item.id}
                                    className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition-all duration-200"
                                >
                                    <ImageListItem key={item.id}>

                                        <img
                                            srcSet={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg?w=248&fit=crop&auto=format`}
                                            alt={item.title}
                                            loading="lazy"
                                        />

                                    </ImageListItem> </Link>
                                ))}
                            </ImageList>
                        </Box>

                    ) : filteredDog &&
                    filteredDog.map((dog) => {
                        const { id, name, reference_image_id, bred_for } = dog;
                        return (

                            <Box sx={{ width: 640, height: 630, overflowY: 'scroll' }}>
                                <ImageList variant="masonry" cols={1} gap={8}>
                                    <Link
                                        to={`/${name}`}

                                        className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition-all duration-200"
                                    >
                                        <ImageListItem >

                                            <img
                                                srcSet={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                src={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg?w=248&fit=crop&auto=format`}
                                                loading="lazy"
                                            />

                                        </ImageListItem> 
                                        </Link>

                                </ImageList>
                            </Box>

                        );
                    })}
            </div>

        </>
    )
}

export default ItemContainer;