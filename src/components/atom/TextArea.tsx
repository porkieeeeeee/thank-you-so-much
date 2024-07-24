import styled from "@emotion/styled";
import { useState } from "react";

interface ITextAreaProps {
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ placeholder, value, onChange }: ITextAreaProps) => {
    const [textAreaValue, setTextAreaValue] = useState<string>(value);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaValue(event.target.value);
        onChange(event);
    };

    return <Container placeholder={placeholder} value={textAreaValue} onChange={handleChange} />;
};

const Container = styled.textarea`
    width: 100%;
    height: 220px;
    padding: 12px 14px;
    border: none;
    border-radius: 10px;
    outline: none;
    resize: none;
    background-color: rgba(255, 255, 255, 0.4);
    color: #fff;

    ::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
`;

export default TextArea;
