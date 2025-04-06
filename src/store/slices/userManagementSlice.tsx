import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_LOGIN } from "../../constants/userContants";
import { lcStorage } from "../../helpers/localStorage";

// Định nghĩa kiểu dữ liệu
interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
}

interface UserState {
    userLogin: User | null;
    userInfo: User | null;
}

// Khởi tạo state ban đầu
const initialState: UserState = {
    userLogin: lcStorage.get(USER_LOGIN),
    userInfo: null,
};

const userManagementSlice = createSlice({
    name: "userManagementSlice",
    initialState,
    reducers: {
        // 5. Đăng nhập
        login: (state, { payload }: PayloadAction<User>) => {
            state.userLogin = payload;
        },
        // 6. Chỉnh sửa thông tin cá nhân
        updateUserLogin: (state, { payload }: PayloadAction<User>) => {
            lcStorage.set(USER_LOGIN, payload);
            state.userLogin = payload;
        },
        // 9. Xem thông tin cá nhân
        setUserInfo: (state, { payload }: PayloadAction<User | null>) => {
            state.userInfo = payload;
        },
    },
});

export const { login, updateUserLogin, setUserInfo } = userManagementSlice.actions;

export default userManagementSlice.reducer;
