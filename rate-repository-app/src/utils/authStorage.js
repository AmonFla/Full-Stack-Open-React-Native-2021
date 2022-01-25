import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage
    const rawAccessToken = await AsyncStorage.getItem(
      `${this.namespace}:AccessToken`
    );
    return rawAccessToken?rawAccessToken:null;
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    await AsyncStorage.setItem(
      `${this.namespace}:AccessToken`,
      accessToken
    ); 
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${this.namespace}:AccessToken`);
  }
}

export default AuthStorage;