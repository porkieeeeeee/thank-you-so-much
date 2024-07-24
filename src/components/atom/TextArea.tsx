import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import LimitText from "./LimitText";
import { EToastType, showToast } from "Toast";

interface ITextAreaProps {
    placeholder?: string;
    value: string;
    minLength: number;
    maxLength: number;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ placeholder, value, minLength, maxLength, onChange }: ITextAreaProps) => {
    const [textAreaValue, setTextAreaValue] = useState<string>(value);
    const [showToastOnce, setShowToastOnce] = useState<boolean>(false);

    useEffect(() => {
        if (textAreaValue.length >= maxLength && !showToastOnce) {
            showToast({ type: EToastType.ERROR, message: `응원은 ${maxLength}자 이하로 입력 가능합니다.` });
            setShowToastOnce(true);
        }
    }, [textAreaValue, maxLength, showToastOnce]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaValue(event.target.value);
        setShowToastOnce(false);
        onChange(event);
    };

    return (
        <Container>
            <Item
                placeholder={placeholder}
                value={textAreaValue}
                minLength={minLength}
                maxLength={maxLength}
                onChange={handleChange}
            />
            <LimitText valueLength={textAreaValue.length} maxLength={maxLength} />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Item = styled.textarea`
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

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        border-radius: 3px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: rgba(255, 255, 255, 0.5);
    }

    ::-webkit-scrollbar-track {
        border-radius: 3px;
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

export default TextArea;
