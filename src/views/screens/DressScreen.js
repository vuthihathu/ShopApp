import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Button
} from 'react-native';

import dresses from "../../consts/dresses";
import { MaterialIcons } from '@expo/vector-icons';

const DressScreen = ({navigation}) =>{

  const ListDresses = ({dress}) => {
    return (
        <View style ={styles.shadow}>
            <View style ={styles.container}>
                <Image 
                    style ={styles.img}
                    source={dress.image}>
                </Image>
                <View style = {styles.info}>
                    <Text style={styles.name}>{dress.name} </Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}> Giá : {dress.price}</Text>
                        <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => navigation.navigate('DetailsScreen', dress)}
                        >
                            <Text style={styles.details} > Chi tiết  </Text>
                        </TouchableOpacity>
                        <Button 
                        style ={styles.carText} 
                        title ='Thêm' 
                        onPress={() => navigation.navigate('CartScreen', dress)}
                        ></Button>

                    </View>
                </View>
        </View>
     </View>
    );
  };
  return(
      <SafeAreaView>
            <View style={styles.header}>
              
              <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={navigation.goBack} />
              <Text style={{fontSize: 20, fontWeight: 'bold'}} > Váy đẹp </Text>
            </View>
            <FlatList 
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={dresses}
                renderItem = {
                    ({item}) =>
                      <View style ={styles.wapper}>
                          <ListDresses dress ={item} />
                      </View>
                  }
            /> 
        </SafeAreaView>
    
);
};

const styles = StyleSheet.create({
    shadow :{
     shadowColor :'#000',
     shadowOpacity:0.1,
     shadowRadius:20,
     shadowOffset :{width :0 ,height :0},
     
    },
    container :{
     marginBottom :20 ,
     borderRadius : 4,
     backgroundColor :'#FFF',
     overflow :'hidden',
     paddingHorizontal :8,
     paddingTop :16,
    },
    img :{
        width:64,
        height:64,
        borderTopLeftRadius :4 ,
        borderBottomLeftRadius :4,
    },
    info :{
        marginTop :10,
    },
    name :{
        fontSize : 16,
        marginBottom :8
    },
    priceRow :{
        flexDirection:'row',
        alignItems :'center'
    },
    price :{
        flex :1,
        fontSize :14,
        color :'red',
    },
    carText :{
        fontSize:6,
        color:'green',
    },
    wapper :{
        flex :1,
        paddingHorizontal :5,
    },
    details :{
        color : 'blue',
    },
    header :{
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
 });
export default DressScreen;

