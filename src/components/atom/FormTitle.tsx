import styled from "@emotion/styled";
import { spawn } from "child_process";

interface IFormTitleProps {
    label: string;
    strongLabel?: string;
}

const FormTitle = ({ label, strongLabel = "" }: IFormTitleProps) => {
    return (
        <Container>
            {strongLabel !== "" && <span>{strongLabel}</span>}
            {label}
        </Container>
    );
};

const Container = styled.h2`
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;

    span {
        color: #f2625e;
        font-weight: 700;
    }
`;

export default FormTitle;
