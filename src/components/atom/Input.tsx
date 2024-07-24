import styled from "@emotion/styled";
import { useState } from "react";
import LimitText from "./LimitText";

interface IInputProps {
    placeholder?: string;
    value: string;
    minLength: number;
    maxLength: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, value, minLength, maxLength, onChange }: IInputProps) => {
    const [inputValue, setInputValue] = useState<string>(value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        onChange(event);
    };

    return (
        <Container>
            <Item
                type='text'
                placeholder={placeholder}
                value={inputValue}
                minLength={minLength}
                maxLength={maxLength}
                onChange={handleChange}
            />
            <LimitText valueLength={inputValue.length} maxLength={maxLength} />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Item = styled.input`
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
