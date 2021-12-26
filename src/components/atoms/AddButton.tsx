import { Button } from "./Button";
import styled from "styled-components";
import { ReactNode, VFC } from "react";

type Props = {
    children: ReactNode;
    todoText: string;
    incompletedTodo: string[];
    setTodoText: React.Dispatch<React.SetStateAction<string>>;
    setIncompetedTodo: React.Dispatch<React.SetStateAction<string[]>>;
};
export const AddButton: VFC<Props> = (props) => {
    const { incompletedTodo, setIncompetedTodo, children, todoText, setTodoText } = props;
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
