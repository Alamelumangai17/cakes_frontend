import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

const ModelPage = ({ navigation }) => {
  const [modelItems, setModelItems] = useState([
    { id: '1', name: 'Blackcupcake', price: 50, image: require('../../assets/ci.jpeg') },
    { id: '2', name: 'Redwelvet', price: 70, image: require('../../assets/cupi.jpeg') },
    { id: '3', name: 'whiteforest', price: 60, image: require('../../assets/io.jpeg') },
    { id: '4', name: 'Cupcakes', price: 40, image: require('../../assets/ioo.jpeg') },
    { id: '5', name: 'Cupcakes', price: 40, image: require('../../assets/hot.jpeg') },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    // <ImageBackground
    //   source={require('../../assets/ba.jpeg')}
    //   style={styles.backgroundImage}
    // >
      <View style={styles.container}>
        <Text style={styles.title}>Cup Cakes</Text>
        <ScrollView>
          {modelItems.map((item) => (
            <View key={item.id} style={styles.modelItem}>
              <Image source={item.image} style={styles.modelItemImage} />
              <Text style={styles.modelItemName}>{item.name}</Text>
              <Text style={styles.modelItemPrice}>Rs.{item.price.toFixed(2)}</Text>
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => addToCart(item)}
              >
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
          style={styles.viewCartButton}
          onPress={() => navigation.navigate('CartScreen', { cart, setCart })}
        >
          <Text style={styles.viewCartButtonText}>View Cart</Text>
        </TouchableOpacity>
      </View>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: 'skyblue',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign:'center',
  },
  // modelItem: {
  //   backgroundColor: 'white',
  //   marginBottom: 16,
  //   borderRadius: 8,
  //   elevation: 2,
  //   padding: 16,
  //
  
// },

modelItem: {
  backgroundColor: 'white',
  marginBottom: 16,
  borderRadius: 8,
  elevation: 2,
  padding: 12, // Reduced padding
  width: '95%',
  height:'20%', // Adjusted width for two columns
  marginRight: 8, // Added margin for spacing
},
  modelItemImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  modelItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  modelItemPrice: {
    fontSize: 16,
  },
  addToCartButton: {
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  addToCartButtonText: {
    color: 'white',
  },
  viewCartButton: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  viewCartButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ModelPage;












