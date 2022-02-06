import React from 'react';
import { Movie } from '../interfaces/movieInterface';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
}

const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{ 
            height: ( title ) ? 260 : 220 
        }}>
            {
                title && <Text style={styles.categoria}>{title}</Text>
            }
            
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <MoviePoster movie={item} width={140} height={200} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    categoria: {
        fontSize: 23, 
        fontWeight: 'bold', 
        marginLeft: 10, 
        color: '#000', 
        opacity: 0.9 ,
        marginBottom: 10
    }
});

export default HorizontalSlider;
