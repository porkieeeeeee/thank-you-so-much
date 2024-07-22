import styled from "@emotion/styled";

interface IButtonProps {
    label: string;
    type: "button" | "submit" | "reset";
    onClick: () => void;
}

const Button = ({ label, type, onClick }: IButtonProps) => {
    return (
        <Container type={type} onClick={onClick}>
            {label}
        </Container>
    );
};

const Container = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 7px;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    background: linear-gradient(45deg, #f2625e, #da4d48);
`;

export default Button;
