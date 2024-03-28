import { Typography } from "antd";
import Title from "antd/lib/typography/Title";
import { Header as AntHeader } from "antd/es/layout/layout";
import React from "react";

const { Text, Paragraph } = Typography;

const headerStyle: React.CSSProperties = {
  // textAlign: "left",
  // paddingTop: 10,
  height: 64,
  display: "flex",
  paddingLeft: 20,

  alignItems: "flex-end",
  // lineHeight: "64px",
  backgroundColor: "#ffffff",
};

export default function Header() {
  return (
    <AntHeader style={headerStyle}>
      <Title style={{ margin: 0 }}>MakNews</Title>
    </AntHeader>
  );
}
