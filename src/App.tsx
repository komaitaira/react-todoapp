import React from "react";
import "./App.css";
import { AddButton } from "./components/atoms/AddButton";
import { Area } from "./components/atoms/Area";
import { InputBox } from "./components/atoms/InputBox";
import { Todo } from "./components/molecules/Todo";

function App() {
    return (
        <div className="App">
            <h1>Todoリスト</h1>
            <Area title="追加">
                <InputBox />
                <AddButton>追加</AddButton>
            </Area>
            <Area title="一覧">
                <ul>
                    <Todo completed={true}>Todo1</Todo>
                    <Todo completed={true}>Todo2</Todo>
                </ul>
            </Area>
            <Area title="完了">
                <ul>
                    <Todo completed={false}>Todo1</Todo>
                    <Todo completed={false}>Todo2</Todo>
                </ul>
            </Area>
        </div>
    );
}

export default App;
