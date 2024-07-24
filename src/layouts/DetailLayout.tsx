import styled from "@emotion/styled";
import { IComplimentDataType } from "utils/interfaces/common";
import { Link, useNavigate } from "react-router-dom";
import Button from "components/atom/Button";
import FormTitle from "components/atom/FormTitle";

const DetailLayout = ({ nickname, message }: IComplimentDataType) => {
    const navigate = useNavigate();

    return (
        <Container>
            <BackButton to={"/"}>{"<"} 뒤로가기</BackButton>
            <FormTitle strongLabel={nickname} label='님의 응원' />
            <Wrapper>{message}</Wrapper>
            <Button type='button' label='나도 응원하기' onClick={() => navigate("/register")} />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 500px;
    height: 600px;
    margin: 0 auto;
    padding: 50px 70px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.3);
`;

const BackButton = styled(Link)`
    position: absolute;
    top: 25px;
    left: 30px;
    color: #fff;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 300px;
    padding: 12px 14px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    overflow-y: auto;
    color: #fff;

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

export default DetailLayout;
