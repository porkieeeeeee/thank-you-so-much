import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Button from "components/atom/Button";
import FormTitle from "components/atom/FormTitle";
import { postData } from "utils/functions/postData";
import Input from "components/atom/Input";
import TextArea from "components/atom/TextArea";

const FormLayout = () => {
    const [nickname, setNickname] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const HandleClickSubmit = () => {
        postData(nickname, message, setNickname, setMessage);
    };

    return (
        <Container>
            <FormTitle label='응원 부탁드립니다.' />
            <Wrapper>
                <Input
                    placeholder='닉네임을 입력해주세요'
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <TextArea placeholder='ex. 포키 화이팅' value={message} onChange={(e) => setMessage(e.target.value)} />
            </Wrapper>
            <Button type='button' label='이얏호' onClick={HandleClickSubmit} />
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
    input {
        margin-bottom: 20px;
    }
`;

export default FormLayout;
