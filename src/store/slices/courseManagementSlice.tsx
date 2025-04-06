import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { courseApi } from "../../api/courseApi";

// Định nghĩa kiểu dữ liệu
export interface ICourse {
    maKhoaHoc: string;
    biDanh: string;
    tenKhoaHoc: string;
    moTa: string;
    luotXem: number;
    hinhAnh: string;
    maNhom: string;
    ngayTao: string;
    soLuongHocVien: number;
    nguoiTao: {
        taiKhoan: string | null;
        hoTen: string | null;
        maLoaiNguoiDung: string | null;
        tenLoaiNguoiDung: string | null;
    };
    danhMucKhoaHoc: {
        maDanhMucKhoahoc: string;
        tenDanhMucKhoaHoc: string;
    };
}
export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
}

export interface CourseState {
    courseList: ICourse[];
    courseDetails: ICourse | null;
    courseCategories: string[];
    coursesByCategory: ICourse[];
    userInfo: User | null;
    status: "idle" | "loading" | "succeeded" | "failed";
}

export const initialState: CourseState = {
    courseList: [],
    courseDetails: null,
    courseCategories: [],
    coursesByCategory: [],
    userInfo: null,
    status: "idle",
};

export const fetchCourseList = createAsyncThunk(
    "courses/fetchCourseList",
    async (groupCode: string) => {
        const response = await courseApi.getListCourses(groupCode);
        return response.data;
    }
);

export const searchCourseByName = createAsyncThunk(
    "courses/searchCourseByName",
    async ({ courseName, groupCode }: { courseName: string; groupCode: string }) => {
        const response = await courseApi.searchCourseByName(courseName, groupCode);
        return response.data;
    }
);

// Assuming config is defined in a separate file, import it here
import config from "../../config";
console.log("Full API URL:", `${config.apiUrl}QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`);

const courseManagementSlice = createSlice({
    name: "courseManagement",
    initialState,
    reducers: {
        // 1. Lấy danh sách khóa học
        setCourseList: (state, { payload }: PayloadAction<ICourse[]>) => {
            state.courseList = payload;
        },
        // 1.1 Lấy chi tiết khóa học
        setCourseDetails: (state, { payload }: PayloadAction<ICourse | null>) => {
            state.courseDetails = payload;
        },
        // 2. Lấy danh mục khóa học
        setCourseCategories: (state, { payload }: PayloadAction<string[]>) => {
            state.courseCategories = payload;
        },
        // 3. Lấy khóa học theo danh mục
        setCoursesByCategory: (state, { payload }: PayloadAction<ICourse[]>) => {
            state.coursesByCategory = payload;
        },
        // 6. Chỉnh sửa thông tin cá nhân
        updateUserInfo: (state, { payload }: PayloadAction<User>) => {
            state.userInfo = payload;
        },
        // 7. Đăng ký khóa học
        enrollCourse: (state, { payload }: PayloadAction<string>) => {
            console.log(`User đăng ký khóa học: ${payload}`);
        },
        // 8. Hủy đăng ký khóa học
        cancelEnrollment: (state, { payload }: PayloadAction<string>) => {
            console.log(`User hủy đăng ký khóa học: ${payload}`);
        },
        // 9. Xem thông tin cá nhân
        setUserInfo: (state, { payload }: PayloadAction<User | null>) => {
            state.userInfo = payload;
        },
        // 10. Cập nhật thông tin cá nhân cho khóa học
        setUserInfoForCourseREDU: (state, { payload }: PayloadAction<User | null>) => {
            state.userInfo = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourseList.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCourseList.fulfilled, (state, action) => {
                console.log("API Response Payload:", action.payload); // Log the payload
                state.status = "succeeded";
                state.courseList = Array.isArray(action.payload) ? action.payload : []; // Ensure it's an array
            })
            .addCase(fetchCourseList.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(searchCourseByName.pending, (state) => {
                state.status = "loading";
            })
            .addCase(searchCourseByName.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.courseList = Array.isArray(action.payload) ? action.payload : [];
            })
            .addCase(searchCourseByName.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export const {
    setCourseList,
    setCourseDetails,
    setCourseCategories,
    setCoursesByCategory,
    updateUserInfo,
    enrollCourse,
    cancelEnrollment,
    setUserInfo,
    setUserInfoForCourseREDU,
} = courseManagementSlice.actions;

export default courseManagementSlice.reducer;
