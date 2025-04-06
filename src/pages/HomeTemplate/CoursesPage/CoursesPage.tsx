import { useEffect, useState } from "react";
import { courseApi } from "../../../api/courseApi";
import {
  I_courseCategory,
  I_coursesByCategory,
//   I_Course,
} from "../../../interfaces/courseManagementInterface";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../../store/store";
import Button from "../../../components/Button/Button";
import style from "./CoursesPage.module.css";
import { navigate } from "../../../helpers/navigate";
import { Select } from "antd";
import { setIsLoadingPageREDU } from "../../../store/slices/loadingSlice";
const DELAY_LOADING_PAGE = 1000;
import SkeletonWarpCourses from "../../../components/Skeleton/SkeletonWrapCourses";
import Cta from "../../../components/cta/cta";

export const wait = function (milisecond: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, milisecond);
  });
};

function CoursesPage() {
  const dispatch: DispatchType = useDispatch();

  const [courseCategories, setCourseCategories] = useState<I_courseCategory[]>(
    []
  );
  const [coursesByCategory, setCoursesByCategory] = useState<
    I_coursesByCategory[]
  >([]);

  const [isSkeleton, setIsSkeleton] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        console.log("Fetching course categories and courses by category...");

        dispatch(setIsLoadingPageREDU(true));

        const { data: categoriesData } = await courseApi.getCourseCategory();
        console.log("Categories Data:", categoriesData);

        const { data: coursesData } = await courseApi.getCourseByCategory();
        console.log("Courses Data:", coursesData);

        setCourseCategories(categoriesData || []);
        setCoursesByCategory(
          Array.isArray(coursesData?.result?.data)
            ? coursesData.result.data.map((item: any) => ({
                tenDanhMucKhoaHoc:
                  item.danhMucKhoaHoc.tenDanhMucKhoaHoc || "Unknown",
                maDanhMucKhoaHoc: [
                  {
                    maKhoaHoc: item.maKhoaHoc,
                    tenKhoaHoc: item.tenKhoaHoc,
                    hinhAnh: item.hinhAnh,
                    courseCategory_ID: item.danhMucKhoaHoc, // Thêm courseCategory_ID
                  },
                ],
              }))
            : []
        );

        await wait(DELAY_LOADING_PAGE);

        dispatch(setIsLoadingPageREDU(false));
      } catch (err) {
        console.error("Error fetching data:", err);

        await wait(DELAY_LOADING_PAGE);

        dispatch(setIsLoadingPageREDU(false));
      }
    };

    fetch();
  }, [dispatch]);

  const handleCourseDetail = (courseId: string) => {
    navigate(`/detailcourse/${courseId}`);
  };

  //khai báo coursesData kiểu any để tránh lỗi typescript
  const coursesData: any = coursesByCategory;
  const handleChange = async (value: string) => {
    if (value === "Tất cả") {
      try {
        setIsSkeleton(true);
        const { data } = await courseApi.getCourseByCategory();
        console.log("All Courses Data:", data);

        setCoursesByCategory(
          Array.isArray(data?.result?.data)
            ? data.result.data.map((item: any) => ({
                tenDanhMucKhoaHoc:
                  item.danhMucKhoaHoc.tenDanhMucKhoaHoc || "Unknown",
                khoaHocTrongDanhMuc: item.courses.map((course: any) => ({
                  maKhoaHoc: course.maKhoaHoc,
                  tenKhoaHoc: course.tenKhoaHoc,
                  hinhAnh: course.hinhAnh,
                  courseCategory_ID: item.I_courseCategoryId, // Linking the category to courses
                })),
              }))
            : []
        );
      } catch (error) {
        console.error("Error fetching all courses:", error);
      } finally {
        setIsSkeleton(false);
      }
      return;
    }

    try {
      setIsSkeleton(true);
      const { data } = await courseApi.getCourseByCategory(value);
      console.log(`Courses by category ${value}:`, data);

      setCoursesByCategory(
        Array.isArray(coursesData?.result?.data)
          ? coursesData.result.data.map((item: any) => ({
              tenDanhMucKhoaHoc:
                item.danhMucKhoaHoc.tenDanhMucKhoaHoc || "Unknown",
              maDanhMucKhoaHoc: [
                {
                  maKhoaHoc: item.maKhoaHoc,
                  tenKhoaHoc: item.tenKhoaHoc,
                  hinhAnh: item.hinhAnh,
                  courseCategory_ID: item.danhMucKhoaHoc,
                },
              ],
            }))
          : []
      );
    } catch (error) {
      console.error("Error fetching courses by category:", error);
    } finally {
      setIsSkeleton(false);
    }
  };

  const options = Array.isArray(courseCategories)
    ? courseCategories.map((category) => ({
        value: category.maDanhMuc,
        label: category.tenDanhMuc,
      }))
    : [];
  options.unshift({ value: "Tất cả", label: "Tất cả" });

  console.log("Courses With Category:", coursesByCategory);

  return (
    <section className="pb-24 space-y-20">
      <div>
        <h1 className={`heading_1 mt-4 mb-5`}>Khoá học</h1>
        <p>
          Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học
          miễn phí, chất lượng, nội dung dễ hiểu.
        </p>
      </div>
      <div className="">
        <h2 className="heading_2">Lọc</h2>
        <div className="flex items-center mt-5 gap-2">
          <p className="heading_3 ">Danh mục: </p>
          <Select
            onChange={handleChange}
            defaultValue="Tất cả"
            style={{ width: 220 }}
            options={options}
          />
        </div>
      </div>
      {isSkeleton === true ? (
        <SkeletonWarpCourses />
      ) : coursesByCategory.length > 0 ? (
        coursesByCategory.map((courses, index) => (
          <div key={index} className="">
            <h2 className="heading_2">{courses.tenDanhMucKhoaHoc}</h2>
            <div className="collumnCourse">
              {courses.khoaHocTrongDanhMuc.map((course) => (
                <div key={course.maKhoaHoc} className="">
                  <div
                    className={`${style.overlay} aspect-[292/165] relative rounded-2xl overflow-hidden`}
                  >
                    <Button
                      onClick={() => {
                        handleCourseDetail(course.maKhoaHoc);
                      }}
                      type="white"
                    >
                      Xem khoá học
                    </Button>
                    <img
                      className="w-full h-full object-cover"
                      src={course.hinhAnh}
                      alt=""
                    />
                  </div>
                  <p className="heading_3 mt-3">{course.tenKhoaHoc}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Không có khoá học nào để hiển thị.</p>
      )}
      <Cta
        textBtn="Xem lộ trình"
        title="Bạn đang tìm kiếm lộ trình học cho người mới?"
        desc="Các khóa học được thiết kế phù hợp cho người mới, lộ trình học rõ ràng, nội dung dễ hiểu."
      />
    </section>
  );
}

export default CoursesPage;
