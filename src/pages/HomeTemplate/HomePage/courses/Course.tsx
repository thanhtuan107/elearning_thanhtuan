import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { RootState, DispatchType } from "../../../../store/store";
import {
  fetchCourseList,
  searchCourseByName,
} from "../../../../store/slices/courseManagementSlice";
import style from "./Course.module.css";
import Button from "../../../../components/Button/Button";
import { ICourse } from "../../../../store/slices/courseManagementSlice"; // Tạo file này nếu cần tách type

function Course() {
  const dispatch: DispatchType = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const { courseList, status } = useSelector(
    (state: RootState) => state.courseManagementSlice
  );

  useEffect(() => {
    dispatch(fetchCourseList("GP01"));
  }, [dispatch]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const courseName = event.target.value;
    if (courseName.trim()) {
      dispatch(searchCourseByName({ courseName, groupCode: "GP01" }));
    } else {
      dispatch(fetchCourseList("GP01")); // Reset to full list if search is cleared
    }
  };

  const handleChiTietKhoaHoc = (courseId: string) => {
    navigate(`/detailcourse/${courseId}`); // Navigate to the detail course route
  };

  console.log("courseList:", courseList);
  return (
    <section className="py-24 container mx-auto px-24">
      <div className="text-left mb-12">
        <div className="max-w-md mb-8 ml-0">
          <input
            type="text"
            placeholder="Tìm kiếm khoá học..."
            className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={handleSearch}
          />
        </div>
        <h2 className="text-4xl font-extrabold">Tất cả khoá học</h2>
        <p className="text-lg text-gray-600 mt-4">
          Khám phá các khóa học hàng đầu được thiết kế để nâng cao kỹ năng và
          kiến thức của bạn.
        </p>
      </div>
      {status === "loading" && <p>Đang tải danh sách khóa học...</p>}
      {status === "failed" && (
        <p>Không thể tìm thấy khóa học. Vui lòng thử lại .</p>
      )}
      {status === "succeeded" && Array.isArray(courseList) && (
        <div className={`${style.courseContainer} grid grid-cols-4 gap-6`}>
          {courseList.slice(0, 8).map((course: ICourse) => (
            <div key={course.maKhoaHoc} className={style.courseCard}>
              <div
                className={`${style.overlay} aspect-[292/165] relative rounded-2xl overflow-hidden`}
              >
                <Button
                  onClick={() => handleChiTietKhoaHoc(course.maKhoaHoc)} // Pass course ID
                  type="white"
                >
                  Xem khoá học
                </Button>
                <img
                  className="w-full h-full object-cover"
                  src={course.hinhAnh}
                  alt={course.tenKhoaHoc}
                />
              </div>

              <div className="mt-3 px-2 py-3 pt-1">
                <p className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {course.tenKhoaHoc}
                </p>
                <p className="text-sm text-gray-600 mt-1 line-clamp-3 pl-2 border-l-2 border-primary/60 italic leading-relaxed">
                  {course.moTa}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Course;
