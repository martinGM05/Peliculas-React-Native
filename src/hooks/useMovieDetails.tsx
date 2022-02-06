import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoadign: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}


export const useMovieDetails = (movieId: number) => {
  
    const [state, setState] = useState<MovieDetails>({
        isLoadign: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async() => {

        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);
        
        const [ movieDetailsResp, castPromiseResp ] =  await Promise.all([movieDetailsPromise, castPromise]);

        setState({
            isLoadign: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })

    }

    useEffect(() => {
        getMovieDetails();
    }, []);
    
    return {
        ...state
    };

};
