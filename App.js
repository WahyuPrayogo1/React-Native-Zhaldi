import React from 'react';
import Navigation from './navigation/Navigation';
import { FriendProvider } from './context/FriendContext';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <FriendProvider>
      <Navigation />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </FriendProvider>
  );
};

export default App;
