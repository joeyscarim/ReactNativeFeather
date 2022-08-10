import axios from 'axios';
import create from 'zustand';

export const useAuthStore = create(set => ({
  email: '',
  jwtToken: '',
  oneSignalToken: '',
  setEmail: (email: string) => set({email}),
  setJwtToken: (jwtToken: string) => set({jwtToken}),
  setOneSignalToken: (oneSignalToken: string) => set({oneSignalToken}),
}));

export function useBroadcasterV3() {
  //   const {email, jwtToken, oneSignalToken} = useAuthStore(state => state);
  const setEmail = useAuthStore(state => state.setEmail);
  const setJwtToken = useAuthStore(state => state.setJwtToken);
  const setOneSignalToken = useAuthStore(state => state.setOneSignalToken);

  const checkUser = async () => {
    // check local storage first
    // set user if found
  };

  const login = async (email: string, password: string) => {
    // call axios to login
    try {
      // await axios.get('/api/v3/login')
      const response = await axios.post('https://reqres.in/api/login', {
        email: email,
        password: password,
      });
      const {token} = response.data;
      setJwtToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    // call axios to logout
    setJwtToken('');
    setEmail('');
    setOneSignalToken('');
  };

  return {
    login,
    logout,
  };
}
