import { configureStore } from "@reduxjs/toolkit";
import courseManagementSlice from "./slices/courseManagementSlice";
import loadingSlice from "./slices/loadingSlice";
import userManagementSlice from "./slices/userManagementSlice";
import modalSlice from "./slices/modalSlice";
// import toggleThemeSlice from "./slices/toggleThemeSlice";
import drawerSlice from "./slices/drawerSlice";
const isProduction = import.meta.env.PROD;

const store = configureStore({
    reducer: {
        modalSlice,
        // toggleThemeSlice,
        userManagementSlice,
        courseManagementSlice,
        loadingSlice,
        drawerSlice,
    },
    devTools: !isProduction,  // Kích hoạt devTools chỉ trong môi trường phát triển
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
