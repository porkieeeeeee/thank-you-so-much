import styled from "@emotion/styled";
import loveLetter from "assets/icons/message-icon.svg";

interface IMessageProps {
    label: string;
    onClick?: () => void;
}

const Message = ({ label, onClick }: IMessageProps) => {
    return <Container onClick={onClick}>{label}</Container>;
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
