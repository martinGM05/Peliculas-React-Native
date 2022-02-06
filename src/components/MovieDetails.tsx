import React from 'react';
import { Text, View, FlatList } from 'react-native';
import currencyFormatter from "currency-formatter";
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import CastItem from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={{marginHorizontal: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <Icon 
                        name="star-outline"
                        color="grey"
                        size={16}
                    />
                    <Text style={{color: '#000', opacity: 0.8}}>{movieFull.vote_average}</Text>
                    <Text style={{marginLeft: 5, color: '#000', opacity: 0.8}}>
                        - {movieFull.genres.map(genre => genre.name).join(', ')}
                    </Text>
                </View>
                {/* Historia */}
                <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold', color: '#000'}}>
                    Historia
                </Text>
                <Text style={{fontSize: 16, color: '#000', opacity: 0.8}}>
                    {movieFull.overview}
                </Text>
                {/* Presupuesto */}
                <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold', color: '#000'}}>
                    Presupuesto
                </Text>
                <Text style={{fontSize: 18, color: '#000', opacity: 0.8}}>
                    {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
                </Text>
            </View>
            {/* Casting */}
            <View style={{marginTop: 10, marginBottom: 1}}>
                <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold', color: '#000', marginHorizontal: 20}}>
                    Actores
                </Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <CastItem actor={item}/> } 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop: 10, height: 70}}
                />
            </View>
        </>
    );
};

export default MovieDetails;
