import { Button } from "./Button";
import styled from "styled-components";
import { ReactNode, VFC } from "react";

type Props = {
    children: ReactNode
    index: number;
    setIncompetedTodo: React.Dispatch<React.SetStateAction<string[]>>;
    incompletedTodo: string[];
    completedTodo: string[];
    setCompletedTodo: React.Dispatch<React.SetStateAction<string[]>>;
}
export const BackButton: VFC<Props> = (props) => {
    const { children, incompletedTodo, setIncompetedTodo, completedTodo, setCompletedTodo, index } = props;
    const onClickBack = (index: number) => {
        const newCompletedTodos = [...completedTodo];
        newCompletedTodos.splice(index, 1);
        setCompletedTodo(newCompletedTodos);
        const newIncompletedTodos = [...incompletedTodo, completedTodo[index]];
        setIncompetedTodo(newIncompletedTodos)
    }
    return <SButton onClick={() => onClickBack(index)}>{ children }</SButton>;
};

const SButton = styled(Button)`
    background-color: #eeca39;
`;
