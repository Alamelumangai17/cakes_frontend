import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const cakesData = [
  { id: '1', name: 'Chocolate Cake', price: '$15.99', flavor: 'Chocolate', image: require('../../assets/ch.jpeg') },
  { id: '2', name: 'Vanilla Cake', price: '$12.99', flavor: 'Vanilla', image: require('../../assets/bu.jpeg') },
  { id: '3', name: 'Red Velvet Cake', price: '$18.50', flavor: 'Velvet', image: require('../../assets/co7.jpeg') },
  { id: '4', name: 'Cheesecake', price: '$20.00', flavor: 'Cheese', image: require('../../assets/white.jpeg') },
  { id: '5', name: 'Fruit Cake', price: '$22.50', flavor: 'Fruit', image: require('../../assets/carr.jpeg') },
  { id: '6', name: 'Carrot Cake', price: '$14.99', flavor: 'Carrot', image: require('../../assets/co6.jpeg') },
  { id: '7', name: 'Pineapple Upside Down Cake', price: '$17.99', flavor: 'Pineapple', image: require('../../assets/co5.jpeg') },
  { id: '8', name: 'Black Forest Cake', price: '$19.99', flavor: 'Cherry', image: require('../../assets/co1.jpeg') },
  { id: '9', name: 'Lemon Cake', price: '$13.99', flavor: 'Lemon', image: require('../../assets/co4.jpeg') },
  { id: '10', name: 'Coffee Cake', price: '$16.99', flavor: 'Coffee', image: require('../../assets/co7.jpeg') },
];

const AllCakesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Cakes</Text>
      <FlatList
        data={cakesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cakeItem}>
            <Image source={item.image} style={styles.cakeImage} />
            <View style={styles.cakeInfo}>
              <Text style={styles.cakeName}>{item.name}</Text>
              <Text style={styles.cakeFlavor}>{item.flavor}</Text>
              <Text style={styles.cakePrice}>{item.price}</Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgb(0, 0, 0)',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    backgroundColor:'white',
    textAlign:'center',
  },
  cakeItem: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 8,
  },
  cakeImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  cakeInfo: {
    flex: 1,
    marginLeft: 8,
    justifyContent: 'center',
  },
  cakeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cakeFlavor: {
    color: 'gray',
  },
  cakePrice: {
    fontWeight: 'bold',
    marginTop: 4,
  },
});

export default AllCakesScreen;


// import React from 'react';
// import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

// const cakesData = [
//   { id: '1', name: 'Chocolate Cake', price: '$15.99', flavor: 'Chocolate', image: 'https://example.com/cake1.jpg' },
//   { id: '2', name: 'Vanilla Cake', price: '$12.99', flavor: 'Vanilla', image: 'https://example.com/cake2.jpg' },
//   { id: '3', name: 'Red Velvet Cake', price: '$18.50', flavor: 'Velvet', image: 'https://example.com/cake3.jpg' },
//   { id: '4', name: 'Cheesecake', price: '$20.00', flavor: 'Cheese', image: 'https://example.com/cake4.jpg' },
//   { id: '5', name: 'Fruit Cake', price: '$22.50', flavor: 'Fruit', image: 'https://example.com/cake5.jpg' },
//   { id: '6', name: 'Carrot Cake', price: '$14.99', flavor: 'Carrot', image: 'https://example.com/cake6.jpg' },
//   { id: '7', name: 'Pineapple Upside Down Cake', price: '$17.99', flavor: 'Pineapple', image: 'https://example.com/cake7.jpg' },
//   { id: '8', name: 'Black Forest Cake', price: '$19.99', flavor: 'Cherry', image: 'https://example.com/cake8.jpg' },
//   { id: '9', name: 'Lemon Cake', price: '$13.99', flavor: 'Lemon', image: 'https://example.com/cake9.jpg' },
//   { id: '10', name: 'Coffee Cake', price: '$16.99', flavor: 'Coffee', image: 'https://example.com/cake10.jpg' },
// ];

// const AllCakesScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>All Cakes</Text>
//       <FlatList
//         data={cakesData}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.cakeItem}>
//             <Image source={{ uri: item.image }} style={styles.cakeImage} />
//             <View style={styles.cakeInfo}>
//               <Text style={styles.cakeName}>{item.name}</Text>
//               <Text style={styles.cakeFlavor}>{item.flavor}</Text>
//               <Text style={styles.cakePrice}>{item.price}</Text>
//             </View>
//           </View>
//         )}
//         showsVerticalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   cakeItem: {
//     flexDirection: 'row',
//     marginBottom: 16,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 8,
//     overflow: 'hidden',
//     padding: 8,
//   },
//   cakeImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//   },
//   cakeInfo: {
//     flex: 1,
//     marginLeft: 8,
//     justifyContent: 'center',
//   },
//   cakeName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   cakeFlavor: {
//     color: 'gray',
//   },
//   cakePrice: {
//     fontWeight: 'bold',
//     marginTop: 4,
//   },
// });

// export default AllCakesScreen;
