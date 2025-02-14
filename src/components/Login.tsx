import * as React from "react";
import { Modal, Form, Button, DatePicker, message } from "antd";
import dayjs from "dayjs";
import { div } from "framer-motion/client";

interface LoginProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FunctionComponent<LoginProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const handleOk = (values: any) => {
    const date = values.date;

    if (date) {
      const selectedDate = date.format("YYYY-MM-DD");
      const correctDate = "2023-08-13";

      console.log("Selected Date:", {
        day: date.get("D"),
        month: date.month() + 1,
        year: date.year(),
        formatted: date.format("YYYY-MM-DD"),
      });

      if (selectedDate === correctDate) {
        messageApi.success("🎉 Correct Answer! Hi ebeb hihi 🎉");
        setTimeout(() => {
          setIsModalOpen(false);
        }, 1500);
      } else {
        messageApi.error("❌ Wrong Answer! Masa gatau:(.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {contextHolder} {/* Required for message API */}
      <Modal
        title="When did we start our relationship?"
        open={isModalOpen}
        footer={null}
        closable={false}
      >
        <Form onFinish={handleOk} layout="vertical">
          <Form.Item
            name="date"
            label="Choose a date"
            rules={[{ required: true, message: "Please select a date!" }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Login;
