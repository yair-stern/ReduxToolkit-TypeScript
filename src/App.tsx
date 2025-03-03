import React from 'react';
import Counter from './components/Counter';
import MyMoney from './components/MyMoney';

const App: React.FC = () => {
  return (
    <div>
      <h1>Redux Toolkit + TypeScript, Yair Stern</h1>
      <hr/>
      <Counter />
      <MyMoney />
    </div>
  );
};

export default App;
