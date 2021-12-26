import styled from "styled-components";
import { Todo } from "../../types/todo";

export const InputBox = (props: Pick<Todo, "todoText" | "setTodoText">) => {
    const { todoText, setTodoText } = props;
    const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        setTodoText(target.value);
    };
    return (
        <SInput
            type="text"
            placeholder="TODOを入力"
            value={todoText}
            onChange={onChangeTodoText}
        />
    );
};

export const SInput = styled.input`
    padding: 6px 24px;
    border-radius: 9999px;
    border: 1px solid gray;
    outline: none;
`;
