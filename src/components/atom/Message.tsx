import styled from "@emotion/styled";
import loveLetter from "assets/icons/message-icon.svg";

interface IMessageProps {
    label: string;
    type: "button" | "submit" | "reset";
    onClick?: () => void;
}

const Message = ({ label, type, onClick }: IMessageProps) => {
    return (
        <Container type={type} onClick={onClick}>
            {label}
        </Container>
    );
};

const Container = styled.button`
    width: 100px;
    height: 120px;
    margin: 0 auto;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    text-align: center;

    ::before {
        content: "";
        display: block;
        width: 80px;
        height: 80px;
        margin: 0 auto;
        background: url(${loveLetter}) center / contain no-repeat;
    }
`;

export default Message;
