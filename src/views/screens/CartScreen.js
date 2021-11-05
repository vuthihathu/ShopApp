import React from "react";
import { FontAwesome,MaterialIcons } from '@expo/vector-icons';
import {
    SafeAreaView, 
    StyleSheet,
    View, Text, Image,
    ScrollView,
    TouchableOpacity,
    Button,FlatList
} from 'react-native';

import dresses from "../../consts/dresses";

const CartScreen = ({navigation}) => {
    const CartCard = ({item}) => {
        return(
            <View style={styles.cartCard}>
                <Image source={item.image} style={{height: 80, width: 80}} />
                <View style ={styles.body}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>{item.name}</Text>
                    <Text style={{fontSize: 13, color: 'grey'}}>
                        {item.ingredients}
                    </Text>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Giá : {item.price}</Text>
                </View>
                <View style={{marginRight: 20, alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>3</Text>
                    <View style={styles.actionBtn}>
                        <FontAwesome name="remove" size={24} color="black" />
                    </View>
                </View>
            </View>
        );
    };

    return(
        <SafeAreaView style={{backgroundColor:'white', flex: 1}}>
        <View style={styles.header}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={navigation.goBack} />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Giỏ hàng </Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 80}}
          data={dresses}
          renderItem={({item}) => <CartCard item={item} />}
          ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
          ListFooterComponent={() => (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 15,
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                 Tổng tiền :
                </Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>1000000</Text>
              </View>
              <View style={{marginHorizontal: 30}}>
              <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.btnContainer}>
                        <Button style={styles.title} title ="CHECKOUT"></Button>
                    </View>
             </TouchableOpacity>
                
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    );
    
};
export default CartScreen;
const styles = StyleSheet.create({
    header: {
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
    },
    body:{
      height: 100,
      marginLeft: 10,
      paddingVertical: 20,
      flex: 1,
      padding:16,
    },
    cartCard: {
      height: 100,
      elevation: 15,
      borderRadius: 10,
      backgroundColor: 'white',
      marginVertical: 10,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    actionBtn: {
      width: 80,
      height: 30,
      backgroundColor:'red',
      borderRadius: 30,
      paddingHorizontal: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
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

  