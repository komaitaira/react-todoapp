import { Button } from "./Button";
import styled from "styled-components";
import { ReactNode, VFC } from "react";

type Props = {
    children: ReactNode;
    index: number;
    setIncompetedTodo: React.Dispatch<React.SetStateAction<string[]>>;
    incompletedTodo: string[];
};

export const DeleteButton: VFC<Props> = (props) => {
    const { children, incompletedTodo, setIncompetedTodo, index } = props;
    const onClickDelete = (index: number) => {
        const newTodos = [...incompletedTodo];
        newTodos.splice(index, 1);
        setIncompetedTodo(newTodos);
    };
    return <SButton onClick={() => onClickDelete(index)}>{children}</SButton>;
};

const SButton = styled(Button)`
    background-color: #ee3939;
`;
