import styled from "@emotion/styled";
import MainTitle from "components/atom/MainTitle";
interface IMainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
    return (
        <Container>
            <MainTitle label={`안녕하세요, 포키입니다.\n업무 능력 향상을 위한 응원 부탁드립니다.`} />
            {children}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export default MainLayout;
