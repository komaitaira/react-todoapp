import { VFC } from "react";
import styled from "styled-components";
type Props = {
    todoText: string;
    setTodoText: React.Dispatch<React.SetStateAction<string>>;
};
export const InputBox: VFC<Props> = (props) => {
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
