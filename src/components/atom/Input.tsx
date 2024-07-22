import styled from "@emotion/styled";

interface IInputProps {
    placeholder?: string;
    value?: string;
}

const Input = ({ placeholder, value }: IInputProps) => {
    return <Container placeholder={placeholder} value={value} />;
};

const Container = styled.input`
    width: 100%;
    height: 50px;
    padding: 12px 14px;
    border: none;
    border-radius: 7px;
    outline: none;
    resize: none;
    background-color: rgba(255, 255, 255, 0.4);
    color: #fff;

    ::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
`;

export default Input;
