import React from 'react';
import './App.css';
import { AddButton } from './components/atoms/AddButton';
import { DeleteButton } from './components/atoms/DeleteButton';

function App() {
  return (
    <div className="App">
      <AddButton>追加</AddButton>
      <DeleteButton>削除</DeleteButton>
    </div>
  );
}

export default App;
