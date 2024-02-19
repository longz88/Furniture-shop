/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
} from "antd";
import { useEffect, useState } from "react";

const { Option } = Select;

const UpdateProduct = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateForm] = Form.useForm();

  const { product } = props;

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [priceNew, setPriceNew] = useState("");
  const [priceOld, setPriceOld] = useState("");
  const [sale, setSale] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [SKU, setSKU] = useState("");
  const [material, setMaterial] = useState("");
  const [dimension, setDimension] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (product) {
      setName(product.namePro);
      setTitle(product.title);
      setImage(product.image);
      setPriceNew(product.priceNew);
      setPriceOld(product.priceOld);
      setSale(product.sale);
      setDescription(product.description);
      setCategory(product.category);
      setSKU(product.SKU);
      setMaterial(product.material);
      setDimension(product.dimension);
    }
  }, [product]);

  return (
    <div className="">
      <Button onClick={showModal}>Edit</Button>
      <Modal
        title="Update product"
        open={isModalOpen}
        onOk={() => updateForm.submit()}
        onCancel={handleCancel}
      >
        <Form
          form={updateForm}
          name="update"
          onFinish={onFinish}
          layout="vertical"
        >
          <Row gutter={10}>
            <Col span={12}>
              {" "}
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname!",
                  },
                ]}
              >
                <Input value={name} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: "Please select category !!!",
                  },
                ]}
              >
                <Input value={title} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              {" "}
              <Form.Item
                name="image"
                label="Image"
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname!",
                  },
                ]}
              >
                <Input value={image} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="sale" label="Sale">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item
                name="priceNew"
                label="Price New"
                rules={[
                  {
                    required: true,
                    message: "Please select category !!!",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="priceOld" label="Price Old">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item
                name="SKU"
                label="SKU"
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="category"
                label="Category"
                rules={[
                  {
                    required: true,
                    message: "Please select category !!!",
                  },
                ]}
              >
                <Select>
                  <Option value="65bbcfda61c440f17a010483">
                    65bbcfda61c440f17a010483
                  </Option>
                  <Option value="87">+87</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item
                name="material"
                label="Material"
                rules={[
                  {
                    required: true,
                    message: "Please select category !!!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dimension"
                label="Dimension"
                rules={[
                  {
                    required: true,
                    message: "Please select category !!!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: "Please input description !!!",
              },
            ]}
          >
            <Input.TextArea showCount />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateProduct;
