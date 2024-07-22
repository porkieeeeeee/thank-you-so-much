import styled from "@emotion/styled";
import Message from "components/atom/Message";

const MessageBox = () => {
    return (
        <Container>
            <Message label='집에보내줘' />
            <Message label='집에보내줘' />
            <Message label='집에보내줘' />
            <Message label='집에보내줘' />
            <Message label='집에보내줘' />
            <Message label='집에보내줘' />
            <Message label='집에보내줘' />
            <Message label='집에보내줘' />
            <Message label='집에보내줘' />
            <Message label='집에보내줘' />
            <Message label='집에보내줘' />
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    height: 370px;
    overflow-y: auto;

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

export default MessageBox;
