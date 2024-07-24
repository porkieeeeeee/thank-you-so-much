import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getData } from "utils/functions/getData";
import { IProductDataType } from "utils/interfaces/common";
import Message from "components/atom/Message";

const MessageBox = () => {
    const [productData, setProductData] = useState<IProductDataType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setProductData(data);
        };
        fetchData();
    }, []);

    return (
        <Container>
            {productData.map((product) => (
                <Message label={product.name} onClick={() => {}} />
            ))}
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
