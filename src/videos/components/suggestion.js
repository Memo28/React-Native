import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

function Suggestion(props) {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image 
                    style={styles.cover}
                    source = {require('../../../native.png')}
                />
                <View style={styles.genre}>
                    <Text style={styles.genreText}>
                        Accion
                    </Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>Los Avengers</Text>
                <Text style={styles.year}>2007</Text>
                <Text style={styles.rating}>5 Estrellas</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
    },
    cover : {
        height : 150,
        width : 100,
        resizeMode : 'contain'
    },
    right : {
        paddingLeft : 10,
        justifyContent : 'space-between',

    },
    title : {
        fontSize : 18,
        color : '#09BC8A'
    },
    year : {
        backgroundColor  : '#70b124',
        paddingVertical : 4,
        paddingHorizontal : 6,
        color : 'white',
        fontSize : 11,
        borderRadius : 5,
        overflow : 'hidden',
        alignSelf : 'flex-start'

    },
    rating : {
        color : '#6b6b6b',
        fontSize : 14,
        fontWeight : 'bold'
    },
    genre : {
        position : 'absolute',
        left : 0,
        top : 0,
        backgroundColor : 'black',
        paddingVertical : 5,
        paddingHorizontal : 7 
    },
    genreText : {
        color : 'white',
        fontSize : 11
    }
});

export default Suggestion;