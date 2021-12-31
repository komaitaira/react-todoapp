import { Button } from "./Button";
import styled from "styled-components";
import { ReactNode, VFC } from "react";

type Props = {
    children: ReactNode;
    incompletedTodo: string[];
    setIncompetedTodo: React.Dispatch<React.SetStateAction<string[]>>;
    completedTodo: string[];
    setCompletedTodo: React.Dispatch<React.SetStateAction<string[]>>;
    index: number;
};
export const CompleteButton: VFC<Props> = (props) => {
    const {
        children,
        incompletedTodo,
        setIncompetedTodo,
        index,
        completedTodo,
        setCompletedTodo,
    } = props;
    const onClickComplete = (index: number) => {
        const newTodos = [...incompletedTodo];
        newTodos.splice(index, 1);
        setIncompetedTodo(newTodos);
        const newCompleteTodos = [...completedTodo, incompletedTodo[index]];
        setCompletedTodo(newCompleteTodos);
    };
    return <SButton onClick={() => onClickComplete(index)}>{children}</SButton>;
};

const SButton = styled(Button)`
    background-color: #3988ee;
`;
