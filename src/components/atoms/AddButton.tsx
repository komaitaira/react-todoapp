import { Button } from "./Button";
import styled from "styled-components";
import { VFC } from "react";
import { Todo } from "../../types/todo";

export const AddButton: VFC<Todo> = (props) => {
    const { children, incompletedTodo, setIncompetedTodo, todoText, setTodoText } = props;
    const onClickAdd = () => {
        if (todoText === "") {
            alert("文字を入力してください");
            return;
        }
        const newTodos = [...incompletedTodo, todoText];
        setIncompetedTodo(newTodos);
        setTodoText("");
    };
    return <SButton onClick={onClickAdd}>{children}</SButton>;
};

const SButton = styled(Button)`
    background-color: #a939ee;
`;
