import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MyMoneyState {
  total: number;
  name: string;
  id: number;
  phones: number[];
  emails: string[];
}

const initialState: MyMoneyState = {
    total: 0,
    name: 'No Name',
    id: -1,
    phones: [],
    emails: []
};

const myMoneySlice = createSlice({
  name: 'myMoney',
  initialState,
  reducers: {
    changeName: (state) => {
        state.name = "New Person";
    },
    incrementTotal: (state, action: PayloadAction<number>) => {
        state.total += action.payload;
    },
  },
});

export const {changeName, incrementTotal} = myMoneySlice.actions;
export default myMoneySlice.reducer;
