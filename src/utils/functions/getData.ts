import { collection, getDocs } from "firebase/firestore";
import { db } from "utils/functions/firebase";
import { IProductDataType } from "utils/interfaces/common";

export const getData = async (): Promise<IProductDataType[]> => {
    const querySnapshot = await getDocs(collection(db, "product"));
    const data: IProductDataType[] = [];

    querySnapshot.forEach((doc) => {
        const productData = doc.data() as IProductDataType;
        data.push(productData);
    });

    return data;
};
