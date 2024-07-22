import styled from "@emotion/styled";
import React from "react";

interface IMainTitleProps {
    label: string;
}

const MainTitle = ({ label }: IMainTitleProps) => {
    const parts = label.split("포키");
    return (
        <Container>
            {parts.map((part, index) => (
                <React.Fragment key={index}>
                    {part}
                    {index !== parts.length - 1 && <Porkie>포키</Porkie>}
                </React.Fragment>
            ))}
        </Container>
    );
};

const Container = styled.h1`
    margin-bottom: 50px;
    color: #fff;
    font-size: 40px;
    font-weight: 600;
    line-height: 50px;
    white-space: pre-wrap;
    text-align: center;
`;

const Porkie = styled.span`
    text-shadow: 2px 6px 10px #da4d48;
`;

export default MainTitle;
