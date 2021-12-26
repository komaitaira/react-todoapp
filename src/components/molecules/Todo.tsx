import { ReactNode, VFC } from "react";
import styled from "styled-components";
import { CompleteButton } from "../atoms/CompleteButton";
import { DeleteButton } from "../atoms/DeleteButton";
import { BackButton } from "../atoms/BackButton";
import { List } from "../atoms/List";

type TodoType = {
    children: ReactNode;
    completed: boolean;
};
export const Todo: VFC<TodoType> = (props) => {
    const { children, completed } = props;
    let buttons = null;
    if (completed) {
        buttons = (
            <>
                <CompleteButton>完了</CompleteButton>
                <DeleteButton>削除</DeleteButton>
            </>
        );
    } else {
        buttons = <BackButton>戻す</BackButton>;
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
