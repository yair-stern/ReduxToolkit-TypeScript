import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import myMoneyReducer from '../features/myMoney/myMoneySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    myMoney: myMoneyReducer,
  },
});

//RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

