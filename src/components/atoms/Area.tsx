import { ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
    children: ReactNode;
    title: string;
};
export const Area: VFC<Props> = (props) => {
    const { title, children } = props;
    return (
        <SArea>
            <h2>{title}</h2>
            {children}
        </SArea>
    );
};

export const SArea = styled.div`
    margin: 0 auto;
    width: 700px;
`;
