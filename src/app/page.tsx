import { Content } from "antd/es/layout/layout";
import React from "react";
import NewsList from "@/components/NewsList";

const contentStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
  minHeight: 120,
  // lineHeight: "120px",
  backgroundColor: "#ffffff",
};

export default async function Home() {
  return (
    <>
      <Content style={contentStyle}>
        <NewsList />
      </Content>
    </>
  );
}
