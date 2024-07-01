// FriendListScreen.js
import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useFriends } from '../context/FriendContext';

const FriendListScreen = ({ navigation }) => {
  const { friends } = useFriends();

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FriendDetail', { friend: item })}>
            <Text style={styles.friendName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  friendName: {
    fontSize: 18,
    marginBottom: 12,
  },
});

export default FriendListScreen;
