/* eslint-disable no-unused-vars */
import { LuArrowRight } from "react-icons/lu";

const listTitle = [
  {
    image: "",
    title: "Phòng khách",
    des: "Tươi mới",
  },
  {
    image: "",
    title: "Phòng ăn",
    des: "Đầm ấm",
  },
  {
    image: "",
    title: "Phòng ngủ",
    des: "Êm ái",
  },
  {
    image: "",
    title: "Phòng làm việc",
    des: "Thoải mái",
  },
];

const Design = () => {
  return (
    <div className="my-40 flex h-[670px] items-center bg-[#FCF8F3]">
      <div className="ml-24 mr-11 w-[420px]">
        <h1 className="text-4xl font-bold">50+ Ý tưởng không gian sống</h1>
        <p className="mb-6 mt-2 text-base font-medium text-[var(--gray2)]">
          Nhà thiết kế của chúng tôi đã tạo ra rất nhiều mẫu phòng đẹp để truyền
          cảm hứng cho bạn
        </p>
        <button className="font-semibold] bg-[var(--primary-color)] px-9 py-3 text-base text-white">
          Tìm hiểu thêm
        </button>
      </div>

      <div className="flex gap-6">
        <div className="relative h-[580px] w-[400px]">
          <img
            className="h-full w-full object-cover"
            src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/29/840195/Nha-01.jpg"
            alt=""
          />
          <div className="absolute bottom-6 left-6 flex items-end ">
            <div className="bg-[var(--white-overlay)] p-8">
              <p className="mb-2 text-base font-medium text-[var(--gray2)]">
                01 - Phòng khách
              </p>
              <p className="text-2xl font-semibold">Tươi mới</p>
            </div>
            <div className="cursor-pointer bg-[var(--primary-color)] p-3">
              <LuArrowRight size={20} />
            </div>
          </div>
          <ul className="absolute bottom-8 left-[108%] flex gap-5">
            <li className="h-3 w-3 cursor-pointer rounded-full bg-[var(--primary-color)] duration-300 hover:bg-[var(--primary-color)]"></li>
            <li className="h-3 w-3 cursor-pointer rounded-full bg-[var(--gray5)] duration-300 hover:bg-[var(--primary-color)]"></li>
            <li className="h-3 w-3 cursor-pointer rounded-full bg-[var(--gray5)] duration-300 hover:bg-[var(--primary-color)]"></li>
            <li className="h-3 w-3 cursor-pointer rounded-full bg-[var(--gray5)] duration-300 hover:bg-[var(--primary-color)]"></li>
          </ul>
        </div>

        <div className="flex h-[486px] flex-1 gap-6 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/29/840195/Nha-01.jpg"
            alt=""
          />

          <img
            className="h-full w-full object-cover"
            src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/29/840195/Nha-01.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Design;
