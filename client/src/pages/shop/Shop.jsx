/* eslint-disable no-unused-vars */
import BannerPage from "../../components/BannerPage";
import Product from "../../components/Product";
import { ConfigProvider, Select, Space } from "antd";
import bannerFooter from "../../assets/banner/bannerFooter.jpg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Shop = () => {
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;
  const totalPages = Math.ceil(products.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = currentPage * blogsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <BannerPage title={"Shop"} />

      <div className="bg-[#F9F1E7]">
        <div className="mx-auto flex h-[100px] max-w-screen-xl items-center justify-between">
          <p>
            Hiển thị {startIndex} – {endIndex} trong {products.length} kết quả
          </p>
          <div className="">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#b88e2f",
                  borderRadius: 4,
                },
              }}
            >
              <Space wrap>
                <Select
                  defaultValue="Category"
                  style={{
                    width: 200,
                  }}
                  options={[
                    {
                      value: "Theo mức độ phổ biến",
                      label: "Theo mức độ phổ biến",
                    },
                    {
                      value: "Mới nhất",
                      label: "Mới nhất",
                    },
                    {
                      value: "Theo giá: Thấp đến cao",
                      label: "Theo giá: Thấp đến cao",
                    },
                    {
                      value: "Theo giá: cao đến thấp",
                      label: "Theo giá: cao đến thấp",
                    },
                  ]}
                />
                <Select
                  defaultValue="Lọc"
                  style={{
                    width: 200,
                    marginLeft: "24px",
                  }}
                  options={[
                    {
                      value: "Theo mức độ phổ biến",
                      label: "Theo mức độ phổ biến",
                    },
                    {
                      value: "Mới nhất",
                      label: "Mới nhất",
                    },
                    {
                      value: "Theo giá: Thấp đến cao",
                      label: "Theo giá: Thấp đến cao",
                    },
                    {
                      value: "Theo giá: cao đến thấp",
                      label: "Theo giá: cao đến thấp",
                    },
                  ]}
                />
              </Space>
            </ConfigProvider>
          </div>
        </div>
      </div>

      <div className="">
        <div className="mx-auto mt-16 grid max-w-screen-xl grid-cols-4 gap-8">
          {paginatedProducts.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="mt-20 flex items-center justify-center gap-10">
        <button
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage(currentPage - 1);
            window.scrollTo(0, 0);
          }}
          className="cursor-pointer rounded-lg bg-[#F9F1E7] px-6 py-3 text-xl
            font-light duration-300 hover:bg-[var(--primary-color)] hover:text-white"
        >
          Prev
        </button>
        <p
          className="cursor-pointer rounded-lg bg-[var(--primary-color)] px-6 py-3 text-xl
          font-light text-white duration-300 hover:bg-[var(--primary-color)] hover:text-white"
        >
          {currentPage} / {totalPages}
        </p>
        <button
          disabled={currentPage === totalPages}
          onClick={() => {
            setCurrentPage(currentPage + 1);
            window.scrollTo(0, 0);
          }}
          className="cursor-pointer rounded-lg bg-[#F9F1E7] px-6 py-3 text-xl
            font-light duration-300 hover:bg-[var(--primary-color)] hover:text-white"
        >
          Next
        </button>
      </div>

      <img
        className="mt-24 h-[250px] w-full object-cover"
        src={bannerFooter}
        alt=""
      />
    </div>
  );
};

export default Shop;
