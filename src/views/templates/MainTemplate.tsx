import MainTitle from "components/atom/MainTitle";
import ListLayout from "layouts/ListLayout";

const MainTemplate = () => {
    return (
        <>
            <MainTitle label={`안녕하세요, 포키입니다.\n업무 능력 향상을 위한 응원 부탁드립니다.`} />
            <ListLayout />
        </>
    );
};

export default MainTemplate;
