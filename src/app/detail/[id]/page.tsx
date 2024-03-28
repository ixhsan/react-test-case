"use client";

import LoadingSpinner from "@/components/shared/LoadingSpinner";
import useGlobalContext from "@/hooks/useGlobalContext";
import { Flex, Image, Layout, Row, Space } from "antd";
import Text from "antd/lib/typography/Text";
import Paragraph from "antd/es/typography/Paragraph";
import Col from "antd/lib/grid/col";
import Title from "antd/lib/typography/Title";
import Link from "antd/lib/typography/Link";
import { useParams } from "next/navigation";
import React from "react";
import moment from "moment";

export default function Detail() {
  const { news } = useGlobalContext();

  if (!news) {
    return <LoadingSpinner />;
  }

  return (
    <Layout
      style={{
        padding: 20,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Title>{news.title}</Title>
      <Flex justify="space-between">
        <Text>By: {news.author}</Text>
        <Text>
          Published Date: {moment(news.publishedAt).format("YYYY-MM-DD")}
        </Text>
      </Flex>
      <Image
        height={400}
        src={news.urlToImage || ""}
        alt={news.urlToImage || ""}
      />
      <Paragraph>{news.description}</Paragraph>
      <Paragraph>{news.content}</Paragraph>
      <Link href={news.url}>Source: {news.source.name}</Link>
    </Layout>
  );
}
