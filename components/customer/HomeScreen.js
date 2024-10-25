import React from 'react';
import { View, Text, Image, FlatList, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const dataCategories = [  
  { id: '1', name: 'Cake', icon: require('../../assets/icon1.png') },
  { id: '2', name: 'Pastry', icon: require('../../assets/icon2.jpeg') },
  { id: '3', name: 'Cup Cake', icon: require('../../assets/icon3.png') },
  { id: '4', name: 'Donuts', icon: require('../../assets/icon4.jpeg') },
  { id: '5', name: 'Biscuits', icon: require('../../assets/icon5.png') },
  { id: '6', name: 'Biscuits', icon: require('../../assets/icon5.png') },
];

const popularCakes = [
  { id: '1', name: 'Special Wedding Cake', price: '$185.60', flavor: 'Creamy', image: require('../../assets/img1.jpeg') },
  { id: '2', name: 'Birthday Cake', price: '$250.90', flavor: 'Blackforest', image: require('../../assets/black.jpeg') },
  { id: '3', name: 'Birthday Cake', price: '$250.90', flavor: 'Fruitcake', image: require('../../assets/caki.jpeg') },
  { id: '4', name: 'Birthday Cake', price: '$250.90', flavor: 'Heartcake', image: require('../../assets/h.jpeg') },
  { id: '5', name: 'Birthday Cake', price: '$250.90', flavor: 'combo', image: require('../../assets/co26.jpeg') },
  // Add more cakes if necessary
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen = (categoryId) => {
    if (categoryId === '1') {
      navigation.navigate('Bestseller');
    } else if (categoryId === '2') {
      navigation.navigate('Allcakes');
    } else if (categoryId === '3') {
      navigation.navigate('CupCakeScreen');
    } else if (categoryId === '4') {
      navigation.navigate('DonutScreen');
    } else if (categoryId === '5') {
      navigation.navigate('BiscuitScreen');
    } else if (categoryId === '6') {
    }
  };

  const navigateToSeeAll = () => {
    navigation.navigate('Seeall');
  };

  const navigateToCarts = () => {
    navigation.navigate('CartScreen');
  };

  const navigateToProfile = () => {
    navigation.navigate('profile'); // Update this to your intended screen name
  };

  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      {/* Header with Top Icon */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity onPress={navigateToProfile}>
          <Image source={require('../../assets/img3.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToCarts}>
          <Image source={require('../../assets/img4.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>

      {/* Title and Search Bar */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 8 }}>What would you like to eat?</Text>
      <View style={{ flexDirection: 'row', marginTop: 16, backgroundColor: '#f5f5f5', padding: 8, borderRadius: 8 }}>
        <TextInput placeholder="Search here..." style={{ flex: 1 }} />
        <TouchableOpacity>
          <Image source={require('../../assets/img5.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>

      {/* Category Section */}
      <View style={{ marginTop: 24 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Discover by category</Text>
          <TouchableOpacity>
            <Text style={{ color: 'orange' }}>See All →</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={dataCategories}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToScreen(item.id)}>
              <View style={{ alignItems: 'center', marginRight: 16 }}>
                <Image source={item.icon} style={{ width: 50, height: 50, borderRadius: 25, marginBottom: 8 }} />
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 16 }}
        />
      </View>

      {/* Lottie Animation and Title */}
      <View style={styles.container}>
        <LottieView
          source={require('../../assets/icon.json')}
          autoPlay
          loop
          style={{ width: 1000, height: 250 }}
        />
        <Text style={styles.title}>Cake Screen</Text>
        <Text style={styles.description}>Here are some delicious cakes!</Text>
      </View>

      {/* Popular Cakes Section */}
      <View style={{ marginTop: 16 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Popular Cakes</Text>
          <TouchableOpacity onPress={navigateToSeeAll}>
            <Text style={{ color: 'orange' }}>See All →</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={popularCakes}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ width: 150, marginRight: 16, backgroundColor: 'skyblue', borderRadius: 8, padding: 8 }}>
              <Image source={item.image} style={{ width: '100%', height: 100, borderRadius: 8 }} />
              <Text style={{ marginTop: 8, fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ color: 'gray', marginBottom: 8 }}>{item.flavor}</Text>
              <Text style={{ fontWeight: 'bold' }}>{item.price}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 16 }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
});

export default HomeScreen;
