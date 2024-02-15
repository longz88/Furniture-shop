/* eslint-disable no-unused-vars */
import { Table, Button, Flex } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";
import { deleteAProduct } from "../../services/product/productApi";

const columns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image) => (
      <img
        className="h-12 w-12 rounded-md object-cover"
        src={image}
        alt="image"
      />
    ),
  },
  {
    title: "Name Product",
    dataIndex: "namePro",
    width: "15%",
  },
  {
    title: "Category",
    dataIndex: "category",
    width: "20%",
  },
  {
    title: "Price New",
    dataIndex: "priceNew",
    width: "15%",
    render: (priceNew) => (
      <p>{priceNew.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
    ),
  },
  {
    title: "Price Old",
    dataIndex: "priceOld",
    width: "15%",
    render: (priceOld) => (
      <p>{priceOld.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (product) => (
      <Flex wrap="wrap" gap="small">
        <UpdateProduct product={product} />
        <Button danger onClick={() => deleteAProduct(product._id)}>
          Delete
        </Button>
      </Flex>
    ),
  },
];

// const columns = [
//
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//
// ];

const ManageProduct = () => {
  const [data, setData] = useState();
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 6,
    },
  });

  const products = useSelector((state) => state.products);

  useEffect(() => {
    setData(products.products);
  }, [products]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <div className="">
      <CreateProduct />

      <Table
        columns={columns}
        dataSource={data}
        pagination={tableParams.pagination}
        rowKey={(item) => item._id}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default ManageProduct;
