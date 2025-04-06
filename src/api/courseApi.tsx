// import axios from "axios";
import apiService from "../services/apiService";

export const courseApi = {
    getListCourses: (maNhom: string) => {
        return apiService.get(`/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`);
    },
    searchCourseByName: (courseName: string, maNhom: string) => {
        return apiService.get(`/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${courseName}&MaNhom=${maNhom}`);
    },
    getCourseCategory: () => {
        return apiService.get(`/QuanLyKhoaHoc/LayDanhMucKhoaHoc`);
    },
    
    getCourseByCategory: (maDanhMuc?: string, maNhom?: string) => {
        let url = "/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc";
        if (maDanhMuc && maNhom) {
            url += `?maDanhMuc=${maDanhMuc}&MaNhom=${maNhom}`;
        } else if (maDanhMuc) {
            url += `?maDanhMuc=${maDanhMuc}`;
        }
        return apiService.get(url);
    },

    getCourseById: (id: string) => {
        return apiService.get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`);
    },
    addCourse: (course: FormData) => {
        return apiService.post(`/QuanLyKhoaHoc/ThemKhoaHoc`, course);
    },
    updateCourse: (course: FormData) => {
        return apiService.put(`/QuanLyKhoaHoc/CapNhatKhoaHoc`, course);
    },
    deleteCourse: (courseCode: string) => {
        return apiService.delete(`/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${courseCode}`);
    },
    getListCourseCategories: () => {
        return apiService.get(`/QuanLyKhoaHoc/LayDanhMucKhoaHoc`);
    },
    enrollCourse: (courseCode: { courseCode: string }) => {
        return apiService.post(`/QuanLyKhoaHoc/DangKyKhoaHoc`, courseCode);
    },
    cancelEnrollment: (courseCode: { courseCode: string }) => {
        return apiService.post(`/QuanLyKhoaHoc/HuyGhiDanh`, courseCode);
    },
    getUserInformationForCourse: (courseId: string) => {
        return apiService.get(`/QuanLyKhoaHoc/LayThongTinNguoiDungKhoaHoc?maKhoaHoc=${courseId}`);
    },
    cancelUserEnrollmentForCourse: ({ userId, courseId }: { userId: string; courseId: string }) => {
        return apiService.post(`/QuanLyKhoaHoc/HuyGhiDanhNguoiDung`, { taiKhoan: userId, maKhoaHoc: courseId });
    },
    enrollUserForCourse: ({ userId, courseId }: { userId: string; courseId: string }) => {
        return apiService.post(`/QuanLyKhoaHoc/GhiDanhNguoiDung`, { taiKhoan: userId, maKhoaHoc: courseId });
    },


    // Get list of courses for a user
    registerUser: (userData: {
        taiKhoan: string;
        matKhau: string;
        hoTen: string;
        soDT: string;
        maLoaiNguoiDung: string;
        maNhom: string;
        email: string;
    }) => {
        return apiService.post(`/QuanLyNguoiDung/DangKy`, userData);
    },
    loginUser: (credentials: { taiKhoan: string; matKhau: string }) => {
        return apiService.post(`/QuanLyNguoiDung/DangNhap`, credentials);
    },
    updateUserInfo: (
        userData: {
            taiKhoan: string;
            matKhau: string;
            hoTen: string;
            soDT: string;
            maLoaiNguoiDung: string;
            maNhom: string;
            email: string;
        },
        token: string
    ) => {
        return apiService.put(`/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, userData, {
            headers: { Authorization: `Bearer ${token}` },
        });
    },
    getUserInfo: (taiKhoan: string, token: string) => {
        return apiService.post(
            `/QuanLyNguoiDung/ThongTinTaiKhoan`,
            { TaiKhoan: taiKhoan },
            { headers: { Authorization: `Bearer ${token}` } }
        );
    },
    registerCourse: (
        data: { maKhoaHoc: string; taiKhoan: string },
        token: string
    ) => {
        return apiService.post(`/QuanLyKhoaHoc/DangKyKhoaHoc`, data, {
            headers: { Authorization: `Bearer ${token}` },
        });
    },
    unregisterCourse: (
        data: { maKhoaHoc: string; taiKhoan: string },
        token: string
    ) => {
        return apiService.post(`/QuanLyKhoaHoc/HuyGhiDanh`, data, {
            headers: { Authorization: `Bearer ${token}` },
        });
    },
};
