import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "utils/functions/firebase";

export const postData = async (
    nickname: string,
    message: string,
    setNickname: React.Dispatch<React.SetStateAction<string>>,
    setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
    try {
        await addDoc(collection(db, "compliment"), {
            nickname,
            message,
            createdAt: serverTimestamp(),
        });
        setNickname("");
        setMessage("");
        console.log("쌈@뽕한 데이터 저장🥳🥳");
        return true;
    } catch (error) {
        console.error("쌈@뽕한 에러 발생🥵🥵", error);
        return false;
    }
};
