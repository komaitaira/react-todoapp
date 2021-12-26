import styled from "styled-components";

export const InputBox = () => {
    return <SInput type="text" placeholder="TODOを入力" />;
};

export const SInput = styled.input`
    padding: 6px 24px;
    border-radius: 9999px;
    border: 1px solid gray;
    outline: none;
`;
