import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "utils/functions/postData";
import Button from "components/atom/Button";
import FormTitle from "components/atom/FormTitle";
import Input from "components/atom/Input";
import TextArea from "components/atom/TextArea";

const FormLayout = () => {
    const [nickname, setNickname] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const navigate = useNavigate();

    const HandleClickSubmit = async () => {
        const success = await postData(nickname, message, setNickname, setMessage);
        if (success) {
            navigate("/");
        }
    };

    return (
        <Container>
            <FormTitle label='응원 부탁드립니다.' />
            <Wrapper>
                <Input
                    placeholder='닉네임을 입력해주세요'
                    value={nickname}
                    minLength={1}
                    maxLength={5}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <TextArea
                    placeholder='ex. 포키 화이팅'
                    value={message}
                    minLength={1}
                    maxLength={999}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </Wrapper>
            <Button type='button' label='응원 남기기' onClick={HandleClickSubmit} />
        </Container>
    );
};

const Container = styled.form`
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

const Wrapper = styled.div`
    width: 100%;
    div:first-of-type {
        margin-bottom: 20px;
    }
`;

export default FormLayout;
