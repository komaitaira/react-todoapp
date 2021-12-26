import { Button } from "./Button";
import styled from "styled-components";
import { ReactNode, VFC } from "react";

type Props = {
    children: ReactNode
}
export const DeleteButton: VFC<Props> = (props) => {
    const { children } = props;
    return <SButton>{ children }</SButton>;
};

const SButton = styled(Button)`
    background-color: #ee3939;
`;