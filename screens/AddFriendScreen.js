// AddFriendScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useFriends } from '../context/FriendContext';

const AddFriendScreen = ({ navigation }) => {
  const { addFriend } = useFriends();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleAddFriend = () => {
    if (name.trim() === '' || image.trim() === '') {
      Alert.alert('Error', 'Nama dan URL Gambar tidak boleh kosong');
      return;
    }

    const newFriend = {
      id: Date.now().toString(),
      name,
      image,
    };

    addFriend(newFriend);
    Alert.alert('Sukses', 'Teman berhasil ditambahkan', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
    setName(''); // Mengosongkan form setelah berhasil menambah teman
    setImage('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="URL Gambar"
        value={image}
        onChangeText={setImage}
      />
      <Button title="Tambah Teman" onPress={handleAddFriend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default AddFriendScreen;
