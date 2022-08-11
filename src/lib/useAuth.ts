import axios from 'axios';
import create from 'zustand';
import {persist} from 'zustand/middleware';
import {mmkvStorage} from './storage';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      isLoading: true,
      darkMode: false,
      email: '',
      jwtToken: '',
      pushToken: '',
      logout: () => {
        delete axios.defaults.headers.common['Authorization'];
        set({email: '', jwtToken: '', pushToken: ''});
      },
      setEmail: (email: string) => set({email}),
      setOneSignalToken: (oneSignalToken: string) => set({oneSignalToken}),
      setJwtToken: (jwtToken: string) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
        set({jwtToken});
      },
      // removeJwtToken: () => {
      //   delete axios.defaults.headers.common['Authorization'];
      //   set({jwtToken: ''});
      // },
      setIsLoading: (isLoading: boolean) => set({isLoading}),
    }),
    {
      name: 'auth-user', // name of item in the storage (must be unique)
      getStorage: () => mmkvStorage, // (optional) by default the 'localStorage' is used
      partialize: state => ({jwtToken: state.jwtToken}), // (optional) partialize the state to save only the 'jwtToken'
      // onRehydrateStorage: () => state => {
      //   // state.setIsLoading(false);
      //   // Alert('onRehydrateStorage');
      //   // turn off loading state
      //   state.loading = false;

      //   if (state.jwtToken) {
      //     // state.setIsLoading(false);
      //     // Alert('onRehydrateStorage');
      //     axios.defaults.headers.common[
      //       'Authorization'
      //     ] = `Bearer ${state.jwtToken}`;
      //   }
      // }, // (optional) called when the storage is rehydrated
    },
  ),
);
