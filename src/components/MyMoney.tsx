import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { changeName, incrementTotal } from '../features/myMoney/myMoneySlice';
import { reset } from '../features/counter/counterSlice';

const MyMoney: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const myName = useSelector((state: RootState) => state.myMoney.name);
  const totalMoney = useSelector((state: RootState) => state.myMoney.total)

  const dispatch: AppDispatch = useDispatch();

  return (
    <div style={{ border: "2px solid black", padding: "10px", borderRadius: "8px" }}>
      <h1>My money</h1>
      <div>name: {myName}</div>
      <div>total money: {totalMoney}</div>
      <button onClick={() => dispatch(changeName())}>change name</button>
      <button onClick={() => {
        dispatch(incrementTotal(count));
        dispatch(reset());
        }}>add {count} to my money</button>
    </div>
  );
};

export default MyMoney;
