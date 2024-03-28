import { LoadingOutlined } from "@ant-design/icons";
import Spin from "antd/lib/spin";
import React from "react";

export default function LoadingSpinner() {
  return <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />;
}
