import { ReactNode, VFC } from "react";
import styled from "styled-components";
import { CompleteButton } from "../atoms/CompleteButton";
import { DeleteButton } from "../atoms/DeleteButton";
import { BackButton } from "../atoms/BackButton";
import { List } from "../atoms/List";

type TodoType = {
    children: ReactNode;
    completed: boolean;
    incompletedTodo: string[];
    setIncompetedTodo: React.Dispatch<React.SetStateAction<string[]>>;
    completedTodo: string[];
    setCompletedTodo: React.Dispatch<React.SetStateAction<string[]>>;
    index: number;
};
export const Todo: VFC<TodoType> = (props) => {
    const {
        children,
        completed,
        incompletedTodo,
        setIncompetedTodo,
        completedTodo,
        setCompletedTodo,
        index,
    } = props;
    let buttons = null;
    if (completed) {
        buttons = (
            <>
                <CompleteButton
                    incompletedTodo={incompletedTodo}
                    setIncompetedTodo={setIncompetedTodo}
                    completedTodo={completedTodo}
                    setCompletedTodo={setCompletedTodo}
                    index={index}
                >
                    完了
                </CompleteButton>
                <DeleteButton
                    incompletedTodo={incompletedTodo}
                    setIncompetedTodo={setIncompetedTodo}
                    index={index}
                >
                    削除
                </DeleteButton>
            </>
        );
    } else {
        buttons = (
            <BackButton
                incompletedTodo={incompletedTodo}
                setIncompetedTodo={setIncompetedTodo}
                completedTodo={completedTodo}
                setCompletedTodo={setCompletedTodo}
                index={index}
            >
                戻す
            </BackButton>
        );
    }
    return (
        <STodo>
            <List>{children}</List>
            {buttons}
        </STodo>
    );
};
export const STodo = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 4px;
    font-size: 24px;
`;
