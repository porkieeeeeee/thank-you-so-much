import DetailLayout from "layouts/DetailLayout";
import { useSearchParams } from "react-router-dom";

const DetailTemplate = () => {
    const [searchParams] = useSearchParams();
    const nickname = searchParams.get("nickname");
    const message = searchParams.get("message");

    return <DetailLayout nickname={nickname || ""} message={message || ""} />;
};

export default DetailTemplate;
