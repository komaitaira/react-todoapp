import { ReactNode, VFC } from "react";
import styled from "styled-components";

type ListType = {
    children: ReactNode
}
export const List: VFC<ListType> = (props) => {
    const { children } = props;
    return <SList>{ children}</SList>;
};
export const SList = styled.li`
    padding: 10px;
    margin-right: 50px;
`;
