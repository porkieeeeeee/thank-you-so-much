import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export enum EToastType {
    SUCCESS = "success",
    ERROR = "error",
}

interface IToastProps {
    type: EToastType;
    message: string;
}

const hasShownToast = new Map<string, boolean>();

export const showToast = ({ type, message }: IToastProps) => {
    const key = `${type}-${message}`;
    if (!hasShownToast.get(key)) {
        switch (type) {
            case EToastType.SUCCESS:
                toast.success(message, {
                    onClose: () => {
                        hasShownToast.delete(key);
                    },
                });
                break;
            case EToastType.ERROR:
                toast.error(message, {
                    onClose: () => {
                        hasShownToast.delete(key);
                    },
                });
                break;
            default:
                toast.info(message, {
                    onClose: () => {
                        hasShownToast.delete(key);
                    },
                });
                break;
        }
        hasShownToast.set(key, true);
    }
};

const Toast = () => {
    return (
        <ToastContainer
            position='top-right'
            autoClose={1000}
            hideProgressBar
            closeOnClick
            pauseOnFocusLoss
            theme='light'
            limit={1}
        />
    );
};

export default Toast;
