import { collection, getDocs } from "firebase/firestore";
import { db } from "utils/functions/firebase";
import { IComplimentDataType } from "utils/interfaces/common";

export const getData = async (): Promise<IComplimentDataType[]> => {
    const querySnapshot = await getDocs(collection(db, "compliment"));
    const data: IComplimentDataType[] = [];

    querySnapshot.forEach((doc) => {
        const complimentData = doc.data() as IComplimentDataType;
        data.push(complimentData);
    });

    return data;
};
