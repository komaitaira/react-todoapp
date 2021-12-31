import React, { useState } from "react";
import "./App.css";
import { AddButton } from "./components/atoms/AddButton";
import { Area } from "./components/atoms/Area";
import { InputBox } from "./components/atoms/InputBox";
import { Todo } from "./components/molecules/Todo";

function App() {
    const [incompletedTodo, setIncompetedTodo] = useState<string[]>([]);
    const [completedTodo, setCompletedTodo] = useState<string[]>([]);
    const [todoText, setTodoText] = useState("");
    return (
        <div className="App">
            <h1>Todoリスト</h1>
            <Area title="追加">
                <InputBox todoText={todoText} setTodoText={setTodoText} />
                <AddButton
                    incompletedTodo={incompletedTodo}
                    setIncompetedTodo={setIncompetedTodo}
                    todoText={todoText}
                    setTodoText={setTodoText}
                >
                    追加
                </AddButton>
            </Area>
            <Area title="一覧">
                <ul>
                    {incompletedTodo.map((todo, index) => {
                        return (
                            <Todo
                                key={todo}
                                completed={true}
                                incompletedTodo={incompletedTodo}
                                setIncompetedTodo={setIncompetedTodo}
                                completedTodo={completedTodo}
                                setCompletedTodo={setCompletedTodo}
                                index={index}
                            >
                                {todo}
                            </Todo>
                        );
                    })}
                </ul>
            </Area>
            <Area title="完了">
                <ul>
                    {completedTodo.map((todo, index) => {
                        return (
                            <Todo
                                key={todo}
                                completed={false}
                                incompletedTodo={incompletedTodo}
                                setIncompetedTodo={setIncompetedTodo}
                                completedTodo={completedTodo}
                                setCompletedTodo={setCompletedTodo}
                                index={index}
                            >
                                {todo}
                            </Todo>
                        );
                    })}
                </ul>
            </Area>
        </div>
    );
}

export default App;
