import { FaFacebookF, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import Logo from "../Logo/Logo";
import style from "./Footer.module.css";

function Footer() {
  const titleColumn = `mb-6 text-sm font-semibold uppercase text-slate-200`;
  const textColumn = `text-gray-500 hover:text-gray-200 font-medium ${style.footer_item}`;
  const iconHoverEffect = `hover:text-secondary transition-transform transform hover:scale-110`;

  return (
    <footer
      className={`${style.content_footer} bg-gradient-to-r from-gray-800 via-gray-900 to-black pt-24 w-full`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="xl:flex xl:justify-between">
          {/* CỘT LOGO */}
          <div
            className="flex flex-col lg:justify-between overflow-hidden 
                        space-y-10
                        xl:space-y-0
                        "
          >
            {/* <Logo /> */}
            {/* INFO */}
            <ul className="text-gray-500 font-medium space-y-2">
              <li>
                <p className="truncate">
                  <strong>Address: </strong>
                  <span className={textColumn}>Việt Nam</span>
                </p>
              </li>
              <li>
                <p className="truncate">
                  <strong>Phone: </strong>
                  <a className={textColumn} href="tel:+(12)234-11-24">
                    +(84)35-77000-17
                  </a>
                </p>
              </li>
              <li>
                <p className="truncate">
                  <strong>Email: </strong>
                  <a className={textColumn} href="mailto:example@mail.com">
                    thanhtuan122@mail.com
                  </a>
                </p>
              </li>
            </ul>

            {/* SOCIAL */}
            <div className="flex space-x-5 mt-3 sm:mt-0">
              <a
                className={`${textColumn} ${iconHoverEffect}`}
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/nguyen.thanh.tuan.473255"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                className={`${textColumn} ${iconHoverEffect}`}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/thanhtuan107"
              >
                <FaGithub size={20} />
              </a>
              <a
                className={`${textColumn} ${iconHoverEffect}`}
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/thanhtuan107/"
              >
                <FaInstagram size={20} />
              </a>
              <a
                className={`${textColumn} ${iconHoverEffect}`}
                target="_blank"
                rel="noreferrer"
                href="mailto:thanhtuana122@gmail.com"
              >
                <FaGoogle size={20} />
              </a>
            </div>
          </div>
          <div
            className="grid 
                        mt-16 gap-10 grid-cols-1 
                        sm:mt-16 sm:gap-10 sm:grid-cols-2 
                        xl:mt-0
                        lg:grid-cols-3
                        xl:gap-20
                        "
          >
            {/* CỘT TRỢ GIÚP */}
            <div>
              <h2 className={titleColumn}>Trợ giúp</h2>
              <ul className="text-gray-500 font-medium space-y-2">
                <li>
                  <Link to="/" className={textColumn}>
                    Các câu hỏi thường gặp
                  </Link>
                </li>
                <li>
                  <Link to="/" className={textColumn}>
                    Trung tâm đa phương tiện
                  </Link>
                </li>
                <li>
                  <Link to="/" className={textColumn}>
                    Các cách xem
                  </Link>
                </li>
                <li>
                  <Link to="/" className={textColumn}>
                    Tuỳ chọn cookie
                  </Link>
                </li>
                <li>
                  <Link to="/" className={textColumn}>
                    Kiểm tra tốc độ
                  </Link>
                </li>
              </ul>
            </div>

            {/* CỘT THÔNG TIN */}
            <div>
              <h2 className={titleColumn}>Thông tin</h2>
              <ul className="text-gray-500 font-medium space-y-2">
                <li>
                  <Link to="/" className={textColumn}>
                    Trung tâm trợ giúp
                  </Link>
                </li>
                <li>
                  <Link to="/" className={textColumn}>
                    Quan hệ với nhà đầu tư
                  </Link>
                </li>
                <li>
                  <Link to="/" className={textColumn}>
                    Điều khoản sử dụng
                  </Link>
                </li>
                <li>
                  <Link to="/" className={textColumn}>
                    Thông tin doanh nghiệp
                  </Link>
                </li>
                <li>
                  <Link to="/" className={textColumn}>
                    Thông báo pháp lý
                  </Link>
                </li>
              </ul>
            </div>

            {/* CỘT KẾT NỐI */}
            <div>
              <h2 className={titleColumn}>Kết nối</h2>
              <ul className="text-gray-500 font-medium space-y-2">
                <li>
                  <Link to="/" className={textColumn}>
                    Tài khoản
                  </Link>
                </li>
                <li>
                  <Link to="/" className={textColumn}>
                    Việc làm
                  </Link>
                </li>
                <li>
                  <Link to="/" className={textColumn}>
                    Quyền riêng tư
                  </Link>
                </li>
                <li>
                  <Link to="/" className={textColumn}>
                    Liên hệ với chúng tôi
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />

      <div className="sm:flex sm:items-center justify-center pb-6">
        <p
          className="text-sm sm:text-center text-gray-400
                    text-center
                    "
        >
          <span>© 2025 </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/thanhtuan107"
            className={`hover:text-white transition ${style.footer_item}`}
          >
            NguyenThanhTuan
          </a>
          <span>. All Rights Reserved.</span>
        </p>
      </div>

      {/* Back to Top Button */}
      <div className="text-center mt-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-300 sm:text-center text-gray-400
                    text-center transition"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
