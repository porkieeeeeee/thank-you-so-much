import styled from "@emotion/styled";
import { useState } from "react";

interface IInputProps {
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, value, onChange }: IInputProps) => {
    const [inputValue, setInputValue] = useState<string>(value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        onChange(event);
    };

    return <Container type='text' placeholder={placeholder} value={inputValue} onChange={handleChange} />;
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
