import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,ScrollView,TouchableOpacity, Button} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const DetailsScreen = ({navigation, route}) => {
    const item = route.params;
    return(
        <SafeAreaView>
            <View style={styles.header}>
                <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={navigation.goBack} />
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Chi tiết sản phẩm </Text>
            </View>
            <ScrollView>
            <View style = {styles.container}>
                <Image source={item.image} style={{height: 80, width: 80}} />
            </View>

            <View style={styles.details}>
                <Text
                    style={{fontSize: 25, fontWeight: 'bold', color:'black'}}>
                    {item.name}
                </Text>
                <View style={styles.iconContainer}>
                    <MaterialIcons name="favorite-border" size={24} color="black" />
                    
                </View>
                <Text style={styles.detailsText}>
                    {item.ingredients}
                </Text>
            </View>
            <View style={{marginTop: 40, marginBottom: 40}}>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.btnContainer}>
                        <Button color="#fc912d" style={styles.title} title ='Thêm vào giỏ hàng !'
                        onPress={() => navigation.navigate('CartScreen', item)}
                        ></Button>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default DetailsScreen;
const styles = StyleSheet.create({
    header :{
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    container :{
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        backgroundColor: 'pink',
        paddingLeft :10,
        paddingRight :16,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
       
    },
    details: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 40,
        backgroundColor:'pink',
        borderBottomRightRadius :40,
        borderBottomLeftRadius :40,
    },
    iconContainer: {
        backgroundColor:'pink',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    detailsText: {
        marginTop: 10,
        lineHeight: 22,
        fontSize: 16,
        color:'black',
    },
    title: {
        fontWeight: 'bold', 
        fontSize: 18,
    },
    btnContainer: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
});