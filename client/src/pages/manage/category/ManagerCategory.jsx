/* eslint-disable no-unused-vars */
import { Button, Flex, Modal, Table } from "antd";
import CreateProduct from "../product/CreateProduct";
import { useEffect, useState } from "react";
import UpdateProduct from "../product/UpdateProduct";
import { deleteACategory } from "../../../services/category/categoryApi";
import { useSelector } from "react-redux";

const ManageCategory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (category) => {
    setIsModalOpen(false);
    deleteACategory(category._id);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const categories = useSelector((state) => state.categories);

  const columns = [
    {
      title: "Name Product",
      dataIndex: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (category) => (
        <Flex wrap="wrap" gap="small">
          <Button>Edit</Button>
          <Button danger onClick={showModal}>
            Delete
          </Button>
          <Modal
            title="Delete Category"
            open={isModalOpen}
            onOk={() => handleOk(category)}
            onCancel={handleCancel}
          >
            <p>Are you sure delete???</p>
          </Modal>
        </Flex>
      ),
    },
  ];

  const [data, setData] = useState();
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 6,
    },
  });

  useEffect(() => {
    setData(categories.categories);
  }, [categories]);

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

export default ManageCategory;
