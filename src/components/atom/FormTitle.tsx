import styled from "@emotion/styled";

interface IFormTitleProps {
    label: string;
}

const FormTitle = ({ label }: IFormTitleProps) => {
    return <Container>{label}</Container>;
};

const Container = styled.h2`
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
`;

export default FormTitle;
