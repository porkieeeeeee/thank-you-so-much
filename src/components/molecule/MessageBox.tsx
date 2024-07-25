import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getData } from "utils/functions/getData";
import { IComplimentDataType } from "utils/interfaces/common";
import { useNavigate } from "react-router-dom";
import Message from "components/atom/Message";

const MessageBox = () => {
    const [complimentData, setComplimentData] = useState<IComplimentDataType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setComplimentData(data);
        };
        fetchData();
    }, []);

    const handleMessageClick = (compliment: IComplimentDataType) => {
        const queryParams = new URLSearchParams({
            nickname: compliment.nickname,
            message: compliment.message,
        });
        navigate(`/detail?${queryParams.toString()}`);
    };
    return (
        <Container>
            {complimentData.map((compliment) => (
                <li>
                    <Message label={compliment.nickname} type='button' onClick={() => handleMessageClick(compliment)} />
                </li>
            ))}
        </Container>
    );
};

const Container = styled.ul`
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
