import styled from "@emotion/styled";
import Button from "components/atom/Button";
import FormTitle from "components/atom/FormTitle";
import MessageBox from "components/molecule/MessageBox";
import { useNavigate } from "react-router-dom";

const ListLayout = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <FormTitle label='칭찬은 포키도 춤추게 합니다.' />
            <MessageBox />
            <Button label='응원하기' type='button' onClick={() => navigate("/register")} />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 500px;
    height: 600px;
    margin: 0 auto;
    padding: 50px 70px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.3);
`;

export default ListLayout;
