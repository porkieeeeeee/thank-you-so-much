import styled from "@emotion/styled";

interface ITextAreaProps {
    placeholder?: string;
    value?: string;
}

const TextArea = ({ placeholder, value }: ITextAreaProps) => {
    return <Container placeholder={placeholder} value={value} />;
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
